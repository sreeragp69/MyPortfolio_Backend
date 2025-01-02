const nodemailer = require("nodemailer");

const Contact = async (req, res) => {
  const { name, email,subject, message } = req.body;

  if (!name || !email || !message || !subject) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD, // Corrected line
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: subject,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = Contact;
