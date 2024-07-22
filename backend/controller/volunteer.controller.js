import nodemailer from 'nodemailer';

// Handle volunteer submission and send email notification
export const handleVolunteerSubmission = async (req, res) => {
  const { fullName, email, phone, interests, startDate, endDate } = req.body;

  // Logging environment variables for debugging
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_PASS:', process.env.GMAIL_PASS);

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Set up email data
  let mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: email, // Recipient's email address from the form
    subject: 'New Volunteer Submission', // Subject line
    text: `Hello ${fullName},\n\nThank you for your volunteer submission!\n\nDetails:\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAreas of Interest: ${interests}\nAvailability Start Date: ${startDate}\nAvailability End Date: ${endDate}\n\nWe will get back to you soon.\n\nRegards,\nFoodSecure`
  };

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Volunteer submission received successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error submitting volunteer information.');
  }
};
