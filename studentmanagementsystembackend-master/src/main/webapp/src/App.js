
import './App.css';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Patient from './components/Patient';
import PatientList from './components/PatientList';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Patient/>} />
        <Route path="patientlist" element={<PatientList/>} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
