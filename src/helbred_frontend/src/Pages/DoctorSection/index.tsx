import React, { useEffect, useState } from 'react';
import { createActor } from '../../../../declarations/helbred_backend';
import UploadData from '../uploadData';


// Sidebar Component
const Sidebar: React.FC = () => {

  return (
    <aside className="bg-teal-100 text-gray-700 font-jozi w-64 h-screen hidden lg:block">
      <nav className="p-6 mt-24">
        <h2 className="text-2xl font-bold mb-8 w-full text-nowrap">Doctor Dashboard</h2>
        <ul>
        <li className="mb-4 border border-gray-900 hover:border-black hover:ring  px-4 py-3">
            <a href="#patient-history" className="hover:text-gray-400">
              Patient History
            </a>
          </li>
          <li className="mb-4 border border-gray-900 hover:border-black hover:ring  px-4 py-3">
            <a href="#prescriptions" className="hover:text-gray-400">
              New Patient
            </a>
          </li>
        
        </ul>
      </nav>
    </aside>
  );
};

// Patient History Component
const PatientHistory: React.FC = () => {
  const [treatments, setTreatments] = useState<any>([]); // Initialize as an array of Treatment
  const [error, setError] = useState<string | null>(null);

  // Initialize the actor (replace with your backend canister id)
  const helbred_backend = createActor("bkyz2-fmaaa-aaaaa-qaaaq-cai", {});

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call the query_health_record method with the user's email
        const data: any = await helbred_backend.query_health_record("ayiendaglen@gmail.com");

        // Check if data has Ok and is an array
        if (data?.Ok && Array.isArray(data.Ok)) {
          setTreatments(data.Ok); // Store the treatments array in state
        } else {
          setError("No treatment data available");
        }
      } catch (error) {
        console.error("Error fetching data from backend:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="flex-1 p-8">
      <h2 className="mt-24 text-3xl font-bold text-teal-500 mb-6">Patient History</h2>
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-teal-100 text-gray-900 ">
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Diagnosis</th>
            <th className="py-3 px-4">Prescription</th>
            <th className="py-3 px-4">Lab Results</th>
          </tr>
        </thead>
        <tbody>
        {treatments.length > 0 ? (
              treatments.map((treatment, index) => (
                <tr key={index} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {treatment.date}
                  </th>
                  <td className="px-6 py-4">{treatment.doctor_name || "N/A"}</td>
                  <td className="px-6 py-4">{treatment.hospital || "N/A"}</td>
                  <td className="px-6 py-4">{treatment.diagnosis}</td>
                  <td className="px-6 py-4">{treatment.prescription}</td>
                  <td className="px-6 py-4">{treatment.lab_results || "N/A"}</td>
                  <td className="px-6 py-4">{treatment.email}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  {error || "No treatments available."}
                </td>
              </tr>
            )}
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
      <div className=" mt-2 flex-1 bg-gray-50 p-8">
        {/* Patient History Section */}
        <PatientHistory />

       <UploadData/>
      </div>

    </div>
  );
};

export default DoctorDashboard;
