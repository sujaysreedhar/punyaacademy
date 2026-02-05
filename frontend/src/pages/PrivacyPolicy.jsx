import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Punya Academy ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Parent and guardian contact information (name, email, phone number, address)</li>
                <li>Student information (name, age, grade level)</li>
                <li>Information provided through enquiry forms and admission applications</li>
                <li>Communication preferences and feedback</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Process admission enquiries and applications</li>
                <li>Communicate with parents and guardians about our programs and services</li>
                <li>Schedule campus visits and respond to inquiries</li>
                <li>Improve our website and services</li>
                <li>Send important updates and notifications about the school</li>
                <li>Maintain records for educational and administrative purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">4. Data Protection and Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">5. Sharing of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect the rights, property, or safety of Punya Academy, our students, or others</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not knowingly collect personal information from children under 13 years of age through our website. Our online forms are intended for parents and guardians. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">8. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with relevant data protection authorities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">9. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4B1F73] mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-[#D81B60]">
                <p className="text-gray-700 font-semibold">Punya Academy</p>
                <p className="text-gray-700">Mangammanapalya, Near HSR Layout, Bangalore, Karnataka</p>
                <p className="text-gray-700">Email: info@punyaacademy.com</p>
                <p className="text-gray-700">Phone: +91 XXXXXXXXXX</p>
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

export default PrivacyPolicy;
