import React from 'react'
function HomePage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-teal-500 text-white p-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">helbred</div>
        <div>
          <button className="bg-white text-teal-500 py-2 px-4 rounded hover:bg-gray-100">
            ConnectWallet
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
          src="https://via.placeholder.com/500"
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
            <div className="text-teal-500 text-4xl mb-4">🔒</div>
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
            <div className="text-teal-500 text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-teal-500 mb-2">
              Easy Management
            </h3>
            <p className="text-gray-700">
              Manage your health data efficiently, anytime, anywhere.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="text-teal-500 text-4xl mb-4">🔑</div>
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
    <section className="bg-teal-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
        <p className="text-xl mb-8">
          Join thousands of patients and healthcare providers using our secure
          health management platform.
        </p>
        <button className="bg-white text-teal-500 py-3 px-6 rounded-lg hover:bg-gray-100">
          Sign Up Now
        </button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto text-center text-gray-700">
        <p>© 2024 Health Management Platform. All rights reserved.</p>
      </div>
    </footer>
  </div>
  
  )
}

export default HomePage