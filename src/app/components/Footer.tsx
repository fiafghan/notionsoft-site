'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-200 text-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/notion_soft_logo.png"
              alt="NotionSoft Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold tracking-tight text-gray-800">NotionSoft</span>
          </Link>
          <p className="text-sm text-gray-600">
            Empowering digital transformation with innovative, secure, and scalable solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/home" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link href="/industries" className="hover:text-orange-500">Industries</Link></li>
            <li><Link href="/about-us" className="hover:text-orange-500">About Us</Link></li>
            <li><Link href="/BLOG" className="hover:text-orange-500">Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Industries</h3>
          <ul className="space-y-2 text-sm">
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Automotive</li>
            <li>Insurance</li>
            <li>E-commerce</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-orange-500" />
              Sharh-e-Now, Kabul, Afghanistan
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-orange-500" />
              info@notionsoft.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-orange-500" />
              +93 799 769 626
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} NotionSoft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
