import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phone, email, message } = req.body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email address to receive the message
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
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
