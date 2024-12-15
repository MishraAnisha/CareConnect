import { formatDate } from '../../utils/formatData';

const DoctorAbout = () => {
    return <div>
    <div>
      <h3 className="text-[24px] leading-[30px] text-[#00004d] font-bold flex items-center gap-2">
      About of
      <span className="text-[#3D7AFA] font-bold text-[24px] leading-9">
        Maya Patel
      </span>
      </h3>
      <p className="text__para">
      Dr. Maya Patel is a compassionate and experienced surgeon dedicated to providing personalized, high-quality care. 
      With a patient-first approach, he ensures the best outcomes for long-term health and well-being.
      </p>
    </div>

    <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
        Education
      </h3>
      <ul className="pt-4 md:p-5">
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
          <div>
            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {formatDate("12-04-2015")} - {formatDate("12-04-2018")}
            </span>
            <p className="text-[16px] leading-6 fnt-medium text-textcolor">
              PHD in Paediatrics
            </p>
          </div>
          <p className="text-[14px] leading-5 fnt-medium text-textcolor">
              KIMS, Bhubaneswar.
            </p>
        </li>
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
          <div>
            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {formatDate("12-04-2010")} - {formatDate("12-04-2015")}
            </span>
            <p className="text-[16px] leading-6 fnt-medium text-textcolor">
              MBBS
            </p>
          </div>
          <p className="text-[14px] leading-5 fnt-medium text-textcolor">
              KIMS, Bhubaneswar.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-12">
    <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
    Experience
    </h3>
    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">  
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formatDate("12-04-2022")} - {formatDate("12-04-2024")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textcolor">
                 Paedetrician
            </p>
            <p className="text-[14px] leading-5 font-medium text-textcolor">
              KIMS Hospital, Bhubaneswar.
          </p>
        </li>
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formatDate("12-04-2018")} - {formatDate("12-04-2022")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textcolor">
                Jr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textcolor">
              KIMS Hospital, Bhubaneswar.
          </p>
        </li>
    </ul>
    </div>

  </div>
}

export default DoctorAbout;