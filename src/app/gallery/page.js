import Image from "next/image";

export default function Gallery() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p>
        This is a simple gallery page. You can use this as a template for your own
        gallery page.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
       <img
          src="/images/gallery-1.jpg"
          alt="Random image from picsum.photos"
          width={500}  // Added required width
          height={300} // Added required height
          className="w-full h-auto"
        />
       <img
          src="/images/gallery-2.jpg"
          alt="Random image from picsum.photos"
          width={500}  // Added required width
          height={300} // Added required height
          className="w-full h-auto"
        />
       <img
          src="/images/gallery-3.jpg"
          alt="Random image from picsum.photos"
          width={500}  // Added required width
          height={300} // Added required height
          className="w-full h-auto"
        />
       <img
          src="/images/gallery-4.jpg"
          alt="Random image from picsum.photos"
          width={500}  // Added required width
          height={300} // Added required height
          className="w-full h-auto"
        />
       <img
          src="/images/gallery-5.jpg"
          alt="Random image from picsum.photos"
          width={500}  // Added required width
          height={300} // Added required height
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}