import React from 'react'
import aboutImg from "../../assets/images/doc5.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'
const About = () => {
  return <section>
  <div className="container">
  <div
    className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
    {/*=======about img========*/}
    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
      {/* Blue Rectangle */}
      <div className="absolute  bottom-[20px] left-0 w-[600px] h-[300px] bg-[#014DD6] rounded-lg z-0"></div>
      
      <img src={aboutImg} alt="about" className="relative z-10" />
      <div
        className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
        <img src={aboutCardImg} alt="cardimg" />
      </div>
    </div>
    {/*======about content=====*/}
    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
      <h2 className="heading">Proud to be one of the nation's best</h2>
      <p className="text__para">
        For over 30 years, India News and World Report has ranked us among the
        top public hospitals in the nation and the #1 hospital in Bhubaneswar.
        This recognition reflects our commitment to delivering exceptional
        healthcare through advanced medical facilities, innovative treatments,
        and patient-focused care.
      </p>

      <Link to="/doctors">
        <button className="btn">Learn More</button>
      </Link>
    </div>
  </div>
</div>


  </section>
}



export default About;