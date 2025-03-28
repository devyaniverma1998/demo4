import Image from "next/image";

export default function Gallery() {
  return (
    <div className="p-4 container mx-auto">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-warning mb-6">Gallery</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">
        Explore our collection of images showcasing creativity and design.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`https://picsum.photos/400/300?random=${index + 1}`}
              alt="Random gallery image"
              width={400}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
