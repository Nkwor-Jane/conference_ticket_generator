import PropTypes from "prop-types"
import "../App.css";

const TicketList = ({errors, formData, handleChange, nextStep}) => {
    const ticketTypes = [
        {type: "FREE", access:"REGULAR ACCESS", seats: "20/52" },
        {type: "VIP", access:"VIP ACCESS", seats: "20/52" },
        {type: "VVIP", access:"VVIP ACCESS", seats: "20/52" }
    ]
  return (
    <div>        
        <div className=" rounded-lg p-4 flex flex-col items-start justify-start ticketListResp">
            <div className="text-center p-2 rounded-2xl border border-stroke p-3 mb-4 md:w-md w-sm bg-highlight ticketListResp">
                <p className="font-road-rage text-6xl py-2 ">Techember Fest "25</p>
                <p className="text-xs p-1">Join us for an unforgetable experience<br></br> at DevNet! Secure your spot now.</p>
                <p className="text-xs p-1">📍04 Rumens road, Ikoyi, Lagos |  March 15,2025 | 7:00 PM</p>
            </div>
            <div className="h-1 md:w-110 w-95 bg-stroke rounded ticketListResp"></div>
            <div>
                <div className="md:w-full w-sm ">
                    <p className="text-white py-2">Select Ticket Type:</p>
                    <div className="btnListResp grid md:grid-cols-3 sm:grid-cols-1 gap-2 md:w-full w-sm border border-stroke bg-regal-blue p-2 rounded-2xl">
                    {ticketTypes.map(({type, access, seats}) =>(
                            <button
                                key={type}
                                name="ticketType"
                                onClick={(e) => handleChange({target:{name: "ticketType", value: type}})}
                                className={`p-2 text-center md:text-left rounded-2xl hover:bg-fade-blue cursor-pointer w-full md:w-auto btnResp1 ${formData.ticketType === type ?  "bg-stroke border-2 border-btn-blue" : 
                                      "bg-transparent border-btn-blue border-1 "} `}
                            >
                            <strong className="font-extrabold md:font-bold">{type}</strong> <br />
                            <small className="text-sm md:font-xs">{access}</small> <br />
                            <span className="text-sm md:font-xs">{seats}</span>
                            </button>
                        ))}
                    </div>
                    {errors.ticketType && <span 
                        role="alert"
                        aria-live="assertive"
                        className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.ticketType || "error detected"}</span>}
             
                </div>
                <div className="py-3 md:w-full w-sm">
                    <label className="text-white py-2">Number of Tickets</label><br></br>
                        <select name="quantity" value={formData.quantity} onChange={handleChange}
                        className="py-2 px-2 md:w-110 w-95 btnListResp rounded-lg text-fade-white border 
                        border-stroke mt-2" >
                        {[...Array(11).keys()].map((num) => (
                            <option key={num} value={num}>{num}</option>  
                        ))}
                        </select><br></br>
                        {errors.quantity && <span 
                        role="alert"
                        aria-live="assertive"
                        className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.quantity || "error detected"}</span>}
                </div>
            </div>

        </div>
</div>
  )
}

TicketList.propTypes = {
    formData: PropTypes.any,
    handleChange: PropTypes.any, 
    nextStep: PropTypes.any,
    errors: PropTypes.any,
}

export default TicketList