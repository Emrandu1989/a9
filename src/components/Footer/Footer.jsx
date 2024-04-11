import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-16 px-12 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Regal Residence</p>
            <p>123 Luxury Avenue</p>
            <p>New York, NY 10001</p>
            <p>info@regalresidence.com</p>
            <p>(123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Properties</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <p>Stay updated with our latest properties and news.</p>
            <div className="flex mt-4">
              <a href="#" className="mr-4 text-xl hover:text-gray-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="mr-4 text-xl hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="mr-4 text-xl hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="mr-4 text-xl hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Regal Residence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
