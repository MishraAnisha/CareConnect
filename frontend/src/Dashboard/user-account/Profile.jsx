import { useState } from 'react';
import avatar from "../../assets/images/doctor-img02.png";
import { useNavigate} from "react-router-dom";
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
import {BASE_URL,token} from "../../../config.js";
import {toast} from "react-toastify";
import HashLoader from 'react-spinners/HashLoader'
const Profile=({userData})=>{
  const [selectedFile, setSelectedFile] = useState(null);
 
  const[loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType:"",
  });
  const navigate=useNavigate()
 useEffect(()=>{
  setFormData({name:user.name,email:user.email,photo:user.photo,gender:user.gender,bloodType:user.bloodType});
 },[user])  
 const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const isValidFile = /\.(jpg|jpeg|png)$/i.test(file.name); // Validate file type
      if (!isValidFile) {
        alert("Please upload a valid image file (.jpg or .png).");
        return;
      }
      
    }
    const data= await uploadImageToCloudinary(file);
    setSelectedFile(data.url)
    setFormData({... formData,photo:data.url})
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true)
    try{
    const res=await fetch(`${BASE_URL}/users/${user._id}`,{
      method:"put",
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${token}`
      },
      body:JSON.stringify(formData),
    });
    const response=await res.json()
    if(!res.ok){
      throw new Error(Response.message)
    }
    setLoading(false);
    toast.success(response.message);
    navigate("/users/profile/me");
    }catch(err){
toast.error(err.message )
setLoading(false)
    }
    console.log("Form submitted", formData);
    // Add actual API call or form handling logic
  };

return( 
<div className="mt-10">
<form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textcolor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textcolor cursor-pointer"
                  aria-readonly
                  readOnly
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textcolor cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Blood Type"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textcolor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
<label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textcolor font-semibold text-[15px] leading-7 px-4 py-3
                    focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {formData.photo && (
                <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                flex items-center justify-center"
                >
                  <img src={formData.photo || avatar} alt="Preview" className="w-full rounded-full" />
                </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex
                    items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor
                    font-semibold rounded-lg truncate cursor-pointer"
                  >
                    {selectedFile ? selectedFile.name :'Upload Photo'}
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  { loading ? <HashLoader size={25} color="#ffffff"/> : 'Update'}
                </button>
              </div>
            </form>
</div>
);
};
export default Profile;
