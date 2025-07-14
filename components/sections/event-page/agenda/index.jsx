'use client';
import { useState } from 'react';
import { Section, SectionTitle } from "@/components/layout";

const generateGoogleCalendarUrl = (item) => {
  const eventDate = "20250714"; // Assuming the event is on July 14, 2025
  const [startTimeStr, endTimeStr] = item.time.split(' - ');

  const formatTime = (timeStr) => {
    const [hour, minute] = timeStr.split(':');
    return `${hour}${minute}00`;
  };

  const startTime = formatTime(startTimeStr);
  let endTime;
  if (endTimeStr) {
    endTime = formatTime(endTimeStr);
  } else {
    // Assume 1 hour duration if end time is not provided
    const [startHour, startMinute] = startTimeStr.split(':').map(Number);
    const endHour = startHour + 1;
    endTime = `${String(endHour).padStart(2, '0')}${String(startMinute).padStart(2, '0')}00`;
  }

  const dates = `${eventDate}T${startTime}/${eventDate}T${endTime}`;
  const title = encodeURIComponent("Analytics Summit 25 - " + item.title);
  const description = encodeURIComponent(item.description || "");
  const location = encodeURIComponent(item.location || "Local do Evento"); // Placeholder location

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${description}&location=${location}&sf=true&output=xml`;
};

const agendaItems = [
  {
    time: "09:00 - 09:30",
    title: "Abertura do Evento",
    description: "Cerimônia de abertura e boas-vindas.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: ["Gustavo Esteves"],
  },
  {
    time: "09:30 - 10:30",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: [],
  },
  {
    time: "10:30 - 11:00",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: [],
  },
  {
    time: "11:00 - 12:00",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: [],
  },
  {
    time: "12:00 - 13:30",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: [],
  },
  {
    time: "13:30 - 14:30",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: [],
  },
  {
    time: "14:30 - 15:30",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: [],
  },
  {
    time: "15:30 - 16:00",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: [],
  },
  {
    time: "16:00 - 17:00",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
    speakers: [],
  },
  {
    time: "17:00 - 18:00",
    title: "Em breve",
    description: "Detalhes da palestra em breve.",
    location: "Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP",
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
                {item.title !== "Em breve" && (
                  <button
                    className="mt-2 px-3 py-1 bg-gray-500 text-white rounded-md text-sm flex items-center gap-1 hover:bg-gray-600 cursor-pointer"
                    onClick={() => window.open(generateGoogleCalendarUrl(item), '_blank')}
                    aria-label="Salvar na Agenda"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus"><path d="M21 12V7H3v14h7"/><line x1="12" x2="12" y1="16" y2="22"/><line x1="9" x2="15" y1="19" y2="19"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M18 21v-6"/><path d="M15 18h6"/></svg>
                    Salvar na Agenda
                  </button>
                )}
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