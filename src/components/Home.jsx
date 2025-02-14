import { useState, useEffect } from 'react';
import "../App.css"
//INSTALLS
import axios from 'axios';
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import JsBarcode from 'jsbarcode';
//COMPONENTS
import TicketList from './TicketList'
import AttendeeForm2 from './AttendeeForm2';
import SuccessScreen from './SuccessScreen';
import Buttons from './Buttons';

const Home = () => {
    const getSavedData = () => {
        try {
          return JSON.parse(localStorage.getItem("conferenceFormData")) || {
            ticketType: "",
            quantity: 0,
            fullName: "",
            email: "",
            avatar: "",
            specialRequest: "",
          };
        } catch (error) {
          console.error("Error reading form data:", error);
          return {};
        }
      };
    
      const getSavedStep = () => {
        const savedStep = localStorage.getItem("conferenceStep");
        return savedStep ? Number(savedStep) : 1;
      };
    
      const [formData, setFormData] = useState(getSavedData);
      const [step, setStep] = useState(getSavedStep);
      const [errors, setErrors] = useState({});
      const [serialNumber, setSerialNumber] = useState(null);
    
      useEffect(() => {
        localStorage.setItem("conferenceFormData", JSON.stringify(formData));
        localStorage.setItem("conferenceStep", step);
      }, [formData, step]);
    
      const validateStep = () =>{
        let newErrors = {};
        if (step === 1) {
          if (!formData.ticketType) newErrors.ticketType = "Please select a ticket type";
          if (!formData.quantity || formData.quantity < 1) newErrors.quantity = "Please select at least one ticket";
        }
        if (step === 2) {
          if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
          if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email";
          if (!formData.avatar.trim()) newErrors.avatar = "Avatar upload is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const nextStep = () => {
        if (validateStep()){
          setStep((prev) => (prev + 1));
        }
      };
      const prevStep = () => {
        setStep((prev) => prev - 1);
    
      };
    
      const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
      }));
    
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    };
      const handleAvatarUpload = async (e) => {
        const file = e.target.files[0];
        
        if (!file) {
          console.error("No file selected");
          return;
        }
        const formDataUpload = new FormData();
        formDataUpload.append("file", file);
        formDataUpload.append("upload_preset", "e_ticket");
        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/jane126/image/upload", formDataUpload);
          if (response.data.secure_url) {
            setFormData((prev) => ({
                ...prev,
                avatar: response.data.secure_url,
            }));
            console.log("Avatar updated successfully!");
          } else {
              console.error("Upload failed: No secure_url received");
          }
        } catch (error) {
          console.error("Upload failed", error);
        }
      };
      const stepDescriptions = {
        1: "Ticket Selection",
        2: "Attendee Details",
        3: "Ready",
      }
      const restartForm = () => {
        localStorage.removeItem("conferenceFormData");
        localStorage.removeItem("conferenceStep"); 
        setFormData({
          ticketType: "",
          quantity: 0,
          fullName: "",
          email: "",
          avatar: "",
          specialRequest: "",
        });
        setErrors({})
        setStep(1);
      };
    
      const downloadTicket = async () => {
        const ticketElem = document.getElementById("ticket-preview");
    
        if (!ticketElem) {
            console.error("Ticket element not found");
            return;
        }
    
        try {
            const canvas = await html2canvas(ticketElem, {
                scale: 2,
                useCORS: true,
            });
    
            const ticketImage = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 100;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
            pdf.addImage(ticketImage, "PNG", 10, 10, imgWidth, imgHeight);
            pdf.save("TechemberFest_Ticket.pdf");
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };
    
    const generateTicket = () => {
        const newSerial = Math.floor(1000000000 + Math.random() * 9000000000).toString();
        setSerialNumber(newSerial);
    
        // Get existing tickets from localStorage
        const existingTickets = JSON.parse(localStorage.getItem("ticketHistory")) || [];

        // Create a new ticket object
        const newTicket = {
            serialNumber: newSerial,
            ...formData, // Include ticket details
        };

        // Save updated tickets to localStorage
        localStorage.setItem("ticketHistory", JSON.stringify([...existingTickets, newTicket]));

        setTimeout(() => {
            const barcodeElement = document.getElementById("barcode");
            if (barcodeElement) {
                JsBarcode(barcodeElement, newSerial, {
                    format: "CODE128",
                    displayValue: true,
                    lineColor: "#000",
                    width: 3,
                    height: 50,
                });
            }
        }, 100);
    
        setStep(3);
    };
    
  return (
    <div>
        <div className='overflow-hidden bg-lightregal-blue h-7xl rounded-2xl p-6 border border-stroke sm:w-lg md:w-xl bg-resp '>

        <div className='block md:flex md:gap-2 justify-between items-center p-2'>
        <h2 className='text-3xl md:mb-3 font-playfair tracking-wider'>{stepDescriptions[step]}</h2>
        <p className='text-xs'>Step {step} of 3</p>
        </div>
        <div className="progress-bar">
            <div className="progress" style={{ width: `${(step) * 50}%` }}></div> 
        </div>

        <div className=" rounded-lg p-4 border border-stroke w-full h-6xl p-5 ">

        {step === 1 && (
          <TicketList  
            formData={formData} 
            handleChange={handleChange} 
            errors={errors}
            nextStep={nextStep}
        />
        )}
      {step === 2 && (
      <AttendeeForm2
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
        serialNumber={serialNumber}
        downloadTicket={downloadTicket}
     />}

    <div className=" flex sm:flex-col mt-2 md:flex-row gap-4 ml-4 btnDiv">
        {step === 1 && (
          <>
            <Buttons label="Cancel" onClick={restartForm} aria-label="Go back to ticket selection page"
            className="bg-transparent text-btn-blue p-2 rounded-md
            border-1 border-solid border-btn-blue w-95 md:w-52 cursor-pointer hover:border-2 hover:bg-fade-blue focus-visible:outline-2 btnResp" />
            <Buttons label="Next" onClick={nextStep} aria-label="Go to next step"
            className="bg-btn-blue text-white p-2 rounded-md w-95 md:w-52
            cursor-pointerd  hover:border-btn-blue hover:opacity-75 hover:border-solid focus-visible:outline-2  btnResp" />
          </>
        )}
        {step === 2 && (
          <> 
            <Buttons label="Back" aria-label="Go to previous step"
            onClick={prevStep} className="bg-transparent text-btn-blue p-2 rounded-md
            border-1 border-solid border-btn-blue w-95 md:w-52 cursor-pointer hover:border-2 hover:bg-fade-blue focus-visible:outline-2 btnResp " />
            <Buttons label="Get My Ticket" aria-label="Get my ticket"
            onClick={generateTicket} className="bg-btn-blue text-white p-2 rounded-md w-95 md:w-56
            cursor-pointerd  hover:border-btn-blue hover:opacity-75 hover:border-solid focus-visible:outline-2 btnResp" />
          </>
        )}

        {step === 3 && (
          <>
            <Buttons label="Book Another Ticket" aria-label="Go back to ticket selection page"
            onClick={restartForm} className="bg-transparent text-btn-blue p-2 rounded-md
            border-1 border-solid border-btn-blue w-95 md:w-52 cursor-pointer hover:border-2 hover:bg-fade-blue focus-visible:outline-2 btnResp " />
            <Buttons label="Download My Ticket" aria-label="Download  my ticket"
            onClick={downloadTicket} className="bg-btn-blue text-white p-2 rounded-md w-95 md:w-52
            cursor-pointerd  hover:border-btn-blue hover:opacity-75 hover:border-solid focus-visible:outline-2  btnResp" />
          </>
        )}
        </div>
      </div>
        </div>

    </div>
  )
}

export default Home