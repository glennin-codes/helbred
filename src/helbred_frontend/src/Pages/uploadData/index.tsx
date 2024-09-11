import { ChangeEvent, useState } from "react";
import { createActor, helbred_backend } from '../../../../declarations/helbred_backend';

export default function UploadData() {
  const [formData, setFormData] = useState([
    {
      date: "",
      doctor_name: "",
      hospital: "",
      diagnosis: "",
      prescription: "",
      lab_results: "",
      email: "",
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

  let actor = helbred_backend;
  actor = createActor("bkyz2-fmaaa-aaaaa-qaaaq-cai", {});

  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index] = {
      ...updatedFormData[index],
      [name]: value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true); // Indicate submission has started

    try {
      // Assuming the formData only contains one record to submit
      const { email  ,doctor_name, hospital, diagnosis, prescription, lab_results, date } = formData[0];

      // Create new medical data object based on Treatment structure
      const newMedicalData:any = {
        doctor_name,
        hospital,
        diagnosis,
        prescription,
        lab_results,
        date,
        email
      };
console.log(email)
      // Call canister function to update medical data
      await actor.update_medical_data(email, newMedicalData);

      alert("Medical data updated successfully!");
    } catch (error) {
      console.error("Error updating medical data:", error);
      alert("Failed to update medical data.");
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <div className="text-gray-500 h-screen w-full p-6">
      <h3 className="text-lg font-semibold mb-4">Medical Information</h3>
      {formData.map((data, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block">
            <span>Date of Visit</span>
            <input
              type="date"
              name="date"
              className="border border-emerald-800  p-3 w-full mt-1"
              value={data.date}
              onChange={(e) => handleInputChange(index, e)}
            />
          </label>
          <label className="block">
            <span> Email pass for test</span>
            <input
              type="email"
              name="email"
              className="border border-emerald-800  p-3 w-full mt-1"
              value={data.email}
              onChange={(e) => handleInputChange(index, e)}
            />
          </label>
          <label className="block">
            <span>Doctor Name</span>
            <input
              type="text"
              name="doctor_name"
              className="border border-emerald-800  p-3 w-full mt-1"
              value={data.doctor_name}
              onChange={(e) => handleInputChange(index, e)}
            />
          </label>

          <label className="block">
            <span>Hospital</span>
            <input
              type="text"
              name="hospital"
              className="border border-emerald-800  p-3 w-full mt-1"
              value={data.hospital}
              onChange={(e) => handleInputChange(index, e)}
            />
          </label>

          <label className="block">
            <span>Diagnosis</span>
            <input
              type="text"
              name="diagnosis"
              className="border border-emerald-800  p-3 w-full mt-1"
              value={data.diagnosis}
              onChange={(e) => handleInputChange(index, e)}
            />
          </label>

          <label className="block">
            <span>Prescription</span>
            <textarea
              name="prescription"
              className="border border-emerald-800  p-3 w-full mt-1"
              value={data.prescription}
              onChange={(e) => handleInputChange(index, e)}
            />
          </label>

          <label className="block">
            <span>Lab Results</span>
            <textarea
              name="lab_results"
              className="border border-emerald-800  p-3 w-full mt-1"
              value={data.lab_results}
              onChange={(e) => handleInputChange(index, e)}
            />
          </label>

        
        </div>
      ))}

      {/* Submission Button */}
      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="bg-emerald-800 text-white py-2 px-4 rounded hover:bg-emerald-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Medical Data"}
        </button>
      </div>
    </div>
  );
}
