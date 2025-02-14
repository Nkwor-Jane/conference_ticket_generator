import {Link } from "react-router-dom";
import "../App.css"
//ASSETS
import arrow  from "../assets/arrow.svg";
import logo from "../assets/thumb.png";
import ticz from "../assets/ticz.png"

const Header = () => {
  return (
      <header className="flex justify-between items-center border border-stroke rounded-2xl w-3xl sm:w-lg md:w-xl p-2 m-6 navResp">
          <Link to="/">
            <div className="flex gap-2 ">
            <img src={logo} alt="Logo" /> 
            <img src={ticz} alt="brand name" className="h-8"/>
            </div>
          </Link>
          <ul className="flex justify-center gap-10 font-roboto sm:hidden md:hidden">
              <li className="text-white cursor-pointer">
                <Link to="/">Events</Link></li>
              <li className="text-fade-white hover:text-white">My Tickets</li>
              <li className="text-fade-white hover:text-white">About Project</li>
          </ul>
          <Link to="/ticket-history">
            <div className="flex items-center justify-center gap-2 p-2 rounded-lg cursor-pointer bg-white w-30 h-10 font-roboto">
              <p className="text-black font-extrabold text-sm font-playfair tracking-wide">My Tickets</p>
              <img src={arrow} alt="Arrow" className="w-5 "/> 
            </div>
          </Link>
          
      </header>
  )
}

export default Header