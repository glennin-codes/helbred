import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-teal-500 text-white min-h-screen mt-10 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-lg">Effective Date: {new Date().toLocaleDateString()}</p>
      </header>
      <main className="max-w-3xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the HelBred System ("Platform"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, please do not use the Platform.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">2. User Eligibility</h2>
          <p>
            To use the Platform, you must be at least 18 years old. If you are under 18, you must have the consent of a parent or legal guardian to use the Platform. By using the Platform, you confirm that you meet these requirements and have received such consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">3. Account Registration and Security</h2>
          <h3 className="text-xl font-semibold text-amber-300">Account Creation</h3>
          <p>
            To access certain features, you must register an account. You agree to provide accurate and complete information during registration and to update this information as necessary.
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">4. Use of the Platform</h2>
          <h3 className="text-xl font-semibold text-amber-300">Permitted Use</h3>
          <p>
            You agree to use the Platform only for lawful purposes and in accordance with these Terms. You must not:
            <ul className="list-disc pl-5">
              <li>Use the Platform to transmit or store harmful, illegal, or unauthorized content.</li>
              <li>Interfere with or disrupt the Platform's operation or network.</li>
              <li>Attempt to gain unauthorized access to other users' accounts or the Platform’s systems.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Prohibited Conduct</h3>
          <p>
            You agree not to:
            <ul className="list-disc pl-5">
              <li>Engage in any activity that could damage, disable, or impair the Platform.</li>
              <li>Use the Platform for any purpose that is illegal or violates the rights of others.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">5. Data Privacy and Security</h2>
          <h3 className="text-xl font-semibold text-amber-300">Data Handling</h3>
          <p>
            We are committed to protecting your privacy. Patient data is encrypted and stored on the blockchain to ensure security and integrity. For more details on how we handle your data, please refer to our <a href="/PrivacyPolicy" className="text-teal-400 underline">Privacy Policy</a>.
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Data Access</h3>
          <p>
            Authorized personnel, including doctors and pharmacists, will have access to your data as per the permissions granted. You have control over who can view and manage your medical records.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">6. Blockchain and Smart Contracts</h2>
          <h3 className="text-xl font-semibold text-amber-300">Blockchain Use</h3>
          <p>
            The Platform uses blockchain technology to store medical records securely and immutably. Transactions made on the blockchain are irreversible. You are responsible for ensuring that you use the correct wallet addresses and understand the implications of blockchain transactions.
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Smart Contracts</h3>
          <p>
            Smart contracts are used to manage access to medical records. By using the Platform, you agree to the execution of these smart contracts and acknowledge that transactions cannot be altered or reversed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, the Platform is provided "as is" and "as available" without warranties of any kind. We are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Platform, including but not limited to issues related to data accuracy or medical treatment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">8. Disclaimer of Warranties</h2>
          <p>
            The Platform is provided without any warranties, express or implied. We do not guarantee that the Platform will be error-free, secure, or continuously available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">9. Intellectual Property</h2>
          <h3 className="text-xl font-semibold text-amber-300">Ownership</h3>
          <p>
            All content, trademarks, and other intellectual property on the Platform are owned by or licensed to [Your Company Name]. You may not use, reproduce, or distribute any content from the Platform without our prior written consent.
          </p>
          <h3 className="text-xl font-semibold text-amber-300">License</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable license to access and use the Platform for personal, non-commercial use in accordance with these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">10. Modification of Terms</h2>
          <p>
            We may modify these Terms at any time. Significant changes will be communicated to you via email or through the Platform. Your continued use of the Platform following any changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">11. Termination of Service</h2>
          <p>
            We reserve the right to suspend or terminate your account if you violate these Terms or engage in activities that compromise the security or integrity of the Platform. Upon termination, access to the Platform will be revoked.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Your Jurisdiction]. Any disputes arising under these Terms will be resolved in accordance with the laws of [Your Jurisdiction].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">13. Contact Information</h2>
          <p>
            For questions or concerns regarding these Terms, please contact us at <a href="mailto:contact@blockchain-health.com" className="text-teal-400 underline">contact@HelBred.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">14. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless HelBred and its affiliates from any claims, liabilities, damages, or expenses arising from your use of the Platform or your breach of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">15. Third-Party Services</h2>
          <p>
            The Platform may integrate with third-party services (e.g., blockchain providers, wallet services). We are not responsible for any issues or damages arising from your interaction with these third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">16. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms will be resolved through binding arbitration in Nairobi, and users agree to waive their right to participate in any class-action lawsuits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">Medical Disclaimer</h2>
          <p>
            The Platform is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions regarding a medical condition.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">Payment and Fees</h2>
          <p>
            Certain services on the Platform may incur transaction fees or other charges, including blockchain gas fees. You are responsible for all such fees.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;
