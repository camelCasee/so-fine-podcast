const nodemailer = require('nodemailer');

export default function handler(req, res) {
  const message = {
    from: req.body.email,
    to: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
    subject: req.body.subject,
    text: req.body.comments,
    html: `<p>${req.body.comments}</p>`,
  };
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
            error: `Connection refused at ${err}`
        });
      } else {
        res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}