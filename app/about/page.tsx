import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCheckCircle, FaAward, FaUsers, FaLightbulb } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us - Velon LLC',
  description: 'Learn about Velon LLC, a professional web development company specializing in React, Next.js, and modern web technologies.',
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Velon LLC</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A professional web development company dedicated to transforming ideas into
              exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Velon LLC, we are committed to delivering cutting-edge web development solutions
                that empower businesses to thrive in the digital landscape. Our mission is to
                combine technical excellence with creative innovation to build products that make
                a real difference.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe in the power of modern web technologies to solve complex business
                challenges. Every project we undertake is an opportunity to push boundaries,
                exceed expectations, and create lasting value for our clients.
              </p>
              <p className="text-lg text-gray-600">
                Founded on principles of quality, integrity, and customer satisfaction, we strive
                to be more than just a service provider—we aim to be your trusted technology partner.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: FaCheckCircle, title: 'Quality First', desc: 'We never compromise on code quality and best practices' },
                { icon: FaLightbulb, title: 'Innovation', desc: 'Leveraging the latest technologies to deliver modern solutions' },
                { icon: FaUsers, title: 'Client Success', desc: 'Your success is our success—we\'re invested in your growth' },
                { icon: FaAward, title: 'Excellence', desc: 'Committed to delivering exceptional results every time' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-primary-600 mt-1">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              Specialized in modern web development technologies and methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">React & Next.js Development</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">TypeScript & JavaScript</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Responsive Web Design</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">API Integration & Development</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Performance Optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">UI/UX Implementation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Agile Development Methodology</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Clean, Maintainable Code</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Thorough Testing & QA</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Regular Communication & Updates</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Scalable Architecture</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Security Best Practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Company Information</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Legal Name</h3>
                <p className="text-gray-700">Velon LLC</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">EIN</h3>
                <p className="text-gray-700">98-1891496</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Registration</h3>
                <p className="text-gray-700">Wyoming, USA</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Type</h3>
                <p className="text-gray-700">Limited Liability Company</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-semibold text-gray-900 mb-2">Registered Address</h3>
                <p className="text-gray-700">30 N Gould St Ste R, Sheridan, WY 82801</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-10 text-primary-100">
            Ready to start your next project? Get in touch with us today.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
