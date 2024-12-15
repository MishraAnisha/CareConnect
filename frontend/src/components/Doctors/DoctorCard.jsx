import React from 'react';
import starIcon from '../../assets/images/Star.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
    const{
        name,
        avgRating,
        totalRating,
        photo,
        specialization,
        totalPatient,
        hospital,
    }=doctor;

  return (
<div>
    <div className="w-[400px] h-[700px] border color-[#ffffff] p-4 lg:p-6 mt-10">
        <div className='flex justify center top-[100px]'>
            <img src={photo} className="w-4/5" alt="" />
        </div>
        <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-white font-[700] my-3 lg:mt-5">
        {name}
        </h2>

        <div className="mt-2 lg:mt-4 flex items-center justify-between">
            <span className="bg-[#CCF0F3] text-white py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
             {specialization}
             </span>

            <div className="flex items-centre gap-[6px]">
             <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-white">
                <img src={starIcon} alt="" /> {avgRating}
             </span>
             <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-white">
                ({totalRating})</span>
            </div>
        </div>

        <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
            <div>
                <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-white">
                    +{totalPatient}patients
                </h3>
                <p className="text-[14px] leading-6 font-[400] text-white">
                    At {hospital}
                </p>
            </div>
            <Link to={`/doctors/${doctor.id}`} className="w-[44px] h-[44px] rounded-full border border-solid bg-[#ffffff]
                         flex items-center justify-center group hover:bg-primaryColor
                         hover:bordor-none">
                          <BsArrowRight className="group-hover:text-white w-6 h-5"/>
            </Link>
        </div>
    </div>
    </div>
  );
};

export default DoctorCard;