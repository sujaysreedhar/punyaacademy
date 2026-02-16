import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the Punya Academy website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">2. Website Information and Accuracy</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to provide accurate and up-to-date information on our website regarding our programs, facilities, and admission procedures. However, Punya Academy reserves the right to modify, update, or remove information without prior notice. We do not guarantee that all information is complete, accurate, or current at all times.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">3. Admission and Enrollment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Admission to Punya Academy is subject to the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Submission of a complete application with all required documents</li>
                <li>Availability of seats in the requested grade/program</li>
                <li>Meeting age and eligibility criteria as specified</li>
                <li>Completion of the admission process and payment of required fees</li>
                <li>Acceptance of the school's rules, regulations, and policies</li>
                <li>Management reserves the right to accept or reject any application</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">4. Fees and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fee-related terms include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All fees must be paid within the specified time periods</li>
                <li>Fee structure is subject to annual review and modification</li>
                <li>Late payment may result in penalties or suspension of services</li>
                <li>Fees once paid are generally non-refundable (refer to Refund Policy)</li>
                <li>Parents are responsible for ensuring timely payment of all dues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">5. Code of Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Students and parents agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Adhere to the school's code of conduct and discipline policies</li>
                <li>Respect teachers, staff, and fellow students</li>
                <li>Maintain the school's property and facilities</li>
                <li>Follow safety and security guidelines</li>
                <li>Support the school's educational philosophy and values</li>
                <li>Communicate respectfully with school administration and staff</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">6. Attendance and Academic Performance</h2>
              <p className="text-gray-700 leading-relaxed">
                Regular attendance is mandatory for all enrolled students. The school reserves the right to take appropriate action, including denial of promotion or withdrawal of admission, in cases of poor attendance or unsatisfactory academic performance without proper justification.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">7. Health and Safety</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Parents must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Inform the school of any medical conditions, allergies, or special needs</li>
                <li>Ensure their child is in good health when attending school</li>
                <li>Comply with health and safety protocols implemented by the school</li>
                <li>Provide emergency contact information and keep it updated</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on the Punya Academy website, including text, graphics, logos, images, and software, is the property of Punya Academy and protected by copyright and intellectual property laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">9. Photography and Media</h2>
              <p className="text-gray-700 leading-relaxed">
                Punya Academy may photograph or video record students during school activities for promotional, educational, or documentation purposes. Parents who do not consent to such use must inform the school in writing.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">10. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. Punya Academy is not responsible for the content, privacy practices, or terms of service of any third-party sites. Access to such sites is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Punya Academy shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our website or services. This includes, but is not limited to, damages for loss of data, interruption of service, or unauthorized access to information.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">12. Withdrawal and Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Parents must provide written notice for withdrawal of their child from the school. The school reserves the right to terminate enrollment in cases of serious misconduct, non-payment of fees, or violation of school policies. Withdrawal procedures and related fee implications are subject to the school's withdrawal and refund policy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">13. Management Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                The school management reserves the right to make changes to policies, procedures, fee structure, and curriculum as deemed necessary for the smooth functioning and improvement of the institution. Parents will be notified of significant changes in a timely manner.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">14. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these terms and conditions or related to the use of our services shall be resolved through mutual discussion. If a resolution cannot be reached, disputes shall be subject to the jurisdiction of courts in Bangalore, Karnataka.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">15. Updates to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Punya Academy reserves the right to modify these terms and conditions at any time. Updated terms will be posted on this page with a revised date. Continued use of our website and services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">16. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions or concerns regarding these terms and conditions, please contact:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-[#D81B60]">
                <p className="text-gray-700 font-semibold">Punya Academy</p>
                <p className="text-gray-700">16th Cross, Munireddy Layout Near Lake, Opposite ITI Layout Mangammanapalya Bengaluru – 560068</p>
                <p className="text-gray-700">Email: info@punyaacademy.com</p>
                <p className="text-gray-700">Phone: +91 8951882860</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-block bg-[#D81B60] hover:bg-[#c01850] text-white font-bold px-8 py-4 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
