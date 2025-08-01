import React, { useState } from 'react'; 
import doctorImg from "../../assets/images/doc1.png";
import starIcon from "../../assets/images/Star.png"; // Fixed import for starIcon
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const Doctorsdetails = () => {
  const [tab, setTab] = useState('about');
  
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center h-[300px] w-[400px] gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="Doctor" className="w-full" />
              </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6
                text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Cardiologist
                </span>

                <h3 className="text-[#3D7AFA] text-[22px] leading-9 mt-3 font-bold">
                Maya Patel
                </h3>

                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px]
                   leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="Star Icon" />4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px]
                   lg:leading-7 font-[550px] text-textColor'>(272)
                  </span>
                </div>

                <p className='text-[18px] text-[#00004d] leading-5 md:text-[15px] lg:max-w-[390px]'>
                Dr. Maya Patel is a compassionate and experienced surgeon dedicated to providing personalized, high-quality care. 
                </p>
              </div>
            </div>
            
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
               onClick={() => setTab('about')}
               className={`py-2 px-5 mr-5 text-[16px] font-semibold text-headingColor ${
               tab === 'about' ? 'border-b border-solid border-primaryColor' : ''}`}>
                About
              </button>

               <button
                onClick={() => setTab('feedback')}
                className={`py-2 px-5 mr-5 text-[16px] font-semibold text-headingColor ${
                 tab === 'feedback' ? 'border-b border-solid border-primaryColor' : ''
                }`}>
                Feedback
               </button>
            </div>

            <div className="mt-[50px]">
              {tab === 'about' && <DoctorAbout />}
              {tab === 'feedback' && <Feedback />}
            </div>
          </div>
          <SidePanel />
        </div>
      </div>
    </section>
  );
};

export default Doctorsdetails;
