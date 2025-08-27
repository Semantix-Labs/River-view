import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { fullName, phone, email, message } = req.body;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'semantixlabs@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: 'semantixlabs@gmail.com',
      to: 'riverviewvillas23@gmail.com',
      replyTo: email,
      subject: `New Contact Message from ${fullName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
        <hr>
        <p><em>Reply to this email to respond directly to ${fullName} (${email})</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${fullName}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
        
        Reply to this email to respond directly to ${fullName}
      `,
    };

    // Confirmation email to sender
    const confirmationMailOptions = {
      from: 'semantixlabs@gmail.com',
      to: email,
      subject: 'Thank you for contacting River View Villas',
      html: `
        <h3>Thank you for your message!</h3>
        <p>Dear ${fullName},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
        <p>Best regards,<br>River View Villas Team</p>
      `,
    };

    try {
      // Send emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(confirmationMailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
