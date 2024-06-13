const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h5 className="text-lg font-bold mb-4">Get to Know Us</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Amazon
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Amazon Devices
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Amazon Science
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h5 className="text-lg font-bold mb-4">Make Money with Us</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Sell on Amazon
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sell Your Services on Amazon
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sell on Amazon Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sell Your Apps on Amazon
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Advertise Your Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Self-Publish with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Host an Amazon Hub
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h5 className="text-lg font-bold mb-4">Amazon Payment Products</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Amazon Business Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop with Points
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reload Your Balance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Amazon Currency Converter
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h5 className="text-lg font-bold mb-4">Let Us Help You</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Amazon and COVID-19
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Your Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Rates & Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Replacements
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Manage Your Content and Devices
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Amazon Assistant
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Amazon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
