require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject || 'Nouveau message de contact',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    res.status(200).json({ message: 'Votre message a été envoyé avec succès.' });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email.", error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
