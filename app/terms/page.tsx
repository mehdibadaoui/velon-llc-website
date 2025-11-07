import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Velon LLC',
  description: 'Terms of Service for Velon LLC. Read our terms and conditions for using our web development services.',
}

export default function Terms() {
  const lastUpdated = 'November 7, 2025'

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Terms of Service</h1>
        <p className="text-gray-600 mb-12">Last Updated: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Velon LLC
              ("Company," "we," "us," or "our") concerning your access to and use of our website (velonllc.com)
              and services.
            </p>
            <p className="text-gray-700 mb-4">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree
              with these Terms, you may not access or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Our Services</h2>
            <p className="text-gray-700 mb-4">
              Velon LLC provides professional web development services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Custom web application development</li>
              <li>Website design and development</li>
              <li>API development and integration</li>
              <li>UI/UX design and implementation</li>
              <li>Performance optimization</li>
              <li>Consulting and technical advisory services</li>
              <li>Ongoing maintenance and support</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The specific scope of services will be defined in individual project agreements or statements of work.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful or unauthorized purpose</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Provide timely feedback and approvals as required for project completion</li>
              <li>Make timely payments as agreed upon</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Project Agreements</h2>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">4.1 Proposals and Contracts</h3>
            <p className="text-gray-700 mb-4">
              All projects require a signed agreement or statement of work that outlines:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Project scope and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Pricing and payment terms</li>
              <li>Intellectual property rights</li>
              <li>Support and maintenance terms</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">4.2 Changes to Scope</h3>
            <p className="text-gray-700 mb-4">
              Any changes to the agreed-upon project scope must be documented in writing and may result in
              adjustments to timeline and pricing. We reserve the right to charge additional fees for
              scope changes or requests outside the original agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Payment Terms</h2>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.1 Pricing</h3>
            <p className="text-gray-700 mb-4">
              We offer flexible pricing models including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>One-Time Projects:</strong> Fixed or milestone-based pricing for specific projects</li>
              <li><strong>Subscription Plans:</strong> Recurring monthly fees for ongoing development and support</li>
              <li><strong>Hourly Rates:</strong> Time-based billing for consulting or variable-scope work</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.2 Payment Schedule</h3>
            <p className="text-gray-700 mb-4">
              Unless otherwise specified in your project agreement:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>A deposit may be required before work begins</li>
              <li>Milestone payments are due upon completion of specified deliverables</li>
              <li>Final payment is due before project delivery</li>
              <li>Subscription fees are billed monthly in advance</li>
              <li>Invoices are due within 14 days of receipt unless otherwise agreed</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.3 Late Payments</h3>
            <p className="text-gray-700 mb-4">
              Late payments may result in:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Suspension of work until payment is received</li>
              <li>Late fees of 1.5% per month on overdue balances</li>
              <li>Termination of service for accounts 30+ days overdue</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.4 Refunds</h3>
            <p className="text-gray-700 mb-4">
              Refunds are handled on a case-by-case basis. Generally, payments for completed work or
              delivered milestones are non-refundable. Deposits may be partially refundable if no work
              has commenced.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Intellectual Property</h2>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">6.1 Client Content</h3>
            <p className="text-gray-700 mb-4">
              You retain all rights to content, data, and materials you provide to us. You grant us a
              limited license to use this content solely for the purpose of providing our services.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">6.2 Deliverables</h3>
            <p className="text-gray-700 mb-4">
              Upon full payment, you will own the final deliverables created specifically for your project,
              including custom code, designs, and content. This excludes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Pre-existing intellectual property owned by us or third parties</li>
              <li>Third-party libraries, frameworks, and open-source components</li>
              <li>Reusable tools, methodologies, and templates we developed</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">6.3 Portfolio Rights</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to display completed projects in our portfolio and marketing materials
              unless otherwise agreed in writing. We will not disclose confidential information in such displays.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Confidentiality</h2>
            <p className="text-gray-700 mb-4">
              We respect the confidentiality of your business information. We will not disclose your
              confidential information to third parties except:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>With your consent</li>
              <li>To service providers necessary for project delivery</li>
              <li>As required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Warranties and Disclaimers</h2>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">8.1 Our Warranties</h3>
            <p className="text-gray-700 mb-4">
              We warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Services will be performed in a professional and workmanlike manner</li>
              <li>Deliverables will substantially conform to agreed-upon specifications</li>
              <li>We have the right to provide the services</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">8.2 Disclaimers</h3>
            <p className="text-gray-700 mb-4">
              EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND,
              EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VELON LLC SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA,
              OR USE, ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES.
            </p>
            <p className="text-gray-700 mb-4">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICES GIVING
              RISE TO THE CLAIM DURING THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Velon LLC from any claims, damages, liabilities,
              and expenses arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Content and materials you provide to us</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate a project agreement:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>By mutual written agreement</li>
              <li>For material breach with 14 days written notice to cure</li>
              <li>Immediately if the other party becomes insolvent</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Upon termination, you will pay for all work completed through the termination date.
              We will deliver all completed work upon receipt of final payment.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              In the event of any dispute, the parties agree to first attempt resolution through good
              faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration
              in Wyoming, USA, in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of the State of Wyoming, USA, without regard to
              conflict of law principles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">14. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of material
              changes by posting the updated Terms on our website with a new "Last Updated" date.
              Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">15. General Provisions</h2>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">15.1 Entire Agreement</h3>
            <p className="text-gray-700 mb-4">
              These Terms, together with any project agreements, constitute the entire agreement between
              you and Velon LLC regarding our services.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">15.2 Severability</h3>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              will remain in full force and effect.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">15.3 No Waiver</h3>
            <p className="text-gray-700 mb-4">
              Our failure to enforce any right or provision of these Terms will not constitute a waiver
              of that right or provision.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">15.4 Assignment</h3>
            <p className="text-gray-700 mb-4">
              You may not assign these Terms without our written consent. We may assign these Terms
              without restriction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Velon LLC</strong></p>
              <p className="text-gray-700 mb-2">30 N Gould St Ste R</p>
              <p className="text-gray-700 mb-2">Sheridan, WY 82801</p>
              <p className="text-gray-700 mb-2">United States</p>
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
