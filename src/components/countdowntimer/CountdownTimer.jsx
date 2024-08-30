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
    <div className="grid font-bebas grid-flow-col gap-1 text-center auto-cols-max text-5xl">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="p-3 bg-gradient-to-b from-black via-black to-zinc-600 text-yellow-400 text-4xl font-bebas">
          {timeRemaining.days}
        </span>
        <p className='text-2xl'>Días</p>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="p-3 bg-gradient-to-b from-black via-black to-zinc-600 text-yellow-400 text-4xl font-bebas">
          {timeRemaining.hours}
        </span>
        <p className='text-2xl'>Horas</p>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="p-3 bg-gradient-to-b from-black via-black to-zinc-600 text-yellow-400 text-4xl font-bebas">
          {timeRemaining.minutes}
        </span>
        <p className='text-2xl'>Minutos</p>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="p-3 bg-gradient-to-b from-black via-black to-zinc-600 text-yellow-400 text-4xl font-bebas">
          {timeRemaining.seconds}
        </span>
        <p className='text-2xl'>Seg</p>
      </div>
    </div>

  );
};

export default CountDownTimer;
