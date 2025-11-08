import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy - Velon LLC',
  description: 'Velon LLC refund and cancellation policy for web development services.',
}

export default function RefundPolicy() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Refund Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> November 8, 2025
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="mb-4">
                At Velon LLC, we are committed to delivering high-quality web development services
                and ensuring client satisfaction. This Refund Policy outlines the terms and conditions
                under which refunds may be issued for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Categories</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.1 One-Time Projects</h3>
              <p className="mb-4">
                For custom web development projects, refunds are handled on a case-by-case basis:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Before Project Commencement:</strong> Full refund of any deposits if the
                  project has not yet started and no work has been performed.
                </li>
                <li>
                  <strong>During Development (First 30 Days):</strong> Partial refund may be issued
                  based on work completed. Completed milestones are non-refundable.
                </li>
                <li>
                  <strong>After 30 Days or Project Completion:</strong> No refunds are available once
                  the project has been delivered and accepted by the client.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Subscription Services</h3>
              <p className="mb-4">
                For recurring subscription-based services:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>First 14 Days:</strong> Full refund available if you are not satisfied with
                  the service within the first 14 days of your initial subscription.
                </li>
                <li>
                  <strong>After 14 Days:</strong> No refunds for partial months. You may cancel at any
                  time, and your access will continue until the end of the current billing period.
                </li>
                <li>
                  <strong>Cancellation:</strong> Subscriptions can be cancelled at any time without
                  penalty. No refunds for the current billing cycle.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Consulting Services</h3>
              <p className="mb-4">
                Consulting and advisory services are billed hourly or per session:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Prepaid Hours:</strong> Unused prepaid hours may be refunded within 30 days
                  of purchase if no services have been rendered.
                </li>
                <li>
                  <strong>Completed Sessions:</strong> No refunds for completed consulting sessions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Request Process</h2>
              <p className="mb-4">To request a refund, please follow these steps:</p>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>Contact us via email at <a href="mailto:support@velonllc.com" className="text-primary-600 hover:text-primary-700">support@velonllc.com</a> or call us at 251-385-9704</li>
                <li>Include your full name, project/invoice number, and detailed reason for the refund request</li>
                <li>Provide any relevant documentation, screenshots, or supporting details</li>
                <li>Allow 3-5 business days for our team to review your request</li>
              </ol>
              <p className="mb-4">
                <strong>Review Process:</strong> We will respond to your refund request within 5 business days (excluding weekends and US federal holidays). Our team will:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Acknowledge receipt of your request within 24 hours</li>
                <li>Review your project history and the reason for your request</li>
                <li>Communicate our decision in writing with a clear explanation</li>
                <li>If approved, process the refund within 7-10 business days</li>
              </ul>
              <p className="mb-4">
                <strong>Refund Method:</strong> Approved refunds will be issued to the original payment method used for the purchase. Depending on your payment provider, it may take an additional 5-10 business days for the refund to appear in your account.
              </p>
              <p>
                <strong>Partial Refunds:</strong> In some cases, we may issue a partial refund based on work completed. We will clearly explain the calculation and rationale for any partial refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Non-Refundable Items</h2>
              <p className="mb-4">The following are non-refundable:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Third-party services, licenses, or subscriptions purchased on your behalf (e.g., hosting, domain names, APIs)</li>
                <li>Custom design work that has been approved and delivered</li>
                <li>Completed project milestones that have been accepted by the client</li>
                <li>Services rendered more than 30 days prior to the refund request</li>
                <li>Expedited or rush service fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Dispute Resolution</h2>
              <p className="mb-4">
                If you have concerns about the quality of our services or believe you are entitled
                to a refund, we encourage you to contact us directly. We are committed to working
                with our clients to resolve any issues amicably.
              </p>
              <p>
                In the event that a dispute cannot be resolved through direct communication, both
                parties agree to seek mediation before pursuing legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payment Disputes and Chargebacks</h2>
              <p className="mb-4">
                <strong className="text-red-600">Important Notice:</strong> Before initiating a chargeback or payment dispute with your bank or card issuer, please contact us directly. We are committed to resolving all concerns fairly and promptly.
              </p>
              <p className="mb-4">
                <strong>Our Commitment:</strong> We will work with you in good faith to resolve any payment disputes, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Investigating billing errors or duplicate charges</li>
                <li>Addressing service quality concerns</li>
                <li>Reviewing unrecognized charges</li>
                <li>Finding mutually agreeable solutions</li>
              </ul>
              <p className="mb-4">
                <strong>Chargeback Consequences:</strong> If you initiate a chargeback through your payment provider without first attempting to resolve the issue with us, we reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Suspend or terminate all services immediately</li>
                <li>Revoke access to all deliverables and work products</li>
                <li>Contest the chargeback with supporting documentation</li>
                <li>Pursue legal action to recover the disputed amount plus associated fees and costs</li>
                <li>Report fraudulent chargeback activity to appropriate authorities and credit bureaus</li>
              </ul>
              <p className="mb-4">
                <strong>Fraudulent Chargebacks:</strong> Filing a chargeback for services that were delivered as agreed, or after a refund has already been processed, constitutes fraud and may result in legal action.
              </p>
              <p>
                <strong>Contact Us First:</strong> Email support@velonllc.com or call 251-385-9704 to discuss any payment concerns. We respond to all inquiries within 24 hours during business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Guarantee</h2>
              <p className="mb-4">
                We stand behind the quality of our work. If you are not satisfied with the final
                deliverable, we will:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Work with you to address any issues within the agreed-upon project scope</li>
                <li>Provide revisions as outlined in the project contract</li>
                <li>Ensure the final product meets the specifications agreed upon at project start</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="mb-4">
                Velon LLC reserves the right to modify this Refund Policy at any time. Any changes
                will be posted on this page with an updated "Last Updated" date. Your continued use
                of our services after any modifications indicates your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about our Refund Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Velon LLC</strong></p>
                <p className="mb-2">30 N Gould St Ste R</p>
                <p className="mb-2">Sheridan, WY 82801</p>
                <p className="mb-2">Email: <a href="mailto:support@velonllc.com" className="text-primary-600 hover:text-primary-700">support@velonllc.com</a></p>
                <p className="mb-2">Phone: 251-385-9704</p>
                <p className="text-sm text-gray-600 mt-4">EIN: 98-1891496</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                By engaging our services, you acknowledge that you have read, understood, and agree
                to be bound by this Refund Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
