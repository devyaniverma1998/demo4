export default function Faq() {
  return (
    <div className="p-4 container mx-auto">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center  mb-6">Frequently Asked Questions</h1>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto bg-white p-5 ">
        <ul className="space-y-6">
          {/* FAQ Item 1 */}
          <li className="border-b pb-4">
            <h3 className="text-xl font-semibold ">What is this website?</h3>
            <p className="text-gray-600 mt-2">
              This website is a simple Next.js app that uses Tailwind CSS for styling.
            </p>
          </li>

          {/* FAQ Item 2 */}
          <li className="border-b pb-4">
            <h3 className="text-xl font-semibold ">What is Tailwind CSS?</h3>
            <p className="text-gray-600 mt-2">
              Tailwind CSS is a utility-first CSS framework for building custom user interfaces.
            </p>
          </li>

          {/* FAQ Item 3 */}
          <li>
            <h3 className="text-xl font-semibold ">What is Next.js?</h3>
            <p className="text-gray-600 mt-2">
              Next.js is an open-source React front-end framework that enables server-side rendering and generates static web pages for production.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
