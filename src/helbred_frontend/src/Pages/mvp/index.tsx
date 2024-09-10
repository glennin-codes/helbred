import React, { useState } from 'react';
import PatientCard from './PatientCard';
import History from './history';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState({});

  const patients = [
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', image: 'https://via.placeholder.com/150' },
     { id: 2, name: 'Jane Smith', email: 'janesmith@gmail.com', image: 'https://via.placeholder.com/150' },
    // Add more patients as needed
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Doctor's Dashboard</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for patients by name or email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        Patient Cards
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPatients.map(patient => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onSelect={() => setSelectedPatient(patient)}
            />
          ))}
        </div>

        {/* Patient History Modal
        {selectedPatient && (
          <History patient={selectedPatient} onClose={() => setSelectedPatient(null)} />
        )} */}
      </div>
    </div>
  );
};

export default Dashboard;
