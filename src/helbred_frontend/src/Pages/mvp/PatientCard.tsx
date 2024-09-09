import React from 'react';
import { Link } from 'react-router-dom';

// Define the types for the patient and the component props
interface Patient {
  name: string;
  email: string;
  image: string;
}

interface PatientCardProps {
  patient: Patient;
  onSelect: () => void;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient, onSelect }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
      onClick={onSelect}
    >
      <img className="w-24 h-24 rounded-full mx-auto" src={patient.image} alt={patient.name} />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{patient.name}</h2>
        <p className="text-gray-600">{patient.email}</p>
      </div>
    <Link
    to='/doc'
    >
    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        View History
      </button>
    </Link>
    </div>
  );
};

export default PatientCard;
