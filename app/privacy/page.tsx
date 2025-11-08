import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Velon LLC',
  description: 'Privacy Policy for Velon LLC. Learn how we collect, use, and protect your personal information.',
}

export default function Privacy() {
  const lastUpdated = 'November 7, 2025'

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last Updated: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Velon LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our
              website velonllc.com or use our services.
            </p>
            <p className="text-gray-700 mb-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy
              policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Information We Collect</h2>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Fill out a contact form or request a quote</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Engage with our services</li>
              <li>Contact us via email or phone</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Company name and business information</li>
              <li>Project details and requirements</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect certain information about your device
              and usage patterns, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Process your requests and respond to inquiries</li>
              <li>Send you project updates and communications</li>
              <li>Process payments and transactions</li>
              <li>Improve our website and services</li>
              <li>Understand how you use our website</li>
              <li>Develop new products and services</li>
              <li>Prevent fraudulent transactions and protect against security threats</li>
              <li>Comply with legal obligations</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Payment Processing</h2>
            <p className="text-gray-700 mb-4">
              We use Stripe as our payment processing partner. When you make a payment through our website:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Payment Information:</strong> Your payment card details and billing information are transmitted directly to Stripe and are never stored on our servers</li>
              <li><strong>Stripe's Services:</strong> Stripe processes all payment transactions securely and is PCI-DSS Level 1 certified, the highest level of certification available in the payments industry</li>
              <li><strong>Data Shared with Stripe:</strong> We share your name, email address, and transaction details with Stripe to process your payment</li>
              <li><strong>Stripe's Privacy Policy:</strong> Stripe's use of your personal information is governed by their privacy policy, available at <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://stripe.com/privacy</a></li>
            </ul>
            <p className="text-gray-700 mb-4">
              We retain transaction records for accounting, tax compliance, and dispute resolution purposes as required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Payment Processors:</strong> We use Stripe to process payments. Stripe collects and processes your payment information in accordance with their privacy policy and PCI-DSS requirements</li>
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf (e.g., hosting providers, analytics services, email service providers)</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process, court orders, or government requests</li>
              <li><strong>Fraud Prevention:</strong> To detect, prevent, or address fraud, security, or technical issues</li>
              <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our clients and others</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>We do not sell your personal information to third parties.</strong> We only share your information with trusted partners who are contractually obligated to protect your data and use it only for the purposes we specify.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These measures
              include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure payment processing through PCI-compliant providers</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required or permitted
              by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to our processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us at support@velonllc.com.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to collect and track information about your
              use of our website. Cookies are small data files stored on your device. You can control cookie
              settings through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices of these websites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If you believe we have collected information from a child,
              please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">12. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your country of
              residence. We ensure appropriate safeguards are in place to protect your information in
              accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last Updated" date. Your
              continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">14. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Velon LLC</strong></p>
              <p className="text-gray-700 mb-2">30 N Gould St Ste R</p>
              <p className="text-gray-700 mb-2">Sheridan, WY 82801</p>
              <p className="text-gray-700 mb-2">Email: support@velonllc.com</p>
              <p className="text-gray-700 mb-2">Phone: 251-385-9704</p>
              <p className="text-gray-700">EIN: 98-1891496</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
