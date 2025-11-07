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
