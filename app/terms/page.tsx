import type { Metadata } from 'next'
import Link from 'next/link'

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
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.1 Pricing and Currency</h3>
            <p className="text-gray-700 mb-4">
              All prices are displayed in United States Dollars (USD) unless otherwise specified. We offer flexible pricing models including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>One-Time Projects:</strong> Fixed or milestone-based pricing for specific projects</li>
              <li><strong>Subscription Plans:</strong> Recurring monthly fees for ongoing development and support</li>
              <li><strong>Hourly Rates:</strong> Time-based billing for consulting or variable-scope work</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Final pricing will be clearly outlined in your project proposal or agreement before work begins. All quoted prices exclude applicable taxes unless otherwise stated.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.2 Payment Processing</h3>
            <p className="text-gray-700 mb-4">
              We use Stripe as our payment processor. By making a payment, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide accurate and complete payment information</li>
              <li>Authorize us to charge your payment method for all agreed-upon fees</li>
              <li>Promptly update your payment information if it changes</li>
              <li>Be responsible for any fees associated with your payment method</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Accepted Payment Methods:</strong> We accept major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and ACH transfers through Stripe. All payment information is processed securely by Stripe and is never stored on our servers.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>PCI Compliance:</strong> Our payment processing is PCI-DSS compliant through our partnership with Stripe, ensuring the highest level of payment security.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.3 Payment Schedule</h3>
            <p className="text-gray-700 mb-4">
              Unless otherwise specified in your project agreement:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Initial Deposit:</strong> A 30-50% deposit may be required before work begins</li>
              <li><strong>Milestone Payments:</strong> Payments are due upon completion of specified deliverables</li>
              <li><strong>Final Payment:</strong> Due before final project delivery and handover</li>
              <li><strong>Subscription Billing:</strong> Recurring fees are automatically charged monthly in advance on your billing date</li>
              <li><strong>Invoice Payment:</strong> Invoices are due within 14 days of receipt unless otherwise agreed</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.4 Late Payments and Failed Charges</h3>
            <p className="text-gray-700 mb-4">
              Late or failed payments may result in:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Immediate suspension of work until payment is received</li>
              <li>Late fees of 1.5% per month (18% annually) on overdue balances where permitted by law</li>
              <li>Service interruption for subscription accounts with failed payments</li>
              <li>Termination of service for accounts 30+ days overdue</li>
              <li>Reporting to credit bureaus and collection agencies for severely delinquent accounts</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For subscription services, we will attempt to charge your payment method up to three times. If all attempts fail, your account will be suspended.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.5 Refunds and Cancellations</h3>
            <p className="text-gray-700 mb-4">
              Please refer to our <Link href="/refund-policy" className="text-primary-600 hover:text-primary-700 underline">Refund Policy</Link> for complete details. Generally:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Payments for completed work or delivered milestones are non-refundable</li>
              <li>Subscription services may be cancelled at any time without penalty</li>
              <li>Refunds are processed to the original payment method within 7-10 business days</li>
              <li>Deposits may be partially refundable if no work has commenced</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.6 Taxes</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for all applicable taxes, duties, and government fees (collectively "Taxes") associated with your purchase, except for taxes based on our net income. If we are required to collect or pay Taxes, they will be added to your invoice.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">5.7 Disputes and Chargebacks</h3>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> If you have any billing concerns or disputes, please contact us immediately at support@velonllc.com before initiating a chargeback with your payment provider.
            </p>
            <p className="text-gray-700 mb-4">
              Initiating a chargeback without first attempting to resolve the issue with us may result in:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Immediate suspension or termination of all services</li>
              <li>Forfeiture of access to deliverables and work product</li>
              <li>Legal action to recover the disputed amount plus associated costs</li>
              <li>Reporting of fraudulent chargeback activity to appropriate authorities</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We are committed to resolving all payment disputes fairly and promptly through direct communication.
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
