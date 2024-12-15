import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logoF.png';

const quicklinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quicklinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Got an Opinion",
  },
];

const quicklinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10 bg-[#0F0C1D] text-white">
      <div className="container ">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div className='bg-white h-[90px] w-[200px] rounded-lg'>
            <img src={logo} className='h-[90px] w-[200px]'alt="Logo" />
            <p className="text-[16px] leading-7 font-[400] text-whitesmoke mt-4">
              Copyright &copy; {year} developed by the commandos. All rights reserved.
            </p>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-white'>Quick links</h2>
            <ul>
              {quicklinks01.map((item,index) => <li key={index} className='mb-4'>
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor   ">{item.display}
              </Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-white'>I want to:</h2>
            <ul>
              {quicklinks02.map((item,index) => <li key={index} className='mb-4'>
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor   ">{item.display}
              </Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-white'>Support:</h2>
            <ul>
              {quicklinks03.map((item,index) => <li key={index} className='mb-4'>
                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor   ">{item.display}
              </Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
