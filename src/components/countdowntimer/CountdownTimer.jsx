import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg">
      {timeLeft.days !== undefined ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">¡Evento Especial!</h1>
          <div className="flex justify-center space-x-4">
            <div className="text-2xl">
              <span className="block text-6xl font-semibold">{timeLeft.days}</span>
              <span>Días</span>
            </div>
            <div className="text-2xl">
              <span className="block text-6xl font-semibold">{timeLeft.hours}</span>
              <span>Horas</span>
            </div>
            <div className="text-2xl">
              <span className="block text-6xl font-semibold">{timeLeft.minutes}</span>
              <span>Minutos</span>
            </div>
            <div className="text-2xl">
              <span className="block text-6xl font-semibold">{timeLeft.seconds}</span>
              <span>Segundos</span>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-4xl font-bold">¡Evento en Curso!</h1>
      )}
    </div>
  );
};

export default CountdownTimer;
