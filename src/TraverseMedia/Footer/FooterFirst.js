import React from "react";
import logo from "../../Images/logo-white.svg";
import instagram from "../../Images/icon-instagram.svg";
import pinterest from "../../Images/icon-pinterest.svg";
import twitter from "../../Images/icon-twitter.svg";
import youtube from "../../Images/icon-youtube.svg";

export default function FooterFirst() {
  return (
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
  );
}
