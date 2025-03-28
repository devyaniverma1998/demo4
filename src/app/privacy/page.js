export default function Privacy() {
  return (
    <div className="p-5 container mx-auto">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-warning mb-6">Privacy Policy</h1>

      {/* Privacy Content */}
      <div className="max-w-2xl mx-auto bg-white p-5 shadow-lg rounded-lg">
        <p className="text-lg text-gray-700 mb-4">
          This website does not collect any personal information from users. Any information collected is used solely for the purpose of providing the requested service.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          We do not share any information with third parties, except as required by law.
        </p>

        <p className="text-lg text-gray-700">
          We take reasonable measures to protect your information from loss, misuse, unauthorized access, disclosure, alteration, and destruction.
        </p>
      </div>

      {/* Last Updated Info */}
      <p className="text-center text-gray-500 mt-6">
        <em>Last Updated: March 2025</em>
      </p>
    </div>
  );
}
