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
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-transform transform hover:scale-110 inline-block">
          Contact Me
        </h2>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300 hover:w-full"></span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg">Name:</label>
          <input
            type="text"
            id="name"
            name="from_name" // Ensure this matches the placeholder in the template
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg">Email:</label>
          <input
            type="email"
            id="email"
            name="from_email" // Ensure this matches the placeholder in the template
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-lg">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;






//    emailjs.sendForm('Asdfghjkl$56', 'template_btpfq8s', e.target, 'BT7JodN1veyZwjhT1')