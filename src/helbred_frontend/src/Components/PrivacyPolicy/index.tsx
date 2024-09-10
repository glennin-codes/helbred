import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-teal-500 text-white min-h-screen  mt-10 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-lg">Effective Date: {new Date().toLocaleDateString()}</p>
      </header>
      <main className="max-w-3xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">1. Introduction</h2>
          <p>
            Welcome to the HelBred,a Blockchain-Based Health Management System ("Platform"). We are committed to protecting your privacy and ensuring that your personal data is handled securely. This Privacy Policy explains how we collect, use, disclose, and protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-amber-300">Personal Information</h3>
          <p>
            When you register an account or use our services, we may collect the following personal information:
            <ul className="list-disc pl-5">
              <li><strong>Contact Information:</strong> Name, email address, phone number.</li>
              <li><strong>Medical Information:</strong> Health records, medical history, and other related data.</li>
              <li><strong>Account Information:</strong> Username, password, and authentication details.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Usage Data</h3>
          <p>
            We collect information about how you interact with the Platform, including:
            <ul className="list-disc pl-5">
              <li><strong>Log Data:</strong> IP address, browser type, access times, and pages visited.</li>
              <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar technologies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and improve our services. You can control cookie settings through your browser.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">3. How We Use Your Information</h2>
          <h3 className="text-xl font-semibold text-amber-300">Providing Services</h3>
          <p>
            We use your information to:
            <ul className="list-disc pl-5">
              <li><strong>Manage Accounts:</strong> Register and maintain your account, and provide customer support.</li>
              <li><strong>Deliver Services:</strong> Process transactions, manage medical records, and facilitate access to authorized personnel.</li>
              <li><strong>Improve Services:</strong> Analyze usage patterns and enhance the Platform's functionality.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Communication</h3>
          <p>
            We may use your contact information to:
            <ul className="list-disc pl-5">
              <li><strong>Send Notifications:</strong> Provide updates about your account or service changes.</li>
              <li><strong>Promotional Messages:</strong> Inform you about new features or offers (you can opt-out at any time).</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Legal Compliance</h3>
          <p>
            We may use your information to:
            <ul className="list-disc pl-5">
              <li><strong>Comply with Legal Obligations:</strong> Adhere to applicable laws and regulations.</li>
              <li><strong>Protect Rights:</strong> Enforce our terms of service and protect our rights and interests.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">4. Data Sharing and Disclosure</h2>
          <h3 className="text-xl font-semibold text-amber-300">Authorized Personnel</h3>
          <p>
            We share your medical information with:
            <ul className="list-disc pl-5">
              <li><strong>Healthcare Providers:</strong> Doctors, pharmacists, and other authorized medical professionals as per your permissions.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Third-Party Service Providers</h3>
          <p>
            We may share your information with third-party service providers who assist us in operating the Platform, including:
            <ul className="list-disc pl-5">
              <li><strong>Cloud Storage Providers:</strong> For data storage and processing.</li>
              <li><strong>Analytics Services:</strong> For usage analysis and performance improvement.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold text-amber-300">Legal Requirements</h3>
          <p>
            We may disclose your information if required by law or in response to legal requests, such as:
            <ul className="list-disc pl-5">
              <li><strong>Regulatory Compliance:</strong> Compliance with applicable regulations.</li>
              <li><strong>Legal Proceedings:</strong> Protection against legal claims or disputes.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data:
            <ul className="list-disc pl-5">
              <li><strong>Encryption:</strong> Data is encrypted during transmission and storage.</li>
              <li><strong>Access Controls:</strong> Only authorized personnel can access your personal and medical information.</li>
              <li><strong>Secure Infrastructure:</strong> Regular updates and security practices are followed to maintain the integrity of our systems.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">6. Data Retention</h2>
          <p>
            We retain your personal and medical information for as long as necessary to provide services and comply with legal obligations. When your data is no longer required, it will be securely deleted or anonymized.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">7. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the following rights regarding your personal data:
            <ul className="list-disc pl-5">
              <li><strong>Access:</strong> Request access to your personal information.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to certain conditions.</li>
              <li><strong>Objection:</strong> Object to the processing of your data under certain circumstances.</li>
            </ul>
            To exercise your rights, please contact us at <a href="mailto:contact@HelBred.com" className="text-teal-400 underline">contact@HelBred.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our Platform and updating the effective date. Your continued use of the Platform after changes constitutes acceptance of the revised policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:contact@blockchain-health.com" className="text-teal-400 underline">contact@HelBred.com</a>
            <br />
            <strong>Address:</strong> [Nairobi]
            <br />
            <strong>Phone:</strong> [+123456779]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-600">10. International Users</h2>
          <p>
            If you are accessing the Platform from outside Kenya, please be aware that your data may be transferred to and processed in Kenya. By using the Platform, you consent to the transfer and processing of your data in accordance with this Privacy Policy.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
