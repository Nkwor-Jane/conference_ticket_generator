import arrow  from "../assets/arrow.svg";
import logo from "../assets/thumb.png";
import ticz from "../assets/ticz.png"

const Header = () => {
  return (
    <header className="flex justify-between items-center border border-stroke rounded-2xl w-3xl sm:w-lg md:w-xl p-2 m-6">
    
    <div className="flex gap-2 ">
    <img src={logo} alt="Logo" /> 
    <img src={ticz} alt="brand name" className="h-8"/>
    </div>
    <ul className="flex justify-center gap-10 font-roboto sm:hidden md:hidden">
        <li className="text-white cursor-pointer">Events</li>
        <li className="text-fade-white hover:text-white">My Tickets</li>
        <li className="text-fade-white hover:text-white">About Project</li>
    </ul>
    <div className="flex gap-2 p-2 rounded-lg cursor-pointer bg-white w-30 font-roboto">
      <div className="text-black">My Ticket</div>
      <img src={arrow} alt="Arrow" className="w-5 "/>
      
    </div>
    
</header>
  )
}

export default Header