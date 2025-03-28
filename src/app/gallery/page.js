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
          <Image
            src="https://picsum.photos/200/300"
            alt="Random image from picsum.photos"
            className="w-full h-auto"
          />
          <Image
            src="https://picsum.photos/200/301"
            alt="Random image from picsum.photos"
            className="w-full h-auto"
          />
          <Image
            src="https://picsum.photos/200/302"
            alt="Random image from picsum.photos"
            className="w-full h-auto"
          />
          <Image
            src="https://picsum.photos/200/303"
            alt="Random image from picsum.photos"
            className="w-full h-auto"
          />
          <Image
            src="https://picsum.photos/200/304"
            alt="Random image from picsum.photos"
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }