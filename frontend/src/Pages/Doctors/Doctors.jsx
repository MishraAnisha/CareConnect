
import {doctors} from './../../assets/data/doctors';
import DoctorCard from "./../../components/Doctors/DoctorCard";
const Doctors = () => {
  return <>
  <section className='bg-[#DDF7FF]'>
    <div className="container text-center">
      <h2 className='heading textColor-[#00004d]'>Find a Doctor</h2>
      <div className="max -w-[500px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center
      justify-between">
        <input type="search" className='py-4 pl-4 pr-2 bg-[#90B2F9] w-full focus:outline-none
        cursor-pointer placeholder:text-black '
        placeholder='Search Doctor'/>
        <button className='btn mt-0 rounded-[0px] rounded-r-md'>
          Search
        </button>
      </div>
    </div>
  </section>
  <section>
    <div className="container bg-[#00004d] h-[900px]">
      <div className=" grid grid-cols-1 sm:grid-col2 md:grid-cols-3 gap-15 ">
        {doctors.map(doctor =>(
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  </section>

  {/*<section>
    <div className="container">
      <div className="xl:w-[470px] mx-auto">
        <h2 className='heading text-center'>
          What our patient say</h2>
          <p className='text__para text-center'>
            World-class care for everyone.Our health system offers unmatched,
            expect health care.
          </p>
      </div>

      <Testimonial />
    </div>
  </section>
  */}
  
  </>
}

export default Doctors