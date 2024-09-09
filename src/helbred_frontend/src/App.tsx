import { useState } from 'react';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorDashboard from './Pages/DoctorSection';
import Oby from './Pages/DoctorSection/Oby';
import Dashboard from './Pages/mvp';
import UserProfile from './Pages/Patient';
import { patientData } from './Pages/Patient/types';
function App() {
  const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   helbred_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <Router>
    <div className="min-h-screen bg-gray-50">
      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/doc" element={<DoctorDashboard />} />
        <Route path="/land" element={<Oby/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/user" element={<UserProfile records={patientData} />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  </Router>

  );
}

export default App;
