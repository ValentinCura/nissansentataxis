import CountDownTimer from "../countdowntimer/CountdownTimer";
import { FaWhatsapp } from "react-icons/fa";

const MainPage = () => {
    return (
        <div className="bg-custom-bg bg-cover h-screen">
            <div className='w-auto    flex flex-col items-center justify-center p-12'>

                <div className=' bg-[rgba(0,0,0,0.5)]   rounded-2xl text-white  '>
                    <h2 className="flex justify-center">AUTODROMO VIP</h2>
                    <CountDownTimer  targetDate="2024-09-14T16:00:00" />
                </div>
                <div className=" relative md:mt-[100px] w-[300px]  md:w-[800px] md:h-[400px] overflow-hidden">
                    <img className=' object-cover w-full h-full  shadow-2xl' src="/img/taxi.png" alt="Taxi" />
                </div>



            </div>
            <div className="flex justify-center md:gap-[100px] gap-[35px] mb-[3000px] ">
                <FaWhatsapp className="text-green-500 filter-none hover:filter grayscale text-[60px]" />
                <FaWhatsapp className="text-green-500 filter-none hover:filter grayscale text-[60px]" />
                <FaWhatsapp className="text-green-500 filter-none hover:filter grayscale text-[60px]" />
            </div>
        </div>
    );
}

export default MainPage;
