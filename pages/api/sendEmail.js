import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phone, email, message } = req.body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'harshaudayanga401@gmail.com', // Your email address to send from
        pass: process.env.EMAIL_PASS, // Password for the email
      },
    });

    const mailOptions = {
      from: 'harshaudayanga401@gmail.com', // Your email address to send from
      to: 'riverviewvillas23@gmail.com', // Recipient email address
      subject: `New Contact Message from ${fullName}`,
      text: `
        Name: ${fullName}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
