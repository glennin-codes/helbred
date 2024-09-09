import React from 'react';

// Dummy data for patient's medical history
const patientHistory = [
  {
    date: '2024-09-01',
    diagnosis: 'Hypertension',
    prescription: 'Lisinopril 10mg',
    labResult: 'Blood pressure: 140/90',
  },
  {
    date: '2024-08-15',
    diagnosis: 'Type 2 Diabetes',
    prescription: 'Metformin 500mg',
    labResult: 'Blood glucose: 150 mg/dL',
  },
  {
    date: '2024-08-01',
    diagnosis: 'Flu',
    prescription: 'Oseltamivir 75mg',
    labResult: 'Normal flu markers',
  },
];

// Sidebar Component
const Sidebar: React.FC = () => {
  return (
    <aside className="bg-teal-500 text-white w-64 h-screen hidden lg:block">
      <nav className="p-6">
        <h2 className="text-2xl font-bold mb-8">Doctor Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="#patient-history" className="hover:text-gray-300">
              Patient History
            </a>
          </li>
          <li className="mb-4">
            <a href="#prescriptions" className="hover:text-gray-300">
              Prescriptions
            </a>
          </li>
          <li className="mb-4">
            <a href="#lab-results" className="hover:text-gray-300">
              Lab Results
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

// Patient History Component
const PatientHistory: React.FC = () => {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-3xl font-bold text-teal-500 mb-6">Patient History</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-teal-500 text-white">
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Diagnosis</th>
            <th className="py-3 px-4">Prescription</th>
            <th className="py-3 px-4">Lab Results</th>
          </tr>
        </thead>
        <tbody>
          {patientHistory.map((record, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-4 text-gray-700">{record.date}</td>
              <td className="py-3 px-4 text-gray-700">{record.diagnosis}</td>
              <td className="py-3 px-4 text-gray-700">{record.prescription}</td>
              <td className="py-3 px-4 text-gray-700">{record.labResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main Dashboard Layout Component
const DoctorDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar for Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8">
        {/* Patient History Section */}
        <PatientHistory />

        {/* Additional sections (e.g., prescriptions, lab results) can be added here */}
      </div>
    </div>
  );
};

export default DoctorDashboard;
