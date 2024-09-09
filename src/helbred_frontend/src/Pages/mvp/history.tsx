import React from 'react';

// Define the types for the patient and the component props
interface Patient {
  name: string;
  email: string;
}

interface PatientHistoryProps {
  patient: Patient;
  onClose: () => void;
}

const History: React.FC<PatientHistoryProps> = ({ patient, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">{patient.name}'s History</h2>
        <p className="text-gray-600 mb-4">Email: {patient.email}</p>

        {/* Sample Patient Data */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold">Medical History</h3>
          <ul className="list-disc list-inside">
            <li>Diabetes - 2022</li>
            <li>High Blood Pressure - 2021</li>
            <li>Fracture (Right Arm) - 2019</li>
          </ul>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
