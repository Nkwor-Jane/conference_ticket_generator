import arrow  from "../assets/arrow.svg";
import logo from "../assets/thumb.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center border border-stroke rounded-2xl w-3xl p-2 m-6">
    
    <div className="flex gap-4 ">
    <img src={logo} alt="Logo" /> 
    <p className="text-white text-2xl font-bold stroke-white">ticz</p>
    </div>
    <ul className="flex justify-center gap-10 font-roboto">
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