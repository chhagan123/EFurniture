import React from 'react';



// Footer Component
const Footer = () => {
  // Data for Payment Methods
  const paymentMethods = [
    { name: 'Visa', src: 'https://placehold.co/50x30/ffffff/000000?text=VISA' },
    { name: 'MasterCard', src: 'https://placehold.co/50x30/ffffff/000000?text=MC' },
    { name: 'American Express', src: 'https://placehold.co/50x30/ffffff/000000?text=AE' },
    { name: 'UPI', src: 'https://placehold.co/50x30/ffffff/000000?text=UPI' },
    { name: 'Google Pay', src: 'https://placehold.co/50x30/ffffff/000000?text=GPAY' },
    { name: 'PayPal', src: 'https://placehold.co/50x30/ffffff/000000?text=PP' },
  ];

  // Data for Products
  const products = [
    { name: 'Mattress', href: '#' },
    { name: 'Royal Mattress', href: '#' },
    { name: 'Pillows', href: '#' },
    { name: 'Protector', href: '#' },
    { name: 'Topper', href: '#' },
  ];

  // Data for Supports
  const supports = [
    { name: 'Privacy & policy', href: '#' },
    { name: 'Terms & conditions', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'How to choose the Right mattress?', href: '#' },
    { name: 'Refund & Return Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ];

  return (
    // Footer section with custom gradient background and padding
    <footer className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-12 px-4 sm:px-6 lg:px-8 font-inter">
      {/* Max width container to center content */}
      <div className="max-w-7xl mx-auto">
        {/* Grid container for footer columns.
            On small screens (default), it's a single column.
            On medium screens (md), it's a two-column grid.
            On large screens (lg), it's a four-column grid. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Payment Methods Section - Rendered dynamically */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-1">PAYMENT METHODS</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {/* Map over paymentMethods array to render each payment icon */}
              {paymentMethods.map((method) => (
                <img
                  key={method.name} // Unique key for each item in the list
                  src={method.src}
                  alt={method.name}
                  className="rounded-md shadow-sm"
                />
              ))}
            </div>
          </div>

          {/* Products Section - Rendered dynamically */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-1">PRODUCTS</h3>
            <ul className="space-y-2">
              {/* Map over products array to render each product link */}
              {products.map((product) => (
                <li key={product.name}> {/* Unique key for each item in the list */}
                  <a href={product.href} className="hover:text-blue-200 transition-colors duration-200">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Supports Section - Rendered dynamically */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-1">SUPPORTS</h3>
            <ul className="space-y-2">
              {/* Map over supports array to render each support link */}
              {supports.map((support) => (
                <li key={support.name}> {/* Unique key for each item in the list */}
                  <a href={support.href} className="hover:text-blue-200 transition-colors duration-200">
                    {support.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Restin Industries Section (Contact Info) - Remains static as it's unique content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-1">RESTIN INDUSTRIES</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                {/* Font Awesome home icon */}
                <i className="fas fa-home text-blue-300"></i>
                <span>N 101/7, MIDC, Hingna Road, Nagpur-440016 Maharashtra, India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                {/* Font Awesome envelope icon */}
                <i className="fas fa-envelope text-blue-300"></i>
                <a href="mailto:sales@restin.in" className="hover:text-blue-200 transition-colors duration-200">sales@restin.in</a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                {/* Font Awesome phone icon */}
                <i className="fas fa-phone-alt text-blue-300"></i>
                <a href="tel:+917755918227" className="hover:text-blue-200 transition-colors duration-200">+91 77559 18227</a>
              </div>
            </address>
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <a href="#" className="text-2xl hover:text-blue-200 transition-colors duration-200" aria-label="Facebook">
                {/* Font Awesome Facebook icon */}
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-200 transition-colors duration-200" aria-label="Instagram">
                {/* Font Awesome Instagram icon */}
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-blue-500 text-center text-sm">
          <p>Copyright &copy; 2025 Restin Industries. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

