import PropTypes from "prop-types";
import { MdOutlineEmail } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";

const AttendeeForm = ({formData, handleChange, handleAvatarUpload, errors}) => {
    
  return (
    <div className="p-4 flex flex-col items-start justify-start h-7/10  text-left text-white">

        <div className="p-4 mb-4 w-full rounded-2xl border border-stroke">
        <label className="text-left p-2">Upload Profile Photo</label>
        <div className="bg-regal-blue rounded-sm mx-auto mt-4 
            relative flex place-content-center
        ">
            <div className="p-3 w-60 h-50 rounded-4xl text-fade-white 
             bg-btn-blue shadow-lg border-4 border-stroke
            hover:scale-105 hover:shadow-4xl hover:border-8 
            cursor-pointer flex items-center justify-center flex-col"
            onClick={() => document.getElementById("fileInput").click()} >
                <IoCloudDownloadOutline className="absolute w-10 h-10 top-8 text-white"/>
                <div className="p-1 text-center mt-15">
                <p className="text-white text-base ">Drag & drop or click</p>
                <p className="text-base text-white">to upload</p>
                <input 
                autoFocus 
                type="file" 
                id="fileInput"
                aria-describedby="file-instructions"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"/><br></br>
                {errors.avatar && <span 
                role="alert"
                aria-live="assertive"
                className=" text-red-600 w-full font-bold ">{errors.avatar}</span>}
                </div>
                
        
            </div>
            </div>
        </div>

        <div className="h-1 md:w-110 w-95 bg-stroke rounded lineResp"></div>

        <div className="py-1 w-full">
            <label htmlFor="full_name">
            Enter your name  </label><br></br>
            <input  required type="text" id="full_name" name="fullName" value={formData.fullName} onChange={handleChange}
            className="p-2 w-full rounded-lg text-fade-white 
            border border-stroke mt-2 cursor-pointer mb-2 focus-visible:outline-2 " /><br></br>
            {errors.fullName && <span 
            role="alert"
            aria-live="assertive"
            className=" transition delay-150 ease-in-out text-red-500 mt-3 w-full ">{errors.fullName}</span>}
        </div>
       
    
        <div className="py-2 w-full">
            <label htmlFor="email" >Enter your email*</label><br></br>
            <div className="relative">
            <MdOutlineEmail className="absolute inset-y-6 left-0 mx-2" />
            <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} 
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
            <textarea name="specialRequest" id="specialRequest" value={formData.specialRequest} onChange={handleChange} 
            placeholder="Enter a special request"
            className="p-2 w-full h-20 rounded-lg text-fade-white border border-stroke 
            placeholder-white mt-2 cursor-pointer focus-visible:outline-2 "/>
        </div>
      
      
    </div>
  )
}
AttendeeForm.propTypes = {
    formData: PropTypes.any,
    handleChange: PropTypes.any, 
    handleAvatarUpload: PropTypes.any, 
    errors: PropTypes.any,
}
export default AttendeeForm