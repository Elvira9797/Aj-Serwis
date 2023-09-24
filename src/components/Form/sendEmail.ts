import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { FormFields } from './Form';
import 'react-toastify/dist/ReactToastify.css';
import i18next from 'i18next';

const EMAIL_JS_USER_ID = 'eNBJiy-cGjOG9e9o7';
const EMAIL_JS_SERVICE_ID = 'service_w20v33g';
const EMAIL_JS_TEMPLATE_ID = 'template_9ldoczw';

emailjs.init(EMAIL_JS_USER_ID);
export { EMAIL_JS_USER_ID, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID };

const sendEmail = async (data: FormFields, vacancyName: string) => {
  const emailData = {
    to_email: 'aj.serwis.sp@gmail.com',
    subject: `${vacancyName}`,
    from_name: `${vacancyName}`,
    message: `
      Name: ${data.name}
      Surname: ${data.surname}
      Phone: ${data.phone}
      Comment or Review: ${data.comment}
    `,
  };

  try {
    await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, emailData);
    const toastText = i18next.t('main.contactUs.form.toast');
    toast.success(toastText);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;
