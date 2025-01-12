import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("9b2_TXlcX6tRoL6x_");

export const sendEmail = async (formData: HTMLFormElement) => {
  return emailjs.sendForm(
    'service_4afh17a', // EmailJS service ID
    'template_48et5ge', // EmailJS template ID
    formData,
    '9b2_TXlcX6tRoL6x_' // Public key
  );
};