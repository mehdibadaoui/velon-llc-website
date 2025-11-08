import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaShieldAlt } from 'react-icons/fa'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Velon LLC</h3>
            <p className="text-gray-400 mb-4">
              Professional web development services using cutting-edge technologies.
              We transform your ideas into powerful, scalable web applications.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>

            {/* Payment Methods & Security */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Secure Payment Processing:</p>
              <div className="flex items-center gap-3 mb-3">
                <FaCcVisa size={40} className="text-gray-400" aria-label="Visa" />
                <FaCcMastercard size={40} className="text-gray-400" aria-label="Mastercard" />
                <FaCcAmex size={40} className="text-gray-400" aria-label="American Express" />
                <FaCcDiscover size={40} className="text-gray-400" aria-label="Discover" />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FaLock size={12} />
                <span>PCI-DSS Compliant | </span>
                <FaShieldAlt size={12} />
                <span>Powered by Stripe</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-400" />
                <span className="text-sm">30 N Gould St Ste R<br />Sheridan, WY 82801<br />United States</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary-400" />
                <a href="mailto:support@velonllc.com" className="text-sm hover:text-primary-400 transition-colors">
                  support@velonllc.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary-400" />
                <a href="tel:+12513859704" className="text-sm hover:text-primary-400 transition-colors">
                  251-385-9704
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Velon LLC. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="text-sm hover:text-primary-400 transition-colors">
                Refund Policy
              </Link>
              <Link href="/delivery-policy" className="text-sm hover:text-primary-400 transition-colors">
                Delivery Policy
              </Link>
              <Link href="/acceptable-use" className="text-sm hover:text-primary-400 transition-colors">
                Acceptable Use
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center">
            EIN: 98-1891496 | Registered in Wyoming, USA | Licensed and Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
