import { useRef, useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import axios from "axios";

const DragDrop = ({ handleChange }) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      await handleAvatarUpload(file);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await handleAvatarUpload(file);
    }
  };

  const handleAvatarUpload = async (file) => {
    if (!file) {
      console.error("No file selected");
      return;
    }
    console.log("handleChange in DragDrop:", handleChange);


    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("upload_preset", "e_ticket");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/jane126/image/upload",
        formDataUpload
      );

      if (typeof handleChange === "function") {
        handleChange("avatar", response.data.secure_url);
        console.log("handleChange in DragDrop:", handleChange);
      }else {
        console.error("❌ handleChange is NOT a function. Check props in DragDrop.");
    }
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="relative bg-regal-blue w-100 p-2 m-2 flex items-center justify-center flex-col">
      <div
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`shadow py-2 px-2 w-60 h-50 rounded-4xl text-fade-white 
          hover:border-6 bg-btn-blue hover:bg-fade-blue shadow-lg transition-transform 
          duration-300 hover:-translate-y-2 hover:shadow-2xl border-4 border-stroke mt-6 
          cursor-pointer placeholder-white mb-2 flex items-center justify-center flex-col
          ${dragging ? "border-blue-500 bg-blue-900/10" : ""}`}
      >
        <IoCloudDownloadOutline className="w-10 h-10 text-white" />
        <div className="p-6 text-center">
          <p className="text-white text-lg mt-4">Drag & drop or click</p>
          <p className="text-lg text-white">to upload</p>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          autoFocus 
          aria-describedby="file-instructions"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default DragDrop;
