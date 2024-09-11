import React, { useEffect, useState } from "react";
import { UserProfile } from "./UserProfile";
import { createActor, helbred_backend } from "../../../../declarations/helbred_backend";

interface Treatment {
  date: string;
  doctor_name?: string;
  hospital?: string;
  diagnosis: string;
  prescription: string;
  lab_results?: string;
  email: string;
}

const TreatmentTable: React.FC = () => {
  const [treatments, setTreatments] = useState<any>([]); // Initialize as an array of Treatment
  const [error, setError] = useState<string | null>(null);

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
  }, []); // Empty dependency array to run the effect once

  return (
    <div className="md:px-12 w-full px-2 mt-24 flex flex-col">
      <div className="w-full">
        <UserProfile />
      </div>
      <div className="mt-20 relative overflow-x-auto mb-24">
        <h2 className="text-2xl font-bold text-gray-900 text-center mt-2 mb-8">
          Treatment History
        </h2>

        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-jozi">
            <tr>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Doctor Name</th>
              <th scope="col" className="px-6 py-3">Hospital</th>
              <th scope="col" className="px-6 py-3">Diagnosis</th>
              <th scope="col" className="px-6 py-3">Prescription</th>
              <th scope="col" className="px-6 py-3">Lab Results</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
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
    </div>
  );
};

export default TreatmentTable;
