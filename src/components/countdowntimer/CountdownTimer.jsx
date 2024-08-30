import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const updateTimer = () => {
    const eventDate = new Date(targetDate); // Usa la fecha del evento pasada como prop
    const now = new Date();
    const timeDiff = eventDate - now;

    if (timeDiff <= 0) {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const seconds = Math.floor(timeDiff / 1000) % 60;
    const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    setTimeRemaining({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    updateTimer(); // Actualizar inmediatamente
    const intervalId = setInterval(updateTimer, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="grid font-bebas grid-flow-col gap-1 md:gap-9 text-center auto-cols-max text-5xl">
      <div className="flex flex-col p-2 bg-neutral  text-neutral-content">
        <span className="p-3 flex items-center justify-center  md:w-[150px] md:h-[160px] md:p-5 bg-gradient-to-b via-inherit border-yellow-400 border-opacity-5 to-black text-yellow-400 md:text-9xl text-4xl font-anton">
          {timeRemaining.days}
        </span>
        <p className='text-xl'>Días</p>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="p-3 flex items-center justify-center  md:w-[150px] md:h-[160px] md:p-5 bg-gradient-to-b via-inherit border-yellow-400 border-opacity-5 to-black text-yellow-400 md:text-9xl text-4xl font-anton">
      {timeRemaining.hours}
        </span>
        <p className='text-xl'>Horas</p>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="p-3 flex items-center justify-center  md:w-[150px] md:h-[160px] md:p-5 bg-gradient-to-b via-inherit border-yellow-400 border-opacity-5 to-black text-yellow-400 md:text-9xl text-4xl font-anton">
      {timeRemaining.minutes}
        </span>
        <p className='text-xl'>Minutos</p>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="p-3 flex items-center justify-center  md:w-[150px] md:h-[160px] md:p-5 bg-gradient-to-b via-inherit border-yellow-400 border-opacity-5 to-black text-yellow-400 md:text-9xl text-4xl font-anton">
      {timeRemaining.seconds}
        </span>
        <p className='text-xl'>Seg</p>
      </div>
    </div>

  );
};

export default CountDownTimer;
