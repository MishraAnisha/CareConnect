import React from 'react';
import icon01 from '../assets/images/icon01.png';
import {Link} from 'react-router-dom';
import {BsArrowRight ,} from 'react-icons/bs'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import About from '../components/About/about';
import Services from './Services';


const Home = () => {
  return ( 
  <>
  {/*==========hero section=====*/}
  
  <section className="hero__section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className='flex flex-col lg: flex-row gap-[90px] items-center justify-between'>
        {/*=========hero content=========*/}
        <div>
          <div className="lg:w-[570px]">
          <h1 className='text-[20px] leading-[46px] text-[#F7F6FB] font-[700] md:text-[60px] 
             md:leading-[70px]'>
             Have a healthy, diseased-free life
             </h1>
             <p className="text__para text-[#C0BFBF]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Vero ex optio aliquam voluptate earum corporis, aliquid, expedita adipisci provident 
             repellat culpa nulla? Ea odit blanditiis iusto et, dolore dolor 
              non!
              </p>
              <button className="btn">Request an Appointment</button>
          </div>
          {/*=======hero counter=========*/}
          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row     lg:items-center gap-5 lg:gap-[30px]'>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-white">
                30+
              </h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-blue'> Years of Experience</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-white">
                15+
              </h2>
              <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-blue'>Clinic location</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-white">
                100%
              </h2>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-blue'> Patient Satisfaction</p>
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
          Providing the best medical services
          </h2>
        <p className='text__para text-center'>
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
            <h2 className='text-[26px] leading-9 text-headingColor
            font-[700] text-center'>Find a Doctor
            </h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
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
            <h2 className='text-[26px] leading-9 text-headingColor
            font-[700] text-center'>Find a Location
            </h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              World-class care for everyone. Our healthsystem offers unmatched, 
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
            <img src= {icon03} alt="icon3"/>
          </div>

          <div className="mt-[30px]">
            <h2 className='text-[26px] leading-9 text-headingColor
            font-[700] text-center'>Book Appointment
            </h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              World-class care for everyone. Our healthsystem offers unmatched, 
            expert healthcare. From the lab to the Clinic
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
  <Services />
  {/*========services section end=====*/}
  
 </>
      
);
};
export default Home;

