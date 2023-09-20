import emailjs from 'emailjs-com';
import { FormFields } from './Form';
const EMAIL_JS_USER_ID = 'cpL-disfPacYQD52J';
const EMAIL_JS_SERVICE_ID = 'service_9yascik';
const EMAIL_JS_TEMPLATE_ID = 'template_3qxcywm';


emailjs.init(EMAIL_JS_USER_ID);
export { EMAIL_JS_USER_ID, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID };

const sendEmail = async (data: FormFields) => {
  const emailData = {
    to_email: 'dev6012@meta.ua',
    subject: 'Welcome',
    message: `
      Name: ${data.name}
      Surname: ${data.surname}
      Phone: ${data.phone}
      Email: ${data.email}
      Comment or Review: ${data.comment}
    `,
  };

  try {
    await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, emailData);
    alert('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Error sending email.');
  }
};

export default sendEmail;
