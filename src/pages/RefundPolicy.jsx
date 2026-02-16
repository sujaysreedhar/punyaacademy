import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Refund Policy</h1>
          <p className="text-gray-600">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">1. General Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                At Punya Academy, we understand that circumstances may change, and families may need to reconsider their enrollment decisions. This Refund Policy outlines the terms and conditions under which refunds may be considered.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">2. Admission Fee</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The admission fee is a one-time, non-refundable payment that covers administrative and processing costs associated with enrollment. This fee is not refundable under any circumstances, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Withdrawal before the academic year begins</li>
                <li>Change of mind after admission confirmation</li>
                <li>Relocation or personal circumstances</li>
                <li>Non-attendance after admission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">3. Tuition Fee Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tuition fee refunds are considered on a case-by-case basis under the following circumstances:
              </p>
              
              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#4B1F73] mb-2">3.1 Before Academic Year Begins</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>If withdrawal notice is given at least 30 days before the academic year starts, 75% of the tuition fee may be refunded</li>
                    <li>If withdrawal notice is given less than 30 days but more than 15 days before the start date, 50% of the tuition fee may be refunded</li>
                    <li>If withdrawal notice is given less than 15 days before the start date, no refund will be provided</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#4B1F73] mb-2">3.2 After Academic Year Begins</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>If withdrawal occurs within the first month of the academic year, 50% of the remaining term's tuition fee may be refunded</li>
                    <li>If withdrawal occurs after the first month, no refund of tuition fees will be provided</li>
                    <li>The month in which withdrawal occurs will be charged in full</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">4. Special Circumstances</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The school management may consider refund requests in exceptional circumstances, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Serious medical conditions (supported by medical documentation)</li>
                <li>Unforeseen family emergencies</li>
                <li>Relocation due to employment transfer (supported by documentation)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Such requests will be reviewed by the management on a case-by-case basis. The decision of the management in such cases shall be final and binding.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">5. Other Fees</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following fees are non-refundable once paid:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Registration/Application fees</li>
                <li>Activity fees</li>
                <li>Transportation fees (for the month in which service was availed)</li>
                <li>Material and book fees</li>
                <li>Examination fees</li>
                <li>Any other ancillary fees</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">6. Refund Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, parents/guardians must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Submit a written refund request to the school administration</li>
                <li>Provide all relevant supporting documents</li>
                <li>Complete any required exit formalities</li>
                <li>Return all school property (if applicable)</li>
                <li>Clear all outstanding dues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">7. Refund Timeline</h2>
              <p className="text-gray-700 leading-relaxed">
                Approved refunds will be processed within 30-45 business days from the date of approval. Refunds will be made through the same payment method used for the original transaction, or via bank transfer to the account provided by the parent/guardian.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">8. Adjustment of Dues</h2>
              <p className="text-gray-700 leading-relaxed">
                Any refund amount will be adjusted against outstanding dues, if any, before processing the refund. This includes but is not limited to late payment penalties, library fines, damage charges, or any other dues owed to the school.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">9. Cancellation by School</h2>
              <p className="text-gray-700 leading-relaxed">
                In the unlikely event that Punya Academy is unable to provide the educational services due to unforeseen circumstances (such as closure, natural disasters, or government orders), a full refund of tuition fees for the unused period will be provided. Admission fees and other non-tuition fees remain non-refundable.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">10. No Refund Circumstances</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No refund will be considered in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Termination of enrollment due to disciplinary reasons</li>
                <li>Voluntary withdrawal after the specified refund period</li>
                <li>Non-attendance without formal withdrawal</li>
                <li>Failure to meet academic or behavioral standards</li>
                <li>Violation of school policies leading to dismissal</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">11. Modifications to Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Punya Academy reserves the right to modify this Refund Policy at any time. Any changes will be communicated to parents and updated on our website. The policy in effect at the time of admission will apply to that enrollment.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">12. Contact for Refund Queries</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions, clarifications, or to initiate a refund request, please contact:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-[#D81B60]">
                <p className="text-gray-700 font-semibold">Punya Academy - Accounts Department</p>
                <p className="text-gray-700">16th Cross, Munireddy Layout Near Lake, Opposite ITI Layout Mangammanapalya Bengaluru – 560068</p>
                <p className="text-gray-700">Email: info@punyaacademy.com</p>
                <p className="text-gray-700">Phone: +91 8951882860</p>
                <p className="text-gray-700 mt-2 italic">Working Hours: Monday to Saturday, 9:00 AM to 5:00 PM</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold mb-2">Important Note:</p>
              <p className="text-gray-700 leading-relaxed">
                This policy is designed to be fair to both the school and families. We encourage parents to carefully consider their decision before completing the admission process. Please read and understand this policy before making fee payments.
              </p>
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

export default RefundPolicy;
