import { ChangeEvent, useState } from "react";
import { createActor , helbred_backend} from '../../../../declarations/helbred_backend';




export default function UploadData() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      dob: "",
      location: "",
      public_key: "",
      email: "",
    },
    treatments: [
      {
        date: "",
        doctor_name: "",
        hospital: "",
        diagnosis: "",
        prescription: "",
        lab_results: "",
        email: "",
      },
    ],
    
  });
  let actor = helbred_backend;
  // const agent: any = new HttpAgent();
  //backend canister name
  actor = createActor("bkyz2-fmaaa-aaaaa-qaaaq-cai", {
   
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleTreatmentChange = (index: number, e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedTreatments = [...formData.treatments];
    updatedTreatments[index] = {
      ...updatedTreatments[index],
      [name]: value,
    };
    setFormData((prevData) => ({
      ...prevData,
      treatments: updatedTreatments,
    }));
  };

  return (
    <div className="text-white mx-12 h-screen w-full mt-20">
      <h2 className="text-xl font-semibold mb-6">Project details</h2>

      <form>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {/* Personal Information */}
          <label className="block">
            Name
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="border border-emerald-800 p-4 w-full"
              value={formData.personalInfo.name}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            Date of Birth
            <input
              type="date"
              name="dob"
              className="border border-emerald-800 p-4 w-full"
              value={formData.personalInfo.dob}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            Location
            <input
              type="text"
              placeholder="Location"
              name="location"
              className="border border-emerald-800 p-4 w-full"
              value={formData.personalInfo.location}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            Public Key
            <input
              type="text"
              placeholder="Public Key"
              name="public_key"
              className="border border-emerald-800 p-4 w-full"
              value={formData.personalInfo.public_key}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            Email
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="border border-emerald-800 p-4 w-full"
              value={formData.personalInfo.email}
              onChange={handleChange}
            />
          </label>

          {/* Treatment Information */}
          <h3 className="col-span-3 text-lg font-semibold">Treatment</h3>
          {formData.treatments.map((treatment, index) => (
            <div key={index} className="grid md:grid-cols-3 grid-cols-1 gap-6">
              <label className="block">
                Date of Treatment
                <input
                  type="date"
                  name="date"
                  className="border border-emerald-800 p-4 w-full"
                  value={treatment.date}
                  onChange={(e) => handleTreatmentChange(index, e)}
                />
              </label>

              <label className="block">
                Doctor Name
                <input
                  type="text"
                  name="doctor_name"
                  className="border border-emerald-800 p-4 w-full"
                  value={treatment.doctor_name}
                  onChange={(e) => handleTreatmentChange(index, e)}
                />
              </label>

              <label className="block">
                Hospital
                <input
                  type="text"
                  name="hospital"
                  className="border border-emerald-800 p-4 w-full"
                  value={treatment.hospital}
                  onChange={(e) => handleTreatmentChange(index, e)}
                />
              </label>

              <label className="block">
                Diagnosis
                <input
                  type="text"
                  name="diagnosis"
                  className="border border-emerald-800 p-4 w-full"
                  value={treatment.diagnosis}
                  onChange={(e) => handleTreatmentChange(index, e)}
                />
              </label>

              <label className="block">
                Prescription
                <textarea
                  name="prescription"
                  className="border border-emerald-800 p-2 w-full"
                  value={treatment.prescription}
                  onChange={(e) => handleTreatmentChange(index, e)}
                />
              </label>

              <label className="block">
                Lab Results
                <textarea
                  name="lab_results"
                  className="border border-emerald-800 p-2 w-full"
                  value={treatment.lab_results}
                  onChange={(e) => handleTreatmentChange(index, e)}
                />
              </label>

              <label className="block">
                Email
                <input
                  type="email"
                  name="email"
                  className="border border-emerald-800 p-4 w-full"
                  value={treatment.email}
                  onChange={(e) => handleTreatmentChange(index, e)}
                />
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
