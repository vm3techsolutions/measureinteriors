'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'OUR PRODUCTS', path: '/products' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'BLOG', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Header */}
      <header className="w-full h-20 bg-[#e7dcd3]/70 backdrop-blur-md shadow-sm flex items-center justify-between px-6 relative z-40">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold tracking-wide text-gray-800 uppercase">
          <img
            src="/assets/logo1.webp"
            alt="Logo"
            className="h-10 w-auto object-contain -ml-5 sm:-ml-0"
          />
          <span className="-ml-1">EASURE</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 sm:gap-4 mr-16">
          <a href="mailto:info@measureinteriors.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-gray-800 hover:text-gray-600 cursor-pointer text-xl" />
          </a>
          <a href="https://www.instagram.com/measureinteriors/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-800 hover:text-gray-600 cursor-pointer text-xl" />
          </a>
          <a href="https://www.youtube.com/@measureinteriors" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-gray-800 hover:text-gray-600 cursor-pointer text-xl" />
          </a>
          <a href="https://www.linkedin.com/company/measure-interiors/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-gray-800 hover:text-gray-600 cursor-pointer text-xl" />
          </a>
          <a href="https://www.facebook.com/measureinteriorsdubai" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-gray-800 hover:text-gray-600 cursor-pointer text-xl" />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FInteriorMeasure" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-800 hover:text-gray-600 cursor-pointer text-xl" />
          </a>
        </div>
      </header>

      {/* Fixed Menu Button (always visible on screen) */}
      <div
        className="fixed top-3 right-5 z-50 w-14 h-14 bg-gradient-to-br from-neutral-300 to-rose-200 rounded-full flex items-center justify-center shadow-lg"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars className="text-gray-800 text-xl cursor-pointer" />
      </div>

      {/* Full Screen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#ebd6c9] z-[999] flex flex-col items-center justify-center text-black">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col gap-6 text-center bg-[#dac3bc] w-full shadow-2xl py-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-xl font-semibold hover:scale-105 transition-transform hover:text-[#cfa76b]"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
