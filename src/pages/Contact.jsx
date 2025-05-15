import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        We'd love to hear from you! Fill out the form below and our team will get back to you soon.
      </p>
      <form className="space-y-6 bg-white p-8 rounded-xl shadow">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            rows={4}
            placeholder="Type your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 text-center text-gray-500 text-sm">
        Or email us at <a href="mailto:support@example.com" className="text-red-600 underline">support@example.com</a>
      </div>
    </div>
  );
};

export default Contact;