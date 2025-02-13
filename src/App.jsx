import { useState } from 'react';
import './App.css'
import axios from 'axios';
import TicketList from './components/TicketList'
import AttendeeForm from './components/AttendeeForm';
import SuccessScreen from './components/SuccessScreen';
import Header from './components/Header';
import Buttons from './components/Buttons';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ticketType: "Free",
    quantity: 1,
    fullName: "",
    email: "",
    avatar: "",
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});

  const validateStep = () =>{
    let newErrors = {};
    if (step === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email";
      if (!formData.avatar.trim()) newErrors.avatar = "Avatar upload is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1,3));
    }
  };
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1,1));

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("upload_preset", "e_ticket");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/jane126/image/upload", formDataUpload);
      setFormData((prev) => ({ ...prev, avatar: response.data.secure_url }));
    } catch (error) {
      console.error("Upload failed", error);
    }
  };
  const stepDescriptions = {
    1: "Ticket Selection",
    2: "Attendee Details",
    3: "Your Ticket",
  }
  const restartForm = () => setStep(1);

  return (
    <div 
    className='bg-regal-blue flex flex-col items-center  
    w-screen h-screen text-white'>
      <Header/>
      
      <div className='bg-lightregal-blue h-7xl rounded-2xl p-6 border border-stroke'>

      <div className='flex justify-between items-center p-2'>
        <h2 className='text-2xl'>{stepDescriptions[step]}</h2>
        <p className='text-xs'>Step {step} of 3</p>
      </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(step) * 50}%` }}></div> 
        </div>
      
      
        <div className=" rounded-lg p-4 border border-stroke w-full h-6xl p-5">

        {step === 1 && 
        <TicketList  
            formData={formData} 
            handleChange={handleChange} 
            nextStep={nextStep}
        />}
      {step === 2 && (
      <AttendeeForm
          formData={formData}
          handleChange={handleChange}
          handleAvatarUpload={handleAvatarUpload}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStep}
      />
     )}
     {step === 3 && 
     <SuccessScreen
        formData={formData} 
        setStep={setStep}
     />}

    <div className="flex justify-evenly mt-4">

        {step === 1 && (
          <>
            <Buttons label="Cancel" onClick={restartForm} className="bg-transparent text-btn-blue p-2 rounded-md
            border-1 border-solid border-btn-blue w-50 cursor-pointer hover:bg-btn-blue hover:text-white" />
            <Buttons label="Next" onClick={nextStep} className="bg-btn-blue text-white p-2 rounded-md w-50 
            cursor-pointerd hover:bg-transparent hover:text-btn-blue hover:border-btn-blue hover:border-1" />
          </>
        )}

        {step === 2 && (
          <>
            <Buttons label="Back" onClick={prevStep} className="bg-transparent text-btn-blue p-2 rounded-md
            border-1 border-solid border-btn-blue w-50 cursor-pointer" />
            <Buttons label="Get My Ticket" onClick={nextStep} className="bg-btn-blue text-white p-2 rounded-md w-50 cursor-pointer" />
          </>
        )}

        {step === 3 && (
          <>
            <Buttons label="Book Another Ticket" onClick={restartForm} className="bg-transparent text-btn-blue p-2 rounded-md
            border-1 border-solid border-btn-blue w-50 cursor-pointer" />
            <Buttons label="Download My Ticket" onClick={() => console.log("Downloading ticket...")} className="bg-btn-blue text-white p-2 rounded-md w-50 cursor-pointer" />
          </>
        )}
        </div>
      </div>
        </div>
    </div>
  )
}

export default App
