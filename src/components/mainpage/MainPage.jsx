import React, { useState } from 'react';
import CountDownTimer from "../countdowntimer/CountdownTimer";
import { FaWhatsapp, FaFileDownload, FaCalendarCheck } from "react-icons/fa";
import FormInscription from "../form/FormInscription";

const MainPage = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="">
            <div className='w-auto flex flex-col items-center justify-center pt-10'>
                <div className='rounded-2xl h-auto text-white '>
                    <h1 className="mt-3 flex justify-center items-center md:text-5xl text-3xl font-extrabold dark:text-white">
                        AUTÓDROMO
                        <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">VIP</span>
                    </h1>
                    <div>
                        <CountDownTimer targetDate="2024-09-14T16:00:00" />
                    </div>
                </div>
                <div className="relative h-[200px] w-[300px] md:w-[600px] md:h-[400px] overflow-hidden">
                    <img className='object-cover w-full h-full shadow-2xl' src="/img/taxi.png" alt="Taxi" />
                </div>
            </div>
            <div className="hidden md:flex justify-center md:gap-[100px] md:flex-row flex-col gap-[35px]">
                <a href="/files/ficha_tecnica.pdf" download="ficha_tecnica.pdf">
                    <div>
                        <FaFileDownload className="text-white filter-none hover:filter grayscale md:text-[60px] text-[30px]" />
                    </div>
                </a>
                <a href="https://wa.me/+5493413438617?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20evento%20AUTODROMO%20VIP"
                    target="_blank" rel="noopener noreferrer">
                    <div>
                        <FaWhatsapp className="text-green-500 filter-none hover:filter grayscale md:text-[60px] text-[30px]" />
                    </div>
                </a>
                <div>
                    <FaCalendarCheck className="text-white filter-none hover:filter grayscale md:text-[60px] text-[30px]" />
                </div>
            </div>
            <div className="flex flex-col md:hidden justify-center items-center gap-10">
                <a href="/files/ficha_tecnica.pdf" download="ficha_tecnica.pdf">
                    <div className="flex justify-between items-center w-[300px] border-solid border-b-4 border border-white p-3">
                        <FaFileDownload className="text-white filter-none text-[50px] " />
                        <p className="text-white font-anton text-[17px]">FICHA TECNICA</p>
                    </div>
                </a>
                <a href="https://wa.me/+5493413438617?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20evento%20AUTODROMO%20VIP"
                    target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between items-center w-[300px] border-solid border-b-4 border border-white p-3">
                        <img className="w-[50px]" src="/svg/whatsapp.svg" alt="" />
                        <p className="text-white font-anton text-[17px]">CONSULTAR</p>
                    </div>
                </a>
                <a className="flex justify-center items-center" onClick={() => setShowForm(prevShowForm => !prevShowForm)}>
                    <div className="flex justify-between items-center w-[300px] border-solid border-b-4 border border-white p-3">
                        <FaCalendarCheck className="text-white filter-none text-[50px]" />
                        <p className="text-white font-anton text-[17px]" >INSCRIBIRSE AL EVENTO</p>
                    </div>
                </a>
            </div>
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative  bg-opacity-55 p-6 rounded-lg w-full max-w-md mx-auto">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                        <FormInscription />
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainPage;
