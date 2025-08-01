import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5 bg-[#0E2D59] border border-[#B1A4F1]-500 text-[#EEECF9] rounded-lg">
      <h2 className="text-[26px] leading-9 font-[700]">{name}</h2>
      <p className="text-[16px] leading-7 font-[400] mt-4">{desc}</p>

      <div className="flex items-center justify-between mt-[30px]">
      <Link
  to="/doctors"
  className="w-[44px] h-[44px] rounded-full border border-solid border-[#EEECF9]
             flex items-center justify-center group 
             hover:bg-[#cad8ff] hover:border-blue-500"
>
  <BsArrowRight className="text-[#6666CC] group-hover:text-black w-6 h-5" />
</Link>

        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
