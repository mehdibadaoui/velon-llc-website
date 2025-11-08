import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy - Velon LLC',
  description: 'Acceptable Use Policy outlining prohibited activities and proper use of Velon LLC services.',
}

export default function AcceptableUse() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Acceptable Use Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> November 8, 2025
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Purpose</h2>
              <p className="mb-4">
                This Acceptable Use Policy ("AUP") governs your use of services provided by Velon LLC.
                By using our services, you agree to comply with this policy. This policy is designed to
                protect our users, our infrastructure, and the internet community.
              </p>
              <p>
                Violation of this policy may result in suspension or termination of services, legal action,
                and reporting to appropriate authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Prohibited Activities</h2>
              <p className="mb-4">
                You may not use our services for any illegal, harmful, or abusive purposes, including but not limited to:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.1 Illegal Activities</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Any activity that violates local, state, national, or international law</li>
                <li>Promotion or facilitation of illegal goods, services, or activities</li>
                <li>Copyright, trademark, or intellectual property infringement</li>
                <li>Identity theft, fraud, or financial crimes</li>
                <li>Distribution of illegal or pirated content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Harmful Content</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Malware, viruses, or malicious code distribution</li>
                <li>Content that promotes violence, terrorism, or hate speech</li>
                <li>Child exploitation or abuse material (CSAM)</li>
                <li>Content promoting self-harm or suicide</li>
                <li>Harassment, bullying, or threatening content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Fraudulent Activities</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Phishing, social engineering, or identity deception</li>
                <li>Pyramid schemes, multi-level marketing scams, or Ponzi schemes</li>
                <li>False advertising or deceptive business practices</li>
                <li>Payment fraud or credit card abuse</li>
                <li>Fake reviews, testimonials, or endorsements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.4 Spam and Abuse</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Sending unsolicited bulk email (spam)</li>
                <li>Email harvesting or scraping</li>
                <li>Operating mail servers with open relays</li>
                <li>Distributing, advertising, or promoting spam</li>
                <li>Creating or operating bot networks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.5 Network Abuse</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Denial of Service (DoS) or Distributed Denial of Service (DDoS) attacks</li>
                <li>Port scanning or network vulnerability scanning without authorization</li>
                <li>Unauthorized access to computer systems or networks</li>
                <li>Interference with service to other users or networks</li>
                <li>Excessive bandwidth consumption that impacts other users</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.6 Restricted Content</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Adult content without proper age verification and legal compliance</li>
                <li>Gambling services without proper licensing and legal authorization</li>
                <li>Cryptocurrency mining or similar resource-intensive operations without authorization</li>
                <li>File sharing or torrent services used for copyright infringement</li>
                <li>Content that violates privacy rights or data protection laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Acceptable Use Guidelines</h2>
              <p className="mb-4">
                We expect all users to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the rights and privacy of others</li>
                <li>Use services in a manner that does not harm our infrastructure or other users</li>
                <li>Maintain the security of their accounts and access credentials</li>
                <li>Report any security vulnerabilities or policy violations to us</li>
                <li>Provide accurate information during registration and service use</li>
                <li>Cooperate with security investigations and abuse complaints</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Enforcement</h2>
              <p className="mb-4">
                Velon LLC reserves the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Investigate suspected violations of this AUP</li>
                <li>Suspend or terminate services immediately for violations</li>
                <li>Remove or disable access to content that violates this policy</li>
                <li>Cooperate with law enforcement and legal investigations</li>
                <li>Report illegal activities to appropriate authorities</li>
                <li>Take legal action to recover costs and damages</li>
              </ul>
              <p>
                We may take action without prior notice if we believe there is an imminent threat
                to our services, users, or the public.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Reporting Violations</h2>
              <p className="mb-4">
                If you become aware of any violations of this Acceptable Use Policy, please report
                them immediately to:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="mb-2"><strong>Abuse Contact:</strong></p>
                <p className="mb-2">Email: <a href="mailto:abuse@velonllc.com" className="text-primary-600 hover:text-primary-700">abuse@velonllc.com</a></p>
                <p className="mb-2">General Support: <a href="mailto:support@velonllc.com" className="text-primary-600 hover:text-primary-700">support@velonllc.com</a></p>
                <p>Phone: 251-385-9704</p>
              </div>
              <p className="mb-4">
                When reporting a violation, please include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Detailed description of the violation</li>
                <li>URLs, email headers, or other evidence</li>
                <li>Date and time of the incident</li>
                <li>Your contact information for follow-up</li>
              </ul>
              <p>
                We take all reports seriously and will investigate promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Client Content Responsibility</h2>
              <p className="mb-4">
                While we develop websites and applications for our clients, clients are solely
                responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The content they publish or distribute through services we create</li>
                <li>Ensuring their content complies with all applicable laws</li>
                <li>Obtaining necessary licenses, permissions, and rights for content</li>
                <li>Compliance with industry-specific regulations (HIPAA, PCI-DSS, GDPR, etc.)</li>
                <li>Implementing appropriate content moderation and monitoring</li>
              </ul>
              <p>
                We may refuse to develop or host applications that facilitate prohibited activities
                or violate this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Security Responsibilities</h2>
              <p className="mb-4">
                Users must:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use strong, unique passwords for all accounts</li>
                <li>Keep software and systems updated with security patches</li>
                <li>Implement appropriate security measures for their applications</li>
                <li>Protect access credentials and API keys</li>
                <li>Report security incidents or data breaches promptly</li>
                <li>Not attempt to bypass security measures or access controls</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Consequences of Violations</h2>
              <p className="mb-4">
                Violations of this Acceptable Use Policy may result in:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Warning:</strong> First-time or minor violations may receive a warning</li>
                <li><strong>Suspension:</strong> Temporary suspension of services pending investigation</li>
                <li><strong>Termination:</strong> Permanent termination of services without refund</li>
                <li><strong>Legal Action:</strong> Civil or criminal legal proceedings</li>
                <li><strong>Reporting:</strong> Notification to law enforcement, regulatory bodies, or affected parties</li>
                <li><strong>Financial Liability:</strong> Responsibility for damages, costs, and legal fees</li>
              </ul>
              <p>
                The severity of consequences depends on the nature and severity of the violation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. No Monitoring Obligation</h2>
              <p className="mb-4">
                While we reserve the right to monitor use of our services for compliance with this
                policy, we are not obligated to do so. We do not actively monitor client content
                and are not responsible for content created or published by users.
              </p>
              <p>
                However, we will investigate reports of violations and may review content when
                necessary for security, legal compliance, or abuse prevention.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="mb-4">
                Velon LLC reserves the right to modify this Acceptable Use Policy at any time. Changes
                will be posted on this page with an updated "Last Updated" date. Continued use of our
                services after changes constitutes acceptance of the modified policy.
              </p>
              <p>
                We may provide notice of significant changes via email or through our service announcements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="mb-4">
                For questions about this Acceptable Use Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Velon LLC</strong></p>
                <p className="mb-2">30 N Gould St Ste R</p>
                <p className="mb-2">Sheridan, WY 82801</p>
                <p className="mb-2">Email: <a href="mailto:support@velonllc.com" className="text-primary-600 hover:text-primary-700">support@velonllc.com</a></p>
                <p className="mb-2">Abuse Reports: <a href="mailto:abuse@velonllc.com" className="text-primary-600 hover:text-primary-700">abuse@velonllc.com</a></p>
                <p className="mb-2">Phone: 251-385-9704</p>
                <p className="text-sm text-gray-600 mt-4">EIN: 98-1891496</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                This Acceptable Use Policy is part of our Terms of Service. By using Velon LLC services,
                you agree to comply with this policy and all applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
