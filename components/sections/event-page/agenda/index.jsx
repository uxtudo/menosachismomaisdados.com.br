'use client';
import { useState } from 'react';
import { Section, SectionTitle } from "@/components/layout";

const agendaItems = [
  {
    time: "09:00 - 09:30",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "09:30 - 10:30",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "10:30 - 11:00",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "11:00 - 12:00",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "12:00 - 13:30",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "13:30 - 14:30",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "14:30 - 15:30",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "15:30 - 16:00",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "16:00 - 17:00",
    title: "Em breve",
    speakers: [],
  },
  {
    time: "17:00 - 18:00",
    title: "Em breve",
    speakers: [],
  },
];

const AgendaSection = () => {
  const [filter, setFilter] = useState('Manhã');

  const morningAgenda = agendaItems.filter(item => {
    const [hour] = item.time.split('-')[0].trim().split(':');
    return parseInt(hour) < 12;
  });

  const afternoonAgenda = agendaItems.filter(item => {
    const [hour] = item.time.split('-')[0].trim().split(':');
    return parseInt(hour) >= 12;
  });

  const displayedAgenda = filter === 'Manhã' ? morningAgenda : afternoonAgenda;

  return (
    <Section id="agenda" className="bg-[#070C16]">
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-8 items-start">
        <div>
          <SectionTitle className="text-left text-white">Confira o cronograma do evento</SectionTitle>
          <div className="flex gap-4 mt-4">
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${filter === 'Manhã' ? 'bg-[#FB900B] text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setFilter('Manhã')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="8"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/><path d="M6.34 17.66l-1.41 1.41"/></svg>
              Manhã
            </button>
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${filter === 'Tarde' ? 'bg-[#FB900B] text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setFilter('Tarde')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              Tarde
            </button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 grid grid-cols-1 gap-4">
          {displayedAgenda.map((item, index) => (
            <div key={index} className="border border-gray-700 p-4 rounded-lg bg-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <p className="font-semibold text-white text-lg">{item.time}</p>
                <h3 className="font-bold text-white text-xl mt-2">{item.title}</h3>
              </div>
              {item.speakers && item.speakers.length > 0 && (
                <div className="flex flex-col items-start md:items-end space-y-2">
                  {item.speakers.map((speaker, speakerIndex) => (
                    <div key={speakerIndex} className="flex items-center space-x-3">
                      <span className="text-white">{speaker}</span>
                      <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${speaker}`} alt={speaker} className="w-8 h-8 rounded-full" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AgendaSection;