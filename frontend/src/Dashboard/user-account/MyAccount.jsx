import { useContext, useState } from "react";
import userImg from "../../assets/images/doctor-img01.png";
import { authContext } from "./../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loader/Loading";

const MyAccount = () => {
    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState("bookings");

    const {
        data: userData,
        loading,
        error,
    } = useGetProfile(`${BASE_URL}/users/profile/me`);

    console.log(userData, "userdata");

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="max-w-[1170px] px-5 mx-auto">
            {loading && <Loading />}
            {error && <Error message={error} />} {/* Corrected the error prop */}
            <div className="grid md:grid-cols-3 gap-10">
                <div className="pb-[50px] px-[30px] rounded-md">
                    {/* User profile info */}
                    {userData && (
                        <div>
                            <div className="flex items-center justify-center">
                                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                                    <img
                                        src={userData.photo || userImg} // Fallback to default image
                                        alt="User Profile"
                                        className="w-full h-full rounded-full"
                                    />
                                </figure>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                                    {userData.name}
                                </h3>
                                <p className="text-textColor text-[15px] leading-6 font-medium">
                                    {userData.email}
                                </p>
                                <p className="text-textColor text-[15px] leading-6 font-medium">
                                    Blood Type:
                                    <span className="ml-2 text-headingColor text-[22px] leading-8">
                                        {userData.bloodType}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="md:col-span-2 md:px-[30px]">
                    <div>
                        <button
                            onClick={() => setTab("bookings")}
                            className={`p-2 mr-5 px-5 rounded-md ${
                                tab === "bookings"
                                    ? "bg-primaryColor text-white font-normal"
                                    : "text-headingColor font-semibold"
                            } text-[16px] leading-7 border border-solid border-primaryColor`}
                        >
                            My Bookings
                        </button>
                        <button
                            onClick={() => setTab("settings")}
                            className={`py-2 px-5 rounded-md ${
                                tab === "settings"
                                    ? "bg-primaryColor text-white font-normal"
                                    : "text-headingColor font-semibold"
                            } text-[16px] leading-7 border border-solid border-primaryColor`}
                        >
                            Profile Settings
                        </button>
                    </div>
                    {/* Conditional rendering based on selected tab */}
                    {tab === "bookings" && <MyBookings />}
                    {tab === "settings" && <Profile />}
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
