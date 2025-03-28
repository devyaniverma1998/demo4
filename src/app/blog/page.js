export default function Blog() {
    return (
      <div className="p-4 container mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-warning mb-6">Blog</h1>
  
        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">
          Stay updated with the latest <span className="font-semibold">insights, tutorials, and trends</span> in web development, Webflow, Next.js, and more.
        </p>
  
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="p-4 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-semibold text-warning mb-2">Getting Started with Next.js</h3>
            <p className="text-gray-600">Learn the basics of Next.js and how to build fast web applications.</p>
            <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">Read More →</a>
          </div>
  
          {/* Blog Post 2 */}
          <div className="p-4 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-semibold text-warning mb-2">Webflow for Developers</h3>
            <p className="text-gray-600">Discover how Webflow can speed up your design workflow and integrate with code.</p>
            <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">Read More →</a>
          </div>
  
          {/* Blog Post 3 */}
          <div className="p-4 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-semibold text-warning mb-2">Mastering Tailwind CSS</h3>
            <p className="text-gray-600">Boost your frontend skills with Tailwinds utility-first approach.</p>
            <a href="#" className="text-blue-500 font-semibold mt-2 inline-block">Read More →</a>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="mt-8 py-3 text-center">
          <a href="#contact" className="btn btn-warning px-4 py-2 rounded-full text-white shadow-md">
            Contact Me
          </a>
        </div>
      </div>
    );
  }
  