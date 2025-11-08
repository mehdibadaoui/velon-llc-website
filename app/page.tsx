import Link from 'next/link'
import { FaCode, FaMobile, FaRocket, FaPaintBrush, FaServer, FaChartLine } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Ideas Into
              <span className="block text-primary-200">Powerful Web Applications</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto">
              Professional web development services using React, Next.js, and modern technologies.
              We build scalable, high-performance solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Start Your Project
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive web development solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card group hover:scale-105">
              <div className="text-primary-600 mb-4">
                <FaCode size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Custom web applications built with React, Next.js, and cutting-edge technologies
                for optimal performance and user experience.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="card group hover:scale-105">
              <div className="text-primary-600 mb-4">
                <FaMobile size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Responsive Design</h3>
              <p className="text-gray-600 mb-4">
                Mobile-first, responsive designs that work flawlessly across all devices and
                screen sizes, ensuring maximum reach.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="card group hover:scale-105">
              <div className="text-primary-600 mb-4">
                <FaPaintBrush size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                Beautiful, intuitive interfaces designed with user experience in mind, combining
                aesthetics with functionality.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* Service 4 */}
            <div className="card group hover:scale-105">
              <div className="text-primary-600 mb-4">
                <FaServer size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">API Development</h3>
              <p className="text-gray-600 mb-4">
                Robust, scalable APIs and backend solutions that power your applications with
                security and performance.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* Service 5 */}
            <div className="card group hover:scale-105">
              <div className="text-primary-600 mb-4">
                <FaRocket size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Speed and efficiency optimization to ensure your application loads fast and
                runs smoothly for all users.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* Service 6 */}
            <div className="card group hover:scale-105">
              <div className="text-primary-600 mb-4">
                <FaChartLine size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Consulting & Strategy</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance on technology choices, architecture decisions, and development
                strategies for your projects.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Velon LLC?</h2>
            <p className="section-subtitle">
              We deliver excellence through expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Technologies</h3>
              <p className="text-gray-600">
                We use the latest and most reliable technologies like React, Next.js, and TypeScript
                to build future-proof applications.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Driven</h3>
              <p className="text-gray-600">
                Every project is crafted with attention to detail, following best practices and
                industry standards for superior quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Client Focused</h3>
              <p className="text-gray-600">
                Your success is our priority. We work closely with you to understand your needs
                and deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted & Secure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We prioritize security and transparency in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-sm text-gray-600">PCI-DSS compliant payment processing powered by Stripe</p>
            </div>

            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-sm text-gray-600">Industry-standard encryption and security practices</p>
            </div>

            <div className="p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-sm text-gray-600">Full transparency with clear terms, privacy policy, and refund policy</p>
            </div>

            <div className="p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed Business</h3>
              <p className="text-sm text-gray-600">Registered LLC in Wyoming, USA (EIN: 98-1891496)</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">We accept all major payment methods</p>
            <div className="flex justify-center items-center gap-4">
              <svg className="h-8 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="currentColor" fillOpacity="0.1"/><text x="24" y="20" textAnchor="middle" fontSize="10" fill="currentColor">VISA</text></svg>
              <svg className="h-8 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="currentColor" fillOpacity="0.1"/><text x="24" y="20" textAnchor="middle" fontSize="8" fill="currentColor">MASTER</text></svg>
              <svg className="h-8 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="currentColor" fillOpacity="0.1"/><text x="24" y="20" textAnchor="middle" fontSize="9" fill="currentColor">AMEX</text></svg>
              <svg className="h-8 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="currentColor" fillOpacity="0.1"/><text x="24" y="20" textAnchor="middle" fontSize="7" fill="currentColor">DISCOVER</text></svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 text-primary-100">
            Let's discuss how we can help bring your vision to life with our professional
            web development services.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
