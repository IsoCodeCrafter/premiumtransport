import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'template_bx1181i', e.target, 'fXOM8zaWvyGL--7rS')
    .then((result) => {
      console.log('Email sent successfully!', result.text);
    }, (error) => {
      console.log('Failed to send email.', error.text);
    });
};

export default sendEmail;