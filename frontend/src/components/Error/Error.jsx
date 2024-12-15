
import HashLoader from "react-spinners/HashLoader";


const Error=({errMessage})=>{
    return(
    <div className="flex items-center justify-center w-full h-full">
        <h3 className="black text-headingColor text-[20px] leading-[30px] font-semibold">{errMessage}</h3>
        </div>
    );
};
export default Error;
