import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('Asdfghjkl$56', 'template_btpfq8s', e.target, 'BT7JodN1veyZwjhT1')
      .then((result) => {
        setStatus('Message sent successfully!');
        setFormData({
          from_name: '',
          from_email: '',
          message: ''
        });
      }, (error) => {
        console.error('Error sending message:', error.text); // Log the error message for debugging
        setStatus('Error sending message.');
      });
  };

  return (
    <div className="p-8 bg-gradient-to-b from-green-900 via-gray-900 to-black text-white" id="contactme">
    <div className="text-center mb-8 relative">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-transform transform hover:scale-110 inline-block">
        Contact Me
      </h2>
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300 hover:w-full"></span>
    </div>
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <div>
        <label htmlFor="name" className="block text-lg mb-2 font-semibold">Name:</label>
        <input
          type="text"
          id="name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg mb-2 font-semibold">Email:</label>
        <input
          type="email"
          id="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg mb-2 font-semibold">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full h-48 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your message"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
      >
        Send Message
      </button>
      {status && <p className="mt-4 text-lg text-center">{status}</p>}
    </form>
  </div>
  );
};

export default ContactForm;






//    emailjs.sendForm('Asdfghjkl$56', 'template_btpfq8s', e.target, 'BT7JodN1veyZwjhT1')