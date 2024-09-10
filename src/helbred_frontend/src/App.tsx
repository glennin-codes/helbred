import { useState } from 'react';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorDashboard from './Pages/DoctorSection';
import Oby from './Pages/DoctorSection/Oby';
import Dashboard from './Pages/mvp';
import UserProfile from './Pages/Patient';
import { patientData } from './Pages/Patient/types';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import PitchDeck from './Components/PitchDeck';
import Roadmap from './Components/Roadmap';
import Whitepaper from './Components/Whitepaper';
import TermsOfService from './Components/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy'
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
      <Header/>
      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/doc" element={<DoctorDashboard />} />
        <Route path="/land" element={<Oby/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/user" element={<UserProfile records={patientData} />} />
        <Route path="/PitchDeck" element={<PitchDeck/>} ></Route>
        <Route path="/Roadmap" element={<Roadmap/>} ></Route>
        <Route path="/Whitepaper" element={<Whitepaper/>} ></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
        <Route path="/TermsOfService" element={<TermsOfService/>} ></Route>
        {/* Add other routes as needed */}
      </Routes>
      <Footer/>
    </div>
  </Router>

  );
}

export default App;
