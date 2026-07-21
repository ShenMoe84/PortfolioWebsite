import emailjs from '@emailjs/browser';

export const isValidName = (name) => name.length > 3;

export const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

export const isValidSubj = (subj) => subj.length > 3;

export const charCountSpan = document.getElementById('charCount');

export const sendEmail = async (formData) => {
  const templateParams = {
    name: formData.get('Name'),
    email: formData.get('Email'),
    subject: formData.get('Subject'),
    message: formData.get('Message'),
  };

  try {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      }
    );
    alert('Email sent successfully!');
    charCountSpan.textContent = '0';
  } catch (error) {
    alert('Failed to send email, please try again.', error.message);
  }
};