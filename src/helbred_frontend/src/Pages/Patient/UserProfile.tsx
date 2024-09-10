import React, { useState } from "react";
import { createActor, helbred_backend } from "../../../../declarations/helbred_backend";
import { toast } from "react-toastify";

export const UserProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    PersonalInfo: {
      name: "",
      dob: "", // This will be treated as Option<String> in Rust
      location: "",
      public_key: "",
      email: "",
    },
  });

  const [loading, setIsloading] = useState(false);
  let actor = helbred_backend;
  actor = createActor("bkyz2-fmaaa-aaaaa-qaaaq-cai", {});

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      PersonalInfo: {
        ...prevData.PersonalInfo,
        [name]: value, // Convert empty strings to null for optional fields
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);

    const personalInfo = {
      name: formData.PersonalInfo.name,
      dob: formData.PersonalInfo.dob,
      location: formData.PersonalInfo.location,
      public_key: formData.PersonalInfo.public_key,
      email: formData.PersonalInfo.email,
    };

    try {
      let response: any = await actor.insert_initial_health_record(personalInfo);
      console.log(response);
      
      if (response === "Application was saved succesfully") {
        toast.success(`Application sent successfully. We will be in touch`);
      } else {
        toast.error(`Application not successful, check again later`);
      }
    } catch (error:any) {
      toast.error(`An error occurred while submitting: ${error.message}`);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="text-2xl font-semibold mb-8 text-center">User Information</h2>

      <form onSubmit={handleSubmit} className="space-y-6 text-gray-400">
        {/* Personal Information Inputs */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              className="mt-1 p-3 block w-full rounded-md text-gray-400 border border-gray-700"
              value={formData.PersonalInfo.name}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Date of Birth</span>
            <input
              type="date"
              name="dob"
              className="mt-1 p-3 block w-full rounded-md text-gray-400 border border-gray-700"
              value={formData.PersonalInfo.dob}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Location</span>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="mt-1 p-3 block w-full rounded-md text-gray-400 border border-gray-700"
              value={formData.PersonalInfo.location}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Public Key</span>
            <input
              type="text"
              name="public_key"
              placeholder="Enter public key"
              className="mt-1 p-3 block w-full rounded-md text-gray-400 border border-gray-700"
              value={formData.PersonalInfo.public_key}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="mt-1 p-3 block w-full rounded-md text-gray-400 border border-gray-700"
              value={formData.PersonalInfo.email}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-600 text-gray-400 font-semibold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
