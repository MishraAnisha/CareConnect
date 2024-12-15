import { Link } from "react-router-dom";
const SidePanel = () => {
    return (
      <div className="shadow-panelShadow bg-[#201845] text-[#EEECF9] p-3 lg:p-5 rounded-md h-[400px]">
          <div className="flex items-center justify-between">
              <p className="text__para mt-0 font-semibold">Ticket Price</p>
              <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 font-bold">Rs. 500</span>  
          </div>
  
          <div className="mt-[30px]">
              <p className="text__para mt-0 font-semibold">
                  Available time slots:
              </p>
              <ul className="mt-3">
                  <li className="flex items-center justify-between mb-2">
                      <p className="text-[15px] leading-6 font-semibold">
                          Tuesday
                      </p>
                      <p className="text-[15px] leading-6 font-semibold">
                          4:00 PM - 9:30 PM
                      </p>
                  </li>
                  <li className="flex items-center justify-between mb-2">
                      <p className="text-[15px] leading-6 font-semibold">
                          Wednesday
                      </p>
                      <p className="text-[15px] leading-6 font-semibold">
                          4:00 PM - 9:30 PM
                      </p>
                  </li>
                  <li className="flex items-center justify-between mb-2">
                      <p className="text-[15px] leading-6 font-semibold">
                          Sunday
                      </p>
                      <p className="text-[15px] leading-6 font-semibold">
                          4:00 PM - 9:30 PM
                      </p>
                  </li>
              </ul>
          </div>
  
          <Link to='\login'><button className="btn px-2 w-full rounded-md bg-[#EEECF9] text-black hover:bg-primaryColor" aria-label="Book an appointment">
              Book Appointment
          </button></Link>
      </div>
    )
}
  
export default SidePanel;
