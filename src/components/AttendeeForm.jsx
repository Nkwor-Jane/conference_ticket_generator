import PropTypes from "prop-types";
import { MdOutlineEmail } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";

const AttendeeForm = ({formData, handleChange, handleAvatarUpload, errors, prevStep, nextStep }) => {
  return (
    <div className="p-4 flex flex-col items-start justify-start h-7/10  text-left text-white">

        <div className="p-3 rounded-2xl border border-stroke mb-4 w-md">
        <label>Upload Profile Photo</label>
            <div className=" relative bg-regal-blue w-100 p-2 m-2 h-30 flex items-center justify-center flex-col ">
                <IoCloudDownloadOutline className="absolute w-10 h-10"/>
                <input type="file" onChange={handleAvatarUpload}
                className="py-2 px-2 w-50- h-full rounded-lg text-fade-white 
                hover:border-6 hover:border-btn-blue hover:bg-fade-blue
                border-4 border-stroke mt-2 cursor-pointer placeholder-white mb-2" 
                placeholder="Drag & Drop or click to upload" /><br></br>
                {errors.avatar && <span className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.avatar}</span>}
        
            </div>
        </div>

        <div className="h-1 w-120 bg-stroke rounded"></div>

        <div className="py-1 w-full">
            <label>
            Enter your name  </label><br></br>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
            className="p-2 w-full rounded-lg text-fade-white border border-stroke mt-2 cursor-pointer mb-2" /><br></br>
            {errors.fullName && <span className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.fullName}</span>}
        </div>
       
    
        <div className="py-2 w-full">
            <label >Enter your email*</label><br></br>
            <div className="relative">
            <MdOutlineEmail className="absolute inset-y-6 left-0 mx-2" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} 
            placeholder="hello@avioflagos.io"
            className="py-2 w-full rounded-lg text-fade-white border border-stroke 
            placeholder-white px-8 mt-2 cursor-pointer mb-2"/><br></br>
            {errors.email && <span className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.email}</span>}
            </div>
            
            
        </div>
      
      
        <div className="py-2 w-full">
            <label>Special Request?</label><br></br>
            <textarea name="specialRequest" value={formData.specialRequest} onChange={handleChange} 
            placeholder="Enter a special reuest"
            className="p-2 w-full h-20 rounded-lg text-fade-white border border-stroke 
            placeholder-white mt-2 cursor-pointer"/>
        </div>
      
      
    </div>
  )
}
AttendeeForm.propTypes = {
    formData: PropTypes.any,
    handleChange: PropTypes.any, 
    handleAvatarUpload: PropTypes.any, 
    prevStep: PropTypes.any,
    nextStep: PropTypes.any,
    error: PropTypes.any, 
    avatar:PropTypes.any,
    fullName: PropTypes.any,
    email: PropTypes.any, 
}
export default AttendeeForm