import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';
import { sendEmail } from '../services/emailService';

export function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await sendEmail(e.currentTarget);
      toast.success('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20"
        />
      </div>
      <div>
        <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:ring focus:ring-blue-500/50"
      >
        Send Message
      </button>
    </form>
  );
}