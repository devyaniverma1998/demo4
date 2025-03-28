import Link from "next/link";


export default function Header() {


    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    MyWebsite
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    <Link href="/" className="text-lg font-medium hover:text-gray-400 transition">Home</Link>
                    <Link href="/about" className="text-lg font-medium hover:text-gray-400 transition">About</Link>
                    <Link href="/blog" className="text-lg font-medium hover:text-gray-400 transition">Blog</Link>
                    <Link href="/gallery" className="text-lg font-medium hover:text-gray-400 transition">Gallery</Link>
                    <Link href="/contact" className="text-lg font-medium hover:text-gray-400 transition">Contact</Link>
                </nav>

            </div>
        </header>
    );
}
