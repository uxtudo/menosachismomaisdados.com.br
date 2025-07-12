'use client';
import React, { useState, useEffect } from 'react';
import { Section } from '@/components/layout';

const calculateTimeLeft = () => {
  const difference = +new Date('2025-10-16T00:00:00') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  }

  return timeLeft;
};

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateCountdown(); // Set initial time on client side

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerString = [
    timeLeft.days ? `${timeLeft.days}` : '',
    timeLeft.hours ? `${timeLeft.hours}` : '',
    timeLeft.minutes ? `${timeLeft.minutes}` : '',
    timeLeft.seconds ? `${timeLeft.seconds}` : '',
  ].filter(Boolean).join(':');

  return (
    <Section className="bg-[#5800AA]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contagem regressiva</h2>
        <div className="flex justify-center md:justify-end flex-wrap gap-6">
          {timeLeft.days !== undefined && (
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-white">
                {timeLeft.days}
              </span>
              <span className="text-lg text-[#FB900B]">Dias</span>
            </div>
          )}
          {timeLeft.hours !== undefined && (
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-white">
                {timeLeft.hours}
              </span>
              <span className="text-lg text-[#FB900B]">Horas</span>
            </div>
          )}
          {timeLeft.minutes !== undefined && (
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-white">
                {timeLeft.minutes}
              </span>
              <span className="text-lg text-[#FB900B]">Minutos</span>
            </div>
          )}
          {timeLeft.seconds !== undefined && (
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-white">
                {timeLeft.seconds}
              </span>
              <span className="text-lg text-[#FB900B]">Segundos</span>
            </div>
          )}
          {Object.keys(timeLeft).length === 0 && (
            <span className="text-white text-2xl">Evento ao vivo!</span>
          )}
        </div>
      </div>
    </Section>
  );
};

export default CountdownSection;
