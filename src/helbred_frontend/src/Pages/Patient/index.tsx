import React from 'react';
import { UserProfilePageProps } from './types';



const UserProfilePage: React.FC<UserProfilePageProps> = ({ records }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Medical Records</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Prescriptions</th>
            <th className="px-4 py-2 border-b">Medication</th>
            <th className="px-4 py-2 border-b">Lab Results</th>
            <th className="px-4 py-2 border-b">Hospital</th>
            <th className="px-4 py-2 border-b">Next Visit</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{record.date}</td>
              <td className="px-4 py-2 border-b">{record.prescriptions || '-'}</td>
              <td className="px-4 py-2 border-b">{record.medication || '-'}</td>
              <td className="px-4 py-2 border-b">
                {record.labResults.length > 0 ? (
                  <div>
                    {record.labResults.map((result, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{result.test}</span>
                        <span>{result.result}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  '-'
                )}
              </td>
              <td className="px-4 py-2 border-b">{record.hospital || '-'}</td>
              <td className="px-4 py-2 border-b">{record.nextVisit || '-'}</td>
              <td className="px-4 py-2 border-b text-blue-500 cursor-pointer hover:underline">
                <button onClick={() => alert(`View more details for ${record.date}`)}>View More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfilePage;
