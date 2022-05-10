import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="icons">
        <ul>
          <li>
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
        </ul>
      </div>

      <p>&copy; Sean Mac | All rights Reserved 2022</p>
    </div>
  );
};

export default Footer;
