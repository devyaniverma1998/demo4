export default function About() {
    return (
      <div className="p-4 container mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-warning mb-6">About Me</h1>
  
        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">
          I am a skilled web developer specializing in <span className="font-semibold">Webflow, Next.js, React, and modern front-end technologies</span>. 
          I build fast, responsive, and user-friendly web applications.
        </p>
  
        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-lg bg-white text-center">
            <h3 className="text-xl font-semibold text-warning mb-2">Next.js</h3>
            <p className="text-gray-600">Building scalable and high-performance React applications.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg bg-white text-center">
            <h3 className="text-xl font-semibold text-warning mb-2">Webflow</h3>
            <p className="text-gray-600">Creating visually stunning and dynamic websites with Webflow.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg bg-white text-center">
            <h3 className="text-xl font-semibold text-warning mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">Crafting modern, responsive designs with utility-first styling.</p>
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
  