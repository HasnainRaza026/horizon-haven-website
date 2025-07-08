import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";
import Logo from "./Logo";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <Logo isTextWhite={true} />
            <p className="text-gray-300 text-sm mt-2.5">
              Experience luxury and comfort at our boutique hotel, where every
              detail is crafted for your perfect stay.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Room Service</li>
              <li className="text-gray-300">Spa & Wellness</li>
              <li className="text-gray-300">Restaurant</li>
              <li className="text-gray-300">Valet Parking</li>
              <li className="text-gray-300">Concierge</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  123 Ocean Drive, Paradise City, PC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  info@horizonheaven.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Horizon Heaven Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
