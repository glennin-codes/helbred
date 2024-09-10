import React from 'react';

const Roadmap: React.FC = () => {
  const today = new Date();
  const formatDate = (monthsToAdd: number) => {
    const newDate = new Date(today.setMonth(today.getMonth() + monthsToAdd));
    return newDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="min-h-screen bg-teal-500 text-white flex flex-col items-center mt-10 p-10">
      {/* Title Section */}
      <div className="w-full max-w-5xl p-6 text-center bg-teal-700 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">HelBred Roadmap</h1>
        <p className="text-amber-300 text-2xl">Blockchain-Based Health Management System</p>
      </div>

      {/* Phase 1: MVP Development */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Phase 1: MVP Development</h2>
        <p className="text-lg text-amber-300">{formatDate(0)} - {formatDate(6)}</p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Blockchain integration for secure and immutable record storage.</li>
          <li>Basic features: Patient profiles, record storage, and access via wallets.</li>
          <li>Security and privacy setup, ensuring regulatory compliance (HIPAA, GDPR).</li>
          <li>Simple analytics engine for historical data viewing.</li>
          <li>Testing and feedback from early adopters.</li>
        </ul>
      </div>

      {/* Phase 2: Pilot Launch */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Phase 2: Pilot Launch</h2>
        <p className="text-lg text-amber-300">{formatDate(6)} - {formatDate(12)}</p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Partnerships with selected hospitals and clinics.</li>
          <li>Deploy pilot program and real-world testing.</li>
          <li>Collect feedback and iterate based on real-world usage.</li>
          <li>Enhance core features and improve data entry options.</li>
          <li>Ensure compliance with healthcare regulations.</li>
        </ul>
      </div>

      {/* Phase 3: Full-Scale Rollout */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Phase 3: Full-Scale Rollout</h2>
        <p className="text-lg text-amber-300">{formatDate(12)} - {formatDate(24)}</p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Optimize the platform for scalability and larger data loads.</li>
          <li>Develop advanced predictive analytics and AI-powered diagnostics.</li>
          <li>Expand to international markets and ensure compliance.</li>
          <li>Integrate with insurance companies for claims and processing.</li>
          <li>Launch public relations and marketing campaigns.</li>
        </ul>
      </div>

      {/* Phase 4: AI-Powered Health Monitoring */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Phase 4: AI-Powered Health Monitoring</h2>
        <p className="text-lg text-amber-300">{formatDate(24)} - {formatDate(36)}</p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Implement advanced AI and machine learning models for predictive healthcare.</li>
          <li>Introduce real-time monitoring using wearables and IoT devices.</li>
          <li>Partner with pharmaceutical companies and device manufacturers for data integration.</li>
          <li>Create predictive models for community healthcare trends.</li>
        </ul>
      </div>

      {/* Phase 5: Ongoing Innovation */}
      <div className="w-full max-w-5xl p-6 bg-teal-600 rounded-lg mt-8 mb-10">
        <h2 className="text-3xl font-bold mb-4">Phase 5: Ongoing Innovation</h2>
        <p className="text-lg text-amber-300">{formatDate(36)} and beyond</p>
        <ul className="list-disc ml-5 mt-4 text-lg">
          <li>Continuous updates, security maintenance, and new feature integration.</li>
          <li>Expand global partnerships and ensure long-term platform growth.</li>
          <li>Utilize data insights to optimize system performance and predictive analytics.</li>
          <li>Foster an ecosystem for third-party developers to build on top of the platform.</li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
