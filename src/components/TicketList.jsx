import PropTypes from "prop-types"
import "../App.css";
import Buttions from "./Buttons";

const TicketList = ({formData, handleChange, nextStep}) => {
    const ticketTypes = [
        {type: "FREE", access:"REGULAR ACCESS", seats: "20/52" },
        {type: "VIP", access:"VIP ACCESS", seats: "20/52" },
        {type: "VVIP", access:"VVIP ACCESS", seats: "20/52" }
    ]
  return (
    <div>        
        <div className=" rounded-lg p-4 flex flex-col items-center justify-center ">
            <div className="text-center p-2 rounded-2xl border border-stroke p-3 mb-4 w-md bg-highlight">
                <p className="font-road-rage text-6xl py-2 ">Techember Fest "25</p>
                <p className="text-xs p-1">Join us for an unforgetable experience<br></br> at DevNet! Secure your spot now.</p>
                <p className="text-xs p-1">📍04 Rumens road, Ikoyi, Lagos |  March 15,2025 | 7:00 PM</p>
            </div>
            <div className="h-1 w-110 bg-stroke rounded"></div>
            <div>
                <div>
                    <p className="text-white py-2">Select Ticket Type:</p>
                    <div className="flex gap-4 w-100 border border-stroke bg-regal-blue p-3 rounded-2xl">
                    {ticketTypes.map(({type, access, seats}) =>(
                            <button
                                key={type}
                                onClick={() => handleChange({target:{name:"ticketType", value: type}})}
                                className={formData.ticketType === type ? "bg-fade-blue p-2 rounded-2xl": "bg-transparent p-2 rounded-2xl border-btn-blue border-1 flex-1 text-left"}
                            >
                            <strong className="font-bold">{type}</strong> <br />
                            <small className="text-xs">{access}</small> <br />
                            <span className="text-xs">{seats}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="py-3">
                    <label className="text-white py-2">
                        Number of Tickets</label><br></br>
                        <select name="quantity" value={formData.quantity} onChange={handleChange}
                        className="py-2 px-2 w-100 rounded-lg text-fade-white border border-stroke mt-2" >
                        {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1} >{num + 1}</option>
                        ))}
                        </select>
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
}

export default TicketList