import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const url = import.meta.env.VITE_API_BACKEND_URL;
const AddEducation = ({ setActiveComponent }) => {
  const [formData, setFormData] = useState({
    name: "",
    link:""
  });
  const [formDataVideo, setFormDataVideo] = useState({
    title: "",
    link:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleChangeVideo = (e) => {
    const { name, value } = e.target;
    setFormDataVideo({ ...formDataVideo, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/education/files`, formData);
      if(res.status===200)
      {
        toast.success(res.data.message)
        setActiveComponent("Education")
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitVideo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/education/videos`, formDataVideo);
      if(res.status===200)
      {
        toast.success(res.data.message)
        setActiveComponent("Education")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-xl p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-[#4B0082]">
        Add New FileUrl
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
    
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
       
     


          <div>
            <label className="block text-gray-600">Link</label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="Enter link"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
     

       
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-[#4B0082] text-white px-4 py-2 rounded-md hover:opacity-80 focus:outline-none "
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setActiveComponent("Education")}
            className="text-[#4B0082] bg-white  px-4 py-2 border border-[#4B0082] rounded-md hover:opacity-75 focus:outline-none "
          >
            Cancel
          </button>
        </div>
      </form>
      <h2 className="text-2xl font-semibold mb-4 text-[#4B0082] mt-5">
        Add New Youtube video
      </h2>
      <form onSubmit={handleSubmitVideo} className="space-y-2">
    
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="title"
              value={formDataVideo.title}
              onChange={handleChangeVideo}
              placeholder="Enter name"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
       
     


          <div>
            <label className="block text-gray-600">Link</label>
            <input
              type="text"
              name="link"
              value={formDataVideo.link}
              onChange={handleChangeVideo}
              placeholder="Enter link"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
     

       
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-[#4B0082] text-white px-4 py-2 rounded-md hover:opacity-80 focus:outline-none "
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setActiveComponent("Education")}
            className="text-[#4B0082] bg-white  px-4 py-2 border border-[#4B0082] rounded-md hover:opacity-75 focus:outline-none "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEducation;
