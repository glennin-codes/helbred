import React,{useState, useEffect} from 'react';

let currentYear: number = new Date().getFullYear();


function HomePage() {
  return (
    <div className="bg-amber-100 min-h-screen flex flex-col">
    {/* Header */}
  <header className="bg-teal-500 text-white  shadow-lg">
  <nav className="container flex items-center justify-between mx-auto w-full md:w-auto">
    <div className="flex items-center space-x-4">
      <a href="/" className="flex items-center space-x-2">
        <img 
          src="images/icon.png" 
          alt="Icon" 
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full  object-cover max-w-full"
        />
        <span className="text-2xl font-bold">HelBred</span>
      </a>
    </div>
    <div>
      <button className="bg-white text-teal-500 py-2 px-4 rounded hover:bg-gray-100">
        Login
      </button>
      <button className="ml-4 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700">
        Sign Up
      </button>
    </div>
  </nav>
</header>


    {/* Hero Section */}
    <section className="container mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center py-16">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-5xl font-bold text-teal-500 mb-6">
          Manage Your Health, Securely & Privately
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
    <section className="bg-gray-50 py-16">
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

    {/* Footer */}
    <footer className="flex  bg-teal-500 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* <!-- Logo and Site Information --> */}
      <div className="mb-4 md:mb-0">
        <a href="/" className="text-2xl font-bold tracking-wide text-amber-100 hover:text-amber-200">
          KYCID
        </a>
        <p className="text-sm mt-2">
          Your trusted KYC solution built with cutting-edge blockchain technology.
        </p>
      </div>

      {/* <!-- Navigation Links --> */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
        <a href="/terms" className="text-sm text-amber-100 hover:text-amber-200">Terms of Service</a>
        <a href="/privacy" className="text-sm text-amber-100 hover:text-amber-200">Privacy Policy</a>
        <a href="/contact" className="text-sm text-amber-100 hover:text-amber-200">Contact Us</a>
        <a href="/license" className="text-sm text-amber-100 hover:text-amber-200">License</a>
      </div>

      {/* <!-- Documentation Links --> */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
        <a href="/documentation" className="text-sm text-amber-100 hover:text-amber-200">Documentation</a>
        <a href="/whitepaper" className="text-sm text-amber-100 hover:text-amber-200">White Paper</a>
        <a href="/pitchdeck" className="text-sm text-amber-100 hover:text-amber-200">Pitch Deck</a>
        <a href="/roadmap" className="text-sm text-amber-100 hover:text-amber-200">Road Map</a>
      </div>
      

      {/* <!-- Social Media Links --> */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-amber-100 hover:text-amber-200">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 4.557a9.993 9.993 0 01-2.828.775A4.932 4.932 0 0023.338 3a9.865 9.865 0 01-3.127 1.195 4.923 4.923 0 00-8.38 4.482A13.966 13.966 0 011.671 3.149a4.923 4.923 0 001.524 6.573 4.896 4.896 0 01-2.228-.616c-.054 2.283 1.579 4.415 3.925 4.89a4.897 4.897 0 01-2.224.084c.626 1.956 2.444 3.379 4.6 3.419A9.878 9.878 0 010 19.54a13.939 13.939 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.424 0-.22-.005-.437-.014-.653A10.224 10.224 0 0024 4.557z" />
          </svg>
        </a>
        <a href="https://linkedin.com/company/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-amber-100 hover:text-amber-200">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.792 0 0 .772 0 1.725v20.55C0 23.228.792 24 1.77 24h20.46C23.208 24 24 23.228 24 22.275V1.725C24 .772 23.208 0 22.23 0zM7.073 20.452H3.692V9h3.381v11.452zM5.383 7.553c-1.078 0-1.95-.877-1.95-1.958 0-1.082.872-1.959 1.95-1.959 1.075 0 1.948.877 1.948 1.959 0 1.081-.873 1.958-1.948 1.958zM20.452 20.452h-3.378V14.9c0-1.328-.026-3.036-1.848-3.036-1.848 0-2.131 1.444-2.131 2.938v5.649H9.714V9h3.241v1.562h.045c.451-.855 1.55-1.756 3.188-1.756 3.409 0 4.038 2.244 4.038 5.162v6.484z" />
          </svg>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-amber-100 hover:text-amber-200">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.304 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.302 3.492.996.108-.775.418-1.302.762-1.602-2.665-.305-5.466-1.337-5.466-5.948 0-1.314.47-2.387 1.24-3.23-.124-.304-.537-1.527.118-3.181 0 0 1.01-.323 3.3 1.233a11.52 11.52 0 013.007-.404c1.02.004 2.048.137 3.007.404 2.29-1.556 3.3-1.233 3.3-1.233.656 1.654.244 2.877.12 3.181.77.843 1.24 1.916 1.24 3.23 0 4.62-2.803 5.64-5.473 5.938.43.371.824 1.104.824 2.228 0 1.609-.014 2.908-.014 3.302 0 .32.218.694.824.577C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
    </div>

    

    <div className="mt-8 text-center text-sm">
      <p>&copy; {currentYear} KYCID. All rights reserved.</p>
    </div>
  </div>
</footer>
  </div>
  
  )
}

export default HomePage