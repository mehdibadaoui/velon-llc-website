import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us - Velon LLC',
  description: 'Get in touch with Velon LLC for your web development needs. Contact us for quotes, consultations, or any questions about our services.',
}

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Have questions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out the form and we'll get back to you within 24 hours. For urgent inquiries,
                please email us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaEnvelope className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:support@velonllc.com" className="text-primary-600 hover:text-primary-700">
                      support@velonllc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaPhone className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">251-385-9704</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">
                      30 N Gould St Ste R<br />
                      Sheridan, WY 82801<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaClock className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM (MST)<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200">
                <h3 className="font-bold text-gray-900 mb-3">What Happens Next?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">1.</span>
                    We'll review your inquiry within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">2.</span>
                    Schedule a discovery call to discuss your project
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">3.</span>
                    Receive a detailed proposal with timeline and pricing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">4.</span>
                    Start building your project with our team
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. We\'ll provide a detailed timeline during the planning phase.',
              },
              {
                q: 'What information do you need to get started?',
                a: 'We\'ll need to understand your business goals, target audience, desired features, and any design preferences. Don\'t worry if you\'re not sure about everything—we\'ll guide you through the discovery process.',
              },
              {
                q: 'Do you offer maintenance and support after launch?',
                a: 'Yes! We offer both one-time projects with post-launch support and ongoing subscription plans that include continuous maintenance, updates, and support.',
              },
              {
                q: 'What technologies do you work with?',
                a: 'We specialize in modern web technologies including React, Next.js, TypeScript, and various backend solutions. We choose the best tech stack based on your specific project requirements.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
