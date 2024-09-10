import React from 'react';

const Whitepaper: React.FC = () => {
  return (
    <div className="min-h-screen bg-teal-500 text-white flex flex-col items-center mt-10 p-10">
      {/* Header Section */}
      <div className="w-full max-w-5xl p-6 text-center bg-teal-700 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Whitepaper</h1>
        <p className="text-amber-300 text-2xl">Blockchain-Based Health Management System</p>
        <p className="text-lg mt-4">
          Secure, immutable, and interoperable healthcare data management leveraging blockchain and AI-powered analytics.
        </p>
      </div>

      {/* Section: Abstract */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Abstract</h2>
        <p className="text-lg">
          The healthcare industry faces critical challenges with patient data management, including data loss, inefficiencies in diagnosis, and lack of interoperability across regions. Our Blockchain-Based Health Management System addresses these issues by storing medical records on-chain, providing secure, seamless access to healthcare professionals and patients, and offering AI-powered predictive health insights for a more proactive healthcare approach.
        </p>
      </div>

      {/* Section: Problem Statement */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Problem Statement</h2>
        <p className="text-lg">
          The healthcare industry struggles with:
        </p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Data fragmentation across institutions.</li>
          <li>Misdiagnosis due to incomplete medical histories.</li>
          <li>Physical record loss or destruction.</li>
          <li>Lack of interoperability across borders.</li>
          <li>Ineffective use of patient data for preventive care.</li>
        </ul>
      </div>

      {/* Section: Solution Overview */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Solution Overview</h2>
        <p className="text-lg">
          Our blockchain-based system securely stores medical data, offering:
        </p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Immutable, decentralized medical records.</li>
          <li>Global, cross-border access via wallet-based login.</li>
          <li>Secure data sharing through smart contracts.</li>
          <li>AI-driven predictive health insights based on historical data.</li>
        </ul>
      </div>

      {/* Section: System Architecture */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
        <p className="text-lg">
          Our system consists of:
        </p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li><strong>Blockchain Layer:</strong> For secure, immutable storage of encrypted medical data.</li>
          <li><strong>Application Layer:</strong> A user-friendly interface for patients and healthcare providers.</li>
          <li><strong>AI & Analytics Layer:</strong> Provides predictive health insights using machine learning models.</li>
        </ul>
      </div>

      {/* Section: Key Features */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Patient-controlled access to medical records via blockchain wallet.</li>
          <li>Smart contract-based authorization for healthcare providers.</li>
          <li>Predictive analytics to anticipate potential health issues.</li>
          <li>Seamless integration with existing electronic health records (EHR) systems.</li>
        </ul>
      </div>

      {/* Section: Data Privacy and Security */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Data Privacy and Security</h2>
        <p className="text-lg">
          We ensure the highest level of data protection through:
        </p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>End-to-end encryption of all patient data.</li>
          <li>Smart contract access control for data sharing.</li>
          <li>Compliance with HIPAA, GDPR, and other healthcare regulations.</li>
        </ul>
      </div>

      {/* Section: Predictive Health Analytics */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Predictive Health Analytics</h2>
        <p className="text-lg">
          By leveraging machine learning, our system can:
        </p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Analyze patient data to predict potential future health issues.</li>
          <li>Provide personalized healthcare recommendations to doctors.</li>
          <li>Detect early health risks, allowing for preventive measures.</li>
        </ul>
      </div>

      {/* Section: Roadmap */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li><strong>{new Date().toLocaleDateString('en-US')} - 6 months:</strong> Develop MVP with blockchain integration and core features.</li>
          <li><strong>{new Date(new Date().setMonth(new Date().getMonth() + 6)).toLocaleDateString('en-US')} - 12 months:</strong> Launch pilot with select hospitals and clinics.</li>
          <li><strong>{new Date(new Date().setMonth(new Date().getMonth() + 12)).toLocaleDateString('en-US')} - 24 months:</strong> Full-scale deployment with predictive analytics and partnerships.</li>
          <li><strong>{new Date(new Date().setMonth(new Date().getMonth() + 24)).toLocaleDateString('en-US')} - 36 months:</strong> AI-powered real-time monitoring and global expansion.</li>
        </ul>
      </div>

      {/* Section: Conclusion */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8 mb-10">
        <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg">
          Our Blockchain-Based Health Management System aims to revolutionize healthcare by providing secure, interoperable, and predictive health data management. Through blockchain and AI, we can ensure better outcomes for patients, greater efficiency for healthcare providers, and a future where healthcare is proactive, not reactive.
        </p>
      </div>
    </div>
  );
};

export default Whitepaper;
