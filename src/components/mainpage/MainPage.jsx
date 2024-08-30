import CountDownTimer from "../countdowntimer/CountdownTimer";
import { FaWhatsapp } from "react-icons/fa";

const MainPage = () => {
    return (
        <div className="bg-custom-bg bg-cover h-screen">
            <div className='w-auto    flex flex-col items-center justify-center p-12'>

                <div className='rounded-2xl text-white  '>
                <h1 class="flex justify-center  items-center md:text-5xl text-3xl font-extrabold dark:text-white">AUTODROMO<span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">VIP</span></h1>                    <div className="md:mt-[80px]">
                    <CountDownTimer  targetDate="2024-09-14T16:00:00" />
                    </div>
                </div>
                <div className=" relative  w-[300px]  md:w-[600px] md:h-[400px] overflow-hidden">
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
