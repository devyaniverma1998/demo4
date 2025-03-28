export default function Contact() {
    return (
      <div className="p-4 container mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-warning mb-6">Contact Me</h1>
  
        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">
          Feel free to reach out for any inquiries, collaborations, or just to say hi!  
        </p>
  
        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-white p-5 shadow-lg rounded-lg">
          <form action="/api/contact" method="post">
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
  
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
  
            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
  
        {/* Additional Contact Info */}
        <div className="text-center mt-6">
          <p className="text-gray-700">Or reach me directly at:</p>
          <a href="tel:+1234567890" className="text-blue-500 font-semibold">+1 234 567 890</a>
        </div>
      </div>
    );
  }
  