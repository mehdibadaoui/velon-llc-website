import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Delivery Policy - Velon LLC',
  description: 'Service delivery timelines and fulfillment policy for Velon LLC web development services.',
}

export default function DeliveryPolicy() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Service Delivery Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> November 8, 2025
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="mb-4">
                At Velon LLC, we provide digital web development services, not physical products. This
                Service Delivery Policy outlines our commitment to timely and professional delivery of
                all project deliverables and ongoing services.
              </p>
              <p>
                All delivery timelines are estimates and will be confirmed in your individual project
                agreement or statement of work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Delivery Timelines</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.1 One-Time Development Projects</h3>
              <p className="mb-4">
                Project timelines vary based on scope and complexity:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Small Projects (Landing Pages, Simple Websites):</strong> Typically 2-4 weeks
                  from project kickoff to final delivery
                </li>
                <li>
                  <strong>Medium Projects (Multi-page Websites, Basic Web Apps):</strong> Typically 4-8 weeks
                  from project kickoff to final delivery
                </li>
                <li>
                  <strong>Large Projects (Complex Web Applications, E-commerce):</strong> Typically 8-16 weeks
                  or more, depending on requirements
                </li>
                <li>
                  <strong>Custom Projects:</strong> Timeline will be specified in your project proposal
                  based on detailed requirements analysis
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Subscription Services</h3>
              <p className="mb-4">
                For ongoing subscription-based development and support:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Initial Setup:</strong> Service activation within 1-2 business days of payment confirmation
                </li>
                <li>
                  <strong>Ongoing Work:</strong> Continuous development with regular updates and deployments
                  as agreed in your subscription plan
                </li>
                <li>
                  <strong>Support Requests:</strong> Response within 24 hours during business days;
                  resolution time depends on complexity
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Consulting Services</h3>
              <p className="mb-4">
                Consulting and advisory services are scheduled based on mutual availability:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Session Scheduling:</strong> Sessions scheduled within 3-5 business days of booking
                </li>
                <li>
                  <strong>Deliverable Reports:</strong> Delivered within 5-7 business days after session completion
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Delivery Method</h2>
              <p className="mb-4">
                All services and deliverables are delivered digitally:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Source Code:</strong> Delivered via secure code repositories (GitHub, GitLab, etc.)
                  or direct file transfer
                </li>
                <li>
                  <strong>Deployed Applications:</strong> Deployed to agreed-upon hosting platforms
                  (Vercel, AWS, etc.) with access credentials provided
                </li>
                <li>
                  <strong>Documentation:</strong> Delivered via email, cloud storage (Google Drive, Dropbox),
                  or project management tools
                </li>
                <li>
                  <strong>Training Materials:</strong> Delivered through video recordings, written guides,
                  or live training sessions
                </li>
              </ul>
              <p>
                <strong>Access:</strong> You will receive immediate access to deliverables upon final payment
                and project completion, or as specified in milestone schedules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Project Milestones</h2>
              <p className="mb-4">
                Most projects are divided into milestones for clear progress tracking:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Milestone 1 - Discovery &amp; Planning:</strong> Requirements gathering,
                  technical planning, and project roadmap (typically 3-5 business days)
                </li>
                <li>
                  <strong>Milestone 2 - Design Phase:</strong> UI/UX design, mockups, and approval
                  (timeline varies by project)
                </li>
                <li>
                  <strong>Milestone 3 - Development:</strong> Core functionality implementation with
                  regular progress updates
                </li>
                <li>
                  <strong>Milestone 4 - Testing &amp; QA:</strong> Comprehensive testing and bug fixes
                </li>
                <li>
                  <strong>Milestone 5 - Launch:</strong> Final deployment, documentation, and handover
                </li>
              </ul>
              <p>
                Each milestone has specific deliverables and estimated completion dates outlined in
                your project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Factors Affecting Delivery</h2>
              <p className="mb-4">
                Timeline estimates assume:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Timely client feedback and approvals at each milestone</li>
                <li>Availability of all required content, assets, and access credentials</li>
                <li>No significant scope changes during development</li>
                <li>Clear and responsive communication from both parties</li>
              </ul>

              <p className="mb-4">
                <strong>Delays may occur due to:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Extended client review periods or delayed feedback</li>
                <li>Scope changes or additional feature requests</li>
                <li>Missing information, content, or required third-party services</li>
                <li>Technical issues with third-party integrations or platforms</li>
                <li>Force majeure events (natural disasters, emergencies, etc.)</li>
              </ul>

              <p>
                We will communicate any potential delays promptly and work with you to adjust timelines
                as needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Expedited Service</h2>
              <p className="mb-4">
                Rush or expedited service may be available for an additional fee:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Priority Scheduling:</strong> Fast-track your project ahead of standard queue
                </li>
                <li>
                  <strong>Extended Hours:</strong> Evening and weekend work to meet tight deadlines
                </li>
                <li>
                  <strong>Additional Resources:</strong> Dedicated team members for faster completion
                </li>
              </ul>
              <p>
                Contact us at <a href="mailto:support@velonllc.com" className="text-primary-600 hover:text-primary-700">support@velonllc.com</a> to discuss expedited service options and pricing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Quality Assurance</h2>
              <p className="mb-4">
                Before final delivery, all projects undergo:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Comprehensive functionality testing across multiple devices and browsers</li>
                <li>Performance optimization and load time testing</li>
                <li>Security vulnerability scanning</li>
                <li>Code quality review and documentation</li>
                <li>Client acceptance testing and approval</li>
              </ul>
              <p>
                We will not consider a project complete until you have reviewed and approved the final deliverables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Post-Delivery Support</h2>
              <p className="mb-4">
                After project delivery:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Warranty Period:</strong> 30 days of complimentary bug fixes for issues
                  directly related to our work (excludes new feature requests)
                </li>
                <li>
                  <strong>Training:</strong> Basic training on managing and updating your website or application
                </li>
                <li>
                  <strong>Documentation:</strong> Complete technical documentation and user guides
                </li>
                <li>
                  <strong>Ongoing Support:</strong> Available through subscription plans or hourly rates
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Client Responsibilities</h2>
              <p className="mb-4">
                To ensure timely delivery, clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing clear requirements and project objectives</li>
                <li>Supplying all necessary content, images, and brand assets</li>
                <li>Responding to questions and requests within 2-3 business days</li>
                <li>Providing timely feedback and approvals at each milestone</li>
                <li>Making milestone payments on schedule as agreed</li>
                <li>Providing access to necessary accounts, servers, or platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="mb-4">
                Velon LLC reserves the right to modify this Service Delivery Policy at any time.
                Changes will be posted on this page with an updated "Last Updated" date. Project-specific
                delivery terms in signed agreements take precedence over this general policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="mb-4">
                For questions about service delivery or project timelines, please contact us:
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
                This Service Delivery Policy is part of our commitment to transparent and professional
                service. All delivery timelines are estimates and may vary based on project complexity
                and client responsiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
