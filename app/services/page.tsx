import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCode, FaMobile, FaRocket, FaPaintBrush, FaServer, FaChartLine, FaShieldAlt, FaCog } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Our Services - Velon LLC',
  description: 'Professional web development services including React, Next.js, API development, UI/UX design, and more. Flexible pricing with one-time payments and subscriptions.',
}

export default function Services() {
  const services = [
    {
      icon: FaCode,
      title: 'Custom Web Development',
      description: 'Build powerful, scalable web applications using React, Next.js, and TypeScript. We create custom solutions tailored to your specific business requirements.',
      features: [
        'React & Next.js applications',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'Server-Side Rendering (SSR)',
        'Static Site Generation (SSG)',
        'E-commerce platforms',
      ],
    },
    {
      icon: FaMobile,
      title: 'Responsive Design',
      description: 'Mobile-first, responsive designs that provide seamless experiences across all devices and screen sizes, from smartphones to large desktop displays.',
      features: [
        'Mobile-first approach',
        'Cross-browser compatibility',
        'Adaptive layouts',
        'Touch-friendly interfaces',
        'Performance optimization',
        'Accessibility compliance (WCAG)',
      ],
    },
    {
      icon: FaPaintBrush,
      title: 'UI/UX Design & Implementation',
      description: 'Beautiful, intuitive interfaces that combine aesthetics with functionality. We design and implement user experiences that delight and convert.',
      features: [
        'Modern UI design',
        'User experience optimization',
        'Interactive prototypes',
        'Design system development',
        'Component libraries',
        'Brand consistency',
      ],
    },
    {
      icon: FaServer,
      title: 'API Development & Integration',
      description: 'Robust backend solutions and seamless API integrations. We build and connect the services that power your applications.',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'Third-party integrations',
        'Database design & optimization',
        'Authentication & authorization',
        'API documentation',
      ],
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Speed and efficiency optimization to ensure your application loads fast and runs smoothly, improving user satisfaction and SEO rankings.',
      features: [
        'Load time optimization',
        'Code splitting & lazy loading',
        'Image optimization',
        'Caching strategies',
        'Lighthouse score improvement',
        'Core Web Vitals optimization',
      ],
    },
    {
      icon: FaChartLine,
      title: 'Consulting & Strategy',
      description: 'Expert guidance on technology choices, architecture decisions, and development strategies to ensure your project\'s success.',
      features: [
        'Technology stack selection',
        'Architecture planning',
        'Code review & audits',
        'Development roadmaps',
        'Best practices guidance',
        'Scalability planning',
      ],
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Maintenance',
      description: 'Keep your applications secure and up-to-date with regular maintenance, security patches, and monitoring.',
      features: [
        'Security audits',
        'Vulnerability testing',
        'Regular updates & patches',
        'Performance monitoring',
        'Bug fixes & improvements',
        'Backup & recovery solutions',
      ],
    },
    {
      icon: FaCog,
      title: 'DevOps & Deployment',
      description: 'Streamlined deployment processes and infrastructure setup for reliable, automated delivery of your applications.',
      features: [
        'CI/CD pipeline setup',
        'Cloud deployment (Vercel, AWS, etc.)',
        'Domain & DNS configuration',
        'SSL certificate setup',
        'Environment management',
        'Automated testing',
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive web development solutions designed to help your business succeed
              in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-primary-600 flex-shrink-0">
                    <service.icon size={40} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Flexible Pricing</h2>
            <p className="section-subtitle">
              We offer pricing models that work for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary-600">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">One-Time Projects</h3>
                <p className="text-gray-600">Perfect for specific project needs</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Fixed scope and timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Clear deliverables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Milestone-based payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Full project ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Post-launch support included</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contact" className="btn-primary w-full block">
                  Request Quote
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscription Plans</h3>
                <p className="text-gray-600">Ongoing development and support</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Continuous development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Regular updates & features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Maintenance & security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Flexible monthly commitment</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contact" className="btn-outline w-full block">
                  Discuss Options
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Every project is unique. We'll work with you to determine the best pricing model
              based on your specific needs and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              A streamlined approach to deliver quality results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'We learn about your goals, requirements, and vision for the project.' },
              { num: '02', title: 'Planning', desc: 'Detailed planning, architecture design, and timeline estimation.' },
              { num: '03', title: 'Development', desc: 'Building your application with regular updates and check-ins.' },
              { num: '04', title: 'Launch & Support', desc: 'Deployment, testing, and ongoing support for your success.' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-primary-100">
            Contact us today to discuss your project and receive a customized proposal.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
