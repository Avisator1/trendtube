import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-[#F7FAFC] shadow w-full !font-inter">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://trendtube.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="TrendTube Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              TrendTube
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
            <li>
              <a href="/faq" className="hover:underline me-4 md:me-6">
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-200 lg:my-8" />
        <span className="block text-sm text-black sm:text-center">
          © 2024{' '}
          <a href="https://TrendTube.com/" className="hover:underline">
            TrendTube™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
