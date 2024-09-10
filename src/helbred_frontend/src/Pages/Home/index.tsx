import React,{useState, useEffect} from 'react';

let currentYear: number = new Date().getFullYear();


function HomePage() {
  return (
    <div className="bg-amber-100 mmin-h-screen flex flex-col mt-20 sm:mt-10">
  
    {/* Hero Section */}
    <section className="container mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center py-16">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-5xl font-bold text-teal-500 mb-6">
          Manage Your Health, Securt-kely & Privately
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A blockchain-powered platform that allows patients in emerging
          markets to securely store and manage their health records while
          maintaining control over who can access their data.
        </p>
        <button className="bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600">
          Get Started
        </button>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <img
          src="images/undraw_medicine_b-1-ol.svg "
          alt="Health management illustration"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </section>

    {/* Features Section */}
    <section className=" bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-500 mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-center text-teal-500 text-4xl mb-4">
               <img
            className='w-24 h-24 '
            src='images/undraw_secure_login_pdn4.svg'
            ></img>

            </div>
            <h3 className="text-xl font-semibold text-teal-500 mb-2">
              Secure Data
            </h3>
           
            <p className="text-gray-700">
              Your health records are securely encrypted and stored using
              blockchain technology.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="flex justify-center text-teal-500 text-4xl mb-4">
              
              <img
            className='w-24 h-24 '
            src='images/undraw_taking_notes_re_bnaf.svg'
            ></img>
            </div>
            <h3 className="text-xl font-semibold text-teal-500 mb-2">
              Easy Management
            </h3>
            
            <p className="text-gray-700">
              Manage your health data efficiently, anytime, anywhere.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="flex justify-center text-teal-500 text-4xl mb-4">
               <img
            className='w-24 h-24 '
            src='images/undraw_secure_files_re_6vdh.svg'
            ></img>
              </div>
            <h3 className="text-xl font-semibold text-teal-500 mb-2">
              Private Access
            </h3>
           
            <p className="text-gray-700">
              You control who can access your health information.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-amber-100 text-teal-500  py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl bold font-bold mb-6">Get Started Today</h2>
        <p className="text-xl text-gray-700 mb-8">
          Join thousands of patients and healthcare providers using our secure
          health management platform.
        </p>
        <button className="bg-white text-teal-500 py-3 px-6 rounded-lg hover:bg-gray-100">
          Sign Up Now
        </button>
      </div>
    </section>

 
  </div>
  
  )
}

export default HomePage