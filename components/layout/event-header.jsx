import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export const EventHeader = () => (
  <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
    <a className="font-bold text-lg flex items-center" href="/">
      <Logo width="136" height="24" variant="event" />
    </a>
    <div className="flex items-center lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu cursor-pointer lg:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R9ja:" data-state="closed"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
    </div>
    <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:block mx-auto">
      <div style={{position:"relative"}}>
        <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
          <li><a className="text-base px-2" data-radix-collection-item="" href="#agenda">Agenda</a></li>
          <li><a className="text-base px-2" data-radix-collection-item="" href="#speakers">Palestrantes</a></li>
          <li><a className="text-base px-2" data-radix-collection-item="" href="#location">Localização</a></li>
          <li><a className="text-base px-2" data-radix-collection-item="" href="#pricing">Ingressos</a></li>
          <li><a className="text-base px-2" data-radix-collection-item="" href="#sponsors">Patrocinadores</a></li>
          <li><a className="text-base px-2" data-radix-collection-item="" href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div className="absolute left-0 top-full flex justify-center"></div>
    </nav>
    <div className="hidden lg:flex">
      <a href="#pricing"><Button size="lg">Garanta seu ingresso</Button></a>
    </div>
  </header>
);
