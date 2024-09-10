import React from 'react';

const PitchDeck: React.FC = () => {
  return (
    <div className="min-h-screen bg-teal-500 text-white flex flex-col items-center mt-10">
      {/* Title Slide */}
      <div className="w-full max-w-5xl p-6 text-center bg-teal-700 rounded-lg mt-10">
        <h1 className="text-4xl font-bold mb-4">HelBred-Blockchain-Based Health Management System</h1>
        <p className="text-amber-300 text-2xl">"Revolutionizing healthcare through secure, on-chain medical records"</p>
      </div>

      {/* Problem Statement */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Problem Statement</h2>
        <p className="text-lg">
          Medical records are often paper-based, which can easily be lost or damaged. Patients may face misdiagnoses due to
          unavailable past medical history, and must carry multiple documents while traveling or visiting different healthcare providers.
        </p>
      </div>

      {/* Solution Overview */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Solution Overview</h2>
        <p className="text-lg">
          Our blockchain-powered health management system stores patient medical records securely on-chain. These records can
          be accessed globally by authorized personnel, with the patient controlling access via a secure digital wallet.
        </p>
      </div>

      {/* Key Features */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc ml-5 text-lg">
          <li>Decentralized storage ensures secure, immutable medical records.</li>
          <li>Records are globally accessible to authorized personnel.</li>
          <li>Predictive analytics for future health risk assessments.</li>
          <li>Interoperability across hospitals, states, and countries.</li>
        </ul>
      </div>

      {/* How It Works */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal ml-5 text-lg">
          <li>Medical records are uploaded to the blockchain after each consultation.</li>
          <li>Access is controlled through secure digital wallets and authorized personnel.</li>
          <li>Data is accessible anywhere, reducing the risk of misdiagnosis.</li>
          <li>Predictive models are built from historical data for proactive healthcare.</li>
        </ol>
      </div>

      {/* Market Opportunity */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Market Opportunity</h2>
        <p className="text-lg">
          The global healthcare industry is worth over $X trillion, with a growing demand for digital transformation. Our
          solution addresses the needs of secure patient data management, medical tourism, and predictive healthcare.
        </p>
      </div>

      {/* Competitive Landscape */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Competitive Landscape</h2>
        <p className="text-lg">
          While existing EMR systems are centralized and prone to security risks, our solution offers decentralized storage,
          global accessibility, and predictive healthcare analytics, setting us apart from the competition.
        </p>
      </div>

      {/* Revenue Model */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Revenue Model</h2>
        <ul className="list-disc ml-5 text-lg">
          <li>Subscription-based model for healthcare providers.</li>
          <li>Freemium model for patients, with premium features for predictive analytics.</li>
          <li>Partnerships with hospitals, clinics, pharmacies, and insurers.</li>
        </ul>
      </div>

      {/* Roadmap */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
        <ul className="list-disc ml-5 text-lg">
          <li>MVP Development: Blockchain integration, basic record storage features.</li>
          <li>Pilot with selected hospitals and clinics.</li>
          <li>Full-scale rollout, partnerships, and international expansion.</li>
          <li>AI-powered predictive health monitoring.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-5xl p-6 text-center bg-teal-700 rounded-lg mt-8 mb-10">
        <h2 className="text-3xl font-bold mb-4">Join Us</h2>
        <p className="text-lg">
          We are seeking seed funding, partnerships with healthcare providers, and early adopters for pilot programs. Together,
          we can revolutionize healthcare with secure, on-chain medical records.
        </p>
      </div>
    </div>
  );
};

export default PitchDeck;
