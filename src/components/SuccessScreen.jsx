import { useRef } from "react";
import PropTypes from "prop-types"

import "../App.css";


const SuccessScreen = ({formData}) => {
    const barcodeRef = useRef(null);

  return (
<div className=" p-2 flex flex-col items-center justify-center h-7/10">
        <div className="text-center py-2 mb-4">
            <h2 className="pb-1 font-extrabold text-2xl font-playfair tracking-wider">Your Ticket is Booked</h2>
            <p>Check your email for a copy or you can <span className="font-bold">download</span></p>
        </div>
    
    <div id="ticket-preview" className="ticketResp">
        <div className="flex flex-col items-center border-4 rounded-2xl
            justify-center p-10 border-stroke mb-4 w-105 bg-regal-blue border-b-4 border-b-dashed scooped-corners ">
            <div className="border-4 rounded-2xl border-fade-blue bg-transparent p-2">
                <div className="text-center">
                    <p className="font-road-rage text-6xl py-2">Techember Fest "25</p>
                    <p className="font-roboto pb-2 ">📍04 Rumens road, Ikoyi, Lagos<br></br> 📅 March 15,2025 | 7:00 PM</p>
                </div>
                <div className="m-2 mb-4 flex justify-center ">
                    <img src={formData.avatar} alt="Avatar" className="rounded-lg w-40 h-40 border-4 border-btn-blue" />
                </div>
           
            <div className="border grid grid-cols-2
                border-stroke border-2 opacity-75 p-4 rounded-2xl bg-lightregal-blue m-2 divide-stroke detsResp">
                <div className="border-b-2 p-2 border-r">
                    <p className="text-fade-white py-2">Full Name:</p>
                    <p className="text-white font-light tracking-wide"> {formData.fullName}</p>
                </div>
                <div className="border-b-2 p-2 ">
                    <p className="text-fade-white p-2">Email:</p>
                    <p className="text-white font-light px-2">{formData.email}</p>
                </div>
                <div className="border-b-2 border-r">
                    <p className="text-fade-white py-2">Ticket Type:</p>
                    <p className="text-white font-medium tracking-wide">{formData.ticketType}</p>
                </div>
                <div className="border-b-2">
                    <p className="text-fade-white p-2">Ticket for:</p>
                    <p className="text-white font-mediul tracking-wide px-2">{formData.quantity}</p>
                </div>
                <div className="col-span-2 p-2">
                    <p className="text-fade-white py-2">Special Request:</p>
                    <p className="text-white font-medium tracking-wide"> {formData.specialRequest || "Nil ? Or the users sad story they write in there gets this whole space, Max of three rows"}</p>
                </div>
            </div>
        </div> 
        </div>
        <div className="w-full my-4">
                <div className="scooped-corners border-t-4 
                flex items-center justify-center w-full bg-fade-blue border-top-dashed">
                    <svg id="barcode" ref={barcodeRef}></svg>
                </div>
        </div>
    </div>
    
</div>
  )
}

SuccessScreen.propTypes = {
    formData: PropTypes.any, 
    setStep: PropTypes.any, 
    serialNumber:  PropTypes.any,
    downloadTicket:PropTypes.func,
}

export default SuccessScreen