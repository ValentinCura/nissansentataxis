import React from 'react'
import CountDownTimer from '../countdowntimer/CountdownTimer'

const MainPage = () => {
    return (
        <div className=''>
            <div className="App flex justify-center mt-20">
                {/* Fecha del evento: 14 de septiembre de 2024 a las 18:00 horas */}
                <CountDownTimer targetDate="2024-09-14T16:00:00" />
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <img className='' src="/img/taxi-2.png" alt="" />
            </div>
        </div>

    )
}

export default MainPage