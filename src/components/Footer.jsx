import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-xl text-gray-400" />
              <span className="text-gray-300">
                117 S Lexington St, Suite 100 Harrisonville, MO 64701
              </span>
            </div>

            {/* Office Hours */}
            <div className="flex items-center space-x-3">
              <FaClock className="text-xl text-gray-400" />
              <span className="text-gray-300">Office Hours: 8AM - 5PM EST</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Policies */}
            <div className="flex space-x-8">
              <a
                href="#privacypolicy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#refundpolicy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Payment Policy
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="mailto:qamar@bysocialprizm.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/socialprizm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/SocialPrizm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/socialprizm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
