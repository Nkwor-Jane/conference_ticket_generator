import PropTypes from "prop-types"
const SuccessScreen = ({formData, setStep}) => {
  return (
    <div className=" p-4 flex flex-col items-center justify-center h-7/10">
        <div className="text-center py-2">
            <h2 className="pb-1 font-extrabold text-2xl">Your Ticket is Booked</h2>
            <p>Check your email for a copy or you can <span className="font-bold">download</span></p>
        </div>
        
        <div className="">
        <div className="flex flex-col items-center 
        justify-center p-2 rounded-2xl border border-stroke mb-4 w-md">
        <div className="text-center">
            <p className="font-road-rage text-6xl py-2">Techember Fest "25</p>
            <p className="font-roboto pb-2 ">📍04 Rumens road, Ikoyi, Lagos<br></br> 📅 March 15,2025 | 7:00 PM</p>
        </div>
        
        <div>
        <img src={formData.avatar} alt="Avatar" className="rounded-lg w-50 h-50 border-4 border-btn-blue" />
        </div>
        <div className="border grid grid-cols-2
        border-stroke p-2 rounded-2xl bg-lightregal-blue m-2 divide-stroke">
            <div className="border-b-2 p-2">
                <p className="text-fade-white py-2">Full Name:</p>
                <p className="text-white font-extrabold tracking-wide"> {formData.fullName}</p>
            </div>
           <div className="border-b-2">
            <p className="text-fade-white py-2">Email:</p>
            <p className="text-white font-bold">{formData.email}</p>
           </div>
            <div className="border-b-2">
                <p className="text-fade-white py-2">Ticket Type:</p>
                <p className="text-white font-extrabold tracking-wide">{formData.ticketType}</p>
            </div>
            <div className="border-b-2">
                <p className="text-fade-white py-2">Ticket for:</p>
                <p className="text-white font-extrabold tracking-wide">{formData.quantity}</p>
            </div>
            <div className="col-span-2">
                <p className="text-fade-white py-2">Special Request:</p>
                <p className="text-white font-extrabold tracking-wide"> {formData.specialRequest || "Nil ? Or the users sad story they write in there gets this whole space, Max of three rows"}</p>
            </div>
        </div>
        
        </div >
        <div className="border-t-2 border-dashed p-4">

        </div>
        </div>
        
    </div>
  )
}

SuccessScreen.propTypes = {
    formData: PropTypes.any, 
    setStep: PropTypes.any, 
}

export default SuccessScreen