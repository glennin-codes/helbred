import React, { useState } from 'react';
import PatientCard from './PatientCard';
import History from './history';
import { createActor } from '../../../../declarations/helbred_backend';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [healthRecords, setHealthRecords] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  // Create an actor to interact with the canister
  const actor = createActor("bkyz2-fmaaa-aaaaa-qaaaq-cai", {});

  // Fetch health records for the input email
  const fetchHealthRecords = async (email: string) => {
    try {
      const data:any = await actor.query_health_record(email);
      if (data?.Ok) {
        setHealthRecords(data.Ok); // Update state with health records
        setSelectedPatient({ email }); // Set the selected patient with the email
        setError(null); // Clear any previous error
      } else {
        console.error("Error fetching health records:", data.Err);
        setHealthRecords([]); // Clear previous records
        setError("No records found "); // Set error message
      }
    } catch (error) {
      console.error("Error querying health record:", error);
      setHealthRecords([]); // Clear previous records
      setError("An error occurred while fetching health records.");
    }
  };

  // Handle form submission to trigger the search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      fetchHealthRecords(searchTerm); // Search using the entered email
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto mt-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">QUERY PATIENT IN THE SYSTEM</h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            placeholder="Enter patient's email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Search
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         
         {
          healthRecords && Array.isArray(healthRecords) && healthRecords.length > 1 && (
            <PatientCard
            
            patient={healthRecords}
            
          />
          )
         }
     
        </div>
{
  error && (
    <div className='flex justify-center mx-24 items-center w-64 h-42  p-12 w-64 border border-red-500 text-center text-red-700 test-sm '>
<span>
  {
      error
  }
</span>
</div>
  )
}
        {/* Patient History Modal
        {selectedPatient && (
          <History patient={selectedPatient} onClose={() => setSelectedPatient(null)} />
        )} */}
      </div>
    </div>
  );
};

export default Dashboard;
