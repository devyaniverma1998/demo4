import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Footer Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-400 transition">Terms of Service</Link>
          <Link href="/faq" className="hover:text-gray-400 transition">FAQ</Link>
          <Link href="/contact" className="hover:text-gray-400 transition">Contact Us</Link>
        </nav>

        {/* Copyright Text */}
        <p className="text-xs text-gray-400 text-center mt-4 md:mt-0">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
