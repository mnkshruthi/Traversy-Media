import logo from "../../Images/logo-white.svg";
import instagram from "../../Images/icon-instagram.svg";
import pinterest from "../../Images/icon-pinterest.svg";
import twitter from "../../Images/icon-twitter.svg";
import youtube from "../../Images/icon-youtube.svg";

export default function Footer() {
  return (
    // Footer
    <footer className="bg-veryDarkBlue">
      {/* Flex container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and special links container */}
        <div className="flex flex-col-reverse justify-between items-center space-y-12 md:flex-col md:items-start md:space-y-0">
          {/* Image contaier */}
          <div>
            <img src={logo} className="h-8" alt="Logo" />
          </div>
          {/* Social Links Container */}
          <div className="flex justify-center space-x-4">
            {/* Link 1 */}
            <a href="/">
              <img src={instagram} alt="instagram" className="h-8" />
            </a>
            {/* Link 2 */}
            <a href="/">
              <img src={twitter} alt="twitter" className="h-8" />
            </a>
            {/* Link 3 */}
            <a href="/">
              <img src={pinterest} alt="pinterest" className="h-8" />
            </a>
            {/* Link 4 */}
            <a href="/">
              <img src={youtube} alt="youtube" className="h-8" />
            </a>
          </div>
        </div>
        {/* Footer Menu links */}
        <div className="flex justify-around space-x-32 ">
          <div className="flex flex-col space-y-3 text-white">
            <a href="/" className="hover:bg-brightRed">
              Home
            </a>
            <a href="/" className="hover:bg-brightRed">
              Pricing
            </a>
            <a href="/" className="hover:bg-brightRed">
              Product
            </a>
            <a href="/" className="hover:bg-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="/" className="hover:bg-brightRed">
              Career
            </a>
            <a href="/" className="hover:bg-brightRed">
              Community
            </a>
            <a href="/" className="hover:bg-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
