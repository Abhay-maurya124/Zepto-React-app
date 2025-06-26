import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* If in standalone HTML: add <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="mx-auto text-xl text-gray-400 max-w-2xl">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            {[{
              icon: FaEnvelope, title: 'Email', lines: ['support@gmail.com','sales@gmail.com']
            },{
              icon: FaPhone, title: 'Phone', lines: ['+91 70424-95598','Mon–Fri, 9 am–5 pm']
            },{
              icon: FaMapMarkerAlt, title: 'Address', lines: ['Bajpaee chock', 'New Delhi, India 110071']
            }].map(({icon: Icon, title, lines})=>(
              <div key={title} className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-500 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{title}</h3>
                  {lines.map(line=>(
                    <p key={line} className="mt-1 text-gray-400">{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-8">
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map(social=>(
                  <a
                    key={social}
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    <span className="text-gray-400 hover:text-white">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Your Name' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'xyz@gmail.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' }
              ].map(({id, label, type, placeholder})=>(
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                               text-white placeholder-gray-400"
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                             text-white placeholder-gray-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full justify-center sm:w-auto items-center px-6 py-3 
                             border border-transparent text-base font-medium rounded-lg shadow-sm 
                             text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
                             focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                >
                  Send Message
                  <FaPaperPlane className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
