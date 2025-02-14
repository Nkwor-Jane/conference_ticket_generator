import PropTypes from "prop-types";
import { MdOutlineEmail } from "react-icons/md";
import DragDrop from "./DrapDrop";
import { useState, useEffect } from "react";

const AttendeeForm = ({ errors, prevStep, nextStep }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        avatar: "",
        specialRequest: "",
      });
      
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
      }, [formData]);

      const handleChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log("handleChange in AttendeeForm:", handleChange);
      };

    const updateFormData = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
      

  return (
    <div className="p-4 flex flex-col items-start justify-start h-7/10  text-left text-white">

        <div className="p-3 rounded-2xl border border-stroke mb-4 w-md">
            <p>Upload Profile Photo</p>
            <DragDrop handleChange={handleChange}/>
            {errors.avatar && <span 
            role="alert"
            aria-live="assertive"
            className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.avatar}</span>}
        </div>
       

        <div className="h-1 w-120 bg-stroke rounded"></div>

        <div className="py-1 w-full">
            <label htmlFor="full_name">
            Enter your name  </label><br></br>
            <input type="text" name="fullName" id="full_name" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)}
            className="p-2 w-full rounded-lg text-fade-white 
            border border-stroke mt-2 cursor-pointer mb-2 focus-visible:outline-2 " /><br></br>
            {errors.fullName && <span 
            role="alert"
            aria-live="assertive"
            className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.fullName}</span>}
        </div>
       
    
        <div className="py-2 w-full">
            <label  htmlFor="email">Enter your email*</label><br></br>
            <div className="relative">
            <MdOutlineEmail className="absolute inset-y-6 left-0 mx-2" />
            <input type="email" id="email" name="email" value={formData.email || ""} onChange={(e) => handleChange("email", e.target.value)} 
            placeholder="hello@avioflagos.io"
            className="py-2 w-full rounded-lg text-fade-white border border-stroke 
            placeholder-white px-8 mt-2 cursor-pointer mb-2 focus-visible:outline-2 "/><br></br>
            {errors.email && <span 
            role="alert"
            aria-live="assertive"
            className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.email}</span>}
            </div>
            
            
        </div>
      
      
        <div className="py-2 w-full">
            <label htmlFor="specialRequest">Special Request?</label><br></br>
            <textarea name="specialRequest" id="specialRequest" value={formData.specialRequest || ""} onChange={(e) => handleChange("specialRequest", e.target.value)} 
            placeholder="Enter a special reuest"
            className="p-2 w-full h-20 rounded-lg text-fade-white border border-stroke 
            placeholder-white mt-2 cursor-pointer focus-visible:outline-2 "/>
        </div>
      
      
    </div>
  )
}
AttendeeForm.propTypes = {
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func, 
    setFormData: PropTypes.func.isRequired,
    handleAvatarUpload: PropTypes.any, 
    prevStep: PropTypes.any,
    nextStep: PropTypes.any,
    error: PropTypes.object.isRequired, 
    avatar:PropTypes.any,
    fullName: PropTypes.any,
    email: PropTypes.any, 
    errors: PropTypes.object
}
export default AttendeeForm