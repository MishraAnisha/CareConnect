import React from 'react';
import icon01 from '../assets/images/icon01.png';
import {Link} from 'react-router-dom';
import {BsArrowRight } from 'react-icons/bs'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import About from '../components/About/about';
import ServiceList from '../components/Services/ServiceList';
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import DoctorList from '../components/Doctors/DoctorList';


const Home = () => {
  return ( 
  <>


  {/*==========hero section=====*/}
  
  <section className="hero__section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className='flex flex-col lg: flex-row gap-[90px] items-center justify-center'>
        {/*=========hero content=========*/}
        <div>
          <div className="lg:w-[570px]">
          <h1 className='text-[20px] leading-[46px] text-[#F9F8FD] font-[700] md:text-[42px] md:leading-[60px] mt-[20px]'>
            <span className='block'>Prevent, Protect, and Thrive</span>
            <span className='block text-center mt-2  md:mt-4'>with a Healthy Life</span>
          </h1>

             <p className="text__para text-[#FFF9F1] text-center">
             Connecting you to quality healthcare.Trusted professionals delivering personalized care for your wellness journey.
              </p>
              <div className="flex justify-center">
                <Link to ='/login'><button className="btn hover:bg-[#00004d]">Request an Appointment</button></Link> 
              </div>
          </div>
          {/*=======hero counter=========*/}
          <div className='mt-[30px] lg:mt-[70px] flex flex-col justify-center lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-[#8AAEFE]">
                30+
              </h2>
              <span className='w-[100px] h-2  rounded-full block mt-[-14px]'></span>
              <p className='text__para text-white'> Years of Experience</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-[#8AAEFE]">
                15+
              </h2>
              <span className='w-[100px] h-2  rounded-full block mt-[-14px]'></span>
              <p className='text__para text-white'>Clinic Location</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-[#8AAEFE]">
                100%
              </h2>
              <span className='w-[100px] h-2 rounded-full block mt-[-14px]'></span>
              <p className='text__para text-white'> Patient Satisfaction</p>
            </div>

          </div>

        </div>
        {/*=========hero content=========*/}
      </div>
    </div>
  </section>
  {/*==========hero section end=====*/}


  <section>
    <div className="container">
      <div className='lg:w-[470px] mx-auto'>
        <h2 className='heading text-center'>
        Delivering  top-notch  healthcare services.
          </h2>
        <p className='text__para text-center text-[#2525A0]'>
          World-class care for everyone. Our healthsystem offers unmatched, 
          expert healthcare  
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]
      mt-[30px] lg:mt-[55px]">

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src= {icon01}  alt="icon1"/>
          </div>
          <div className="mt-[30px]">
            <h2 className='text-[26px] leading-9 text-[#020279]
            font-[700] text-center'>Find a Doctor
            </h2>
            <p className='text-[16px] leading-7 text-[#010143] font-[400] mt-4 text-center'>
              World-class care for everyone. 
              Our healthsystem offers unmatched, 
            expert healthcare. From the lab to the Clinic
             </p>
             <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
             flex items-center justify-center group hover:bg-primaryColor
             hover:bordor-none">
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
             </Link>
           </div>
         </div>


         <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src= {icon02} alt="icon2"/>
          </div>

          <div className="mt-[30px]">
            <h2 className='text-[26px] leading-9 text-[#020279]
            font-[700] text-center'>Find a Location
            </h2>
            <p className='text-[16px] leading-7 text-[#010143] font-[400] mt-4 text-center'>
            Finding quality care just got easier.Find nearby clinics and hospitals, 
            so you can receive expert care tailored to your needs, anytime, anywhere.
             </p>
             <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
             flex items-center justify-center group hover:bg-primaryColor
             hover:bordor-none">
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
             </Link>
          </div>
        </div>


        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src= {icon03} alt="icon3"/>
          </div>

          <div className="mt-[30px]">
            <h2 className='text-[26px] leading-9 text-[#020279]
            font-[700] text-center'>Book Appointment
            </h2>
            <p className='text-[16px] leading-7 text-[#010143] font-[400] mt-4 text-center'>
            Choose your preferred doctor, select a convenient time, 
            and secure your visit—experience seamless care tailored to your schedule.
             </p>
             <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
             flex items-center justify-center group hover:bg-primaryColor
             hover:bordor-none">
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
             </Link>
            
          </div>

        </div>
      </div>
    </div>
  </section>

  <About />
  {/*========services section=====*/}
  <section>
    <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Services We Provide </h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health system offers unmatched,expert health care.
          </p>
        </div>

        <ServiceList />
    </div>
  </section>
  {/*========services section end=====*/}
  {/*========features section=====*/}
  <section>
    <div className="container">
      <div className="flex items-center justify-between flex-col lg:flex-row">
        {/*========features section content=====*/}
        <div className="xl:w-[670px]">
          <h2 className="heading">
            Get virtual treatment <br /> anytime.
          </h2>

          <ul className="pl-4">
            <li className="text__para text-[#2525A0]">
              1.Schedule the Appointment directly.
            </li>
            <li className="text__para text-[#2525A0]">
              2.Search for your physician
            </li>
            <li className="text__para text-[#2525A0]">
              3. Consult for your Symptoms
            </li>
          </ul>
          <Link to="/doctors">
          <button className="btn">Learn More</button>
          </Link>
        </div>

        {/*========features section images=====*/} 
        <div className="relative z-10 xl:w-[600px] flex justify-end mt-[50px] lg:mt-0">
          <img src={featureImg} className="w-3/4" alt="" />
        
        <div className="w-[150px] lg:w-[248px] bg-white border border-[#D4DCF1] border-[2.5px]  absolute bottom-[50px] left-0 md:buttom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
         
         
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px] lg:gap-3">
              <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                Tue,24
              </p>
              <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textcolor font-[400]">
                10:00AM
              </p>
            </div>
            <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
              <img src={videoIcon} alt="" />
            </span>
          </div>
          
          <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
            Consultation
          </div>

          <div className="flex items-center gap-[6px] lg:gap[10px] mt-2 lg:mt-[18px]">
            <img src={avatarIcon} alt="" />
            <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
              Alex Parker 
            </h4>
          </div>
          </div> 
        </div>   
      </div>
    </div>
  </section>
  {/*========features section end=====*/}
  {/*========our great doc section=====*/}
  <section>
  <div className="container h-[1000px] bg-[#00004d]">
    <div className="xl:w-[470px] mx-auto">
    <h2 className="heading text-center text-white mt-8">Our Great Doctors</h2>

      <p className="text__para text-center text-white">
        World-class care for everyone. Our health system offers unmatched, expert health care.
      </p>
    </div>

    <DoctorList />
  </div>
</section>

    {/*========our great doc section end=====*/}
  
 </>
      
);
};
export default Home;

