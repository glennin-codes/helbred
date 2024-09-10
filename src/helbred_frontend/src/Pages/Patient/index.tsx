import React, { useEffect } from "react";
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

const treatments: Treatment[] = [
  {
    date: "2024-09-09",
    doctor_name: "Dr. Smith",
    hospital: "City Hospital",
    diagnosis: "Cold",
    prescription: "Cough syrup",
    lab_results: "N/A",
    email: "patient@example.com",
  },
  {
    date: "2024-08-12",
    doctor_name: "Dr. Johnson",
    hospital: "State Hospital",
    diagnosis: "Flu",
    prescription: "Antibiotics",
    lab_results: "Blood Test",
    email: "patient@example.com",
  },
  {
    date: "2024-07-20",
    doctor_name: "Dr. Alice",
    hospital: "",
    diagnosis: "Headache",
    prescription: "Painkillers",
    lab_results: "MRI Scan",
    email: "patient@example.com",
  },
];
let actor = helbred_backend;
actor = createActor("bkyz2-fmaaa-aaaaa-qaaaq-cai", {});

useEffect(()=>{
  const get data
})
const TreatmentTable: React.FC = () => {
  return (

<div className="md:px-12 w-full px-2 mt-24 flex flex-col ">
 <div className="w-full">
 <UserProfile/>
 </div>
<div className="mt-20 relative overflow-x-auto mb-24">
  <h2>
    <span className="text-2xl font-bold text-gray-900">Treatment History</span>
  </h2>
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-jozi ">
          <tr>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Doctor Name</th>
            <th scope="col" className="px-6 py-3">Hospital</th>
            <th scope="col" className="px-6 py-3">Diagnosis</th>
            <th scope="col" className="px-6 py-3">Prescription</th>
            <th scope="col" className="px-6 py-3">Lab Results</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3 r "><span className="sr-only">Action </span></th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((treatment, index) => (
            <tr
              key={index}
              className="bg-white border-b "
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {treatment.date}
              </th>
              <td className="px-6 py-4 ">{treatment.doctor_name || "N/A"}</td>
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
          ))}
        </tbody>
      </table>
    </div>
</div>
    
   
  );
};

export default TreatmentTable;
