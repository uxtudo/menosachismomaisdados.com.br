import { CirclePlay, Youtube } from "lucide-react";
import Logo from "@/components/logo";

const LeadMagnetHeader = () => (
  <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
    <a className="flex items-center" href="/">
      <Logo width="181" height="32" className="mr-2" />
    </a>
    <nav className="flex items-center space-x-4">
      <span className="font-bold text-lg mr-4">Conheça também:</span>
      <a href="https://open.spotify.com/show/YOUR_SPOTIFY_SHOW_ID" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
        <CirclePlay className="h-5 w-5 mr-1" /> Podcast Analytics Talks no Spotify
      </a>
      <a href="https://www.youtube.com/YOUR_YOUTUBE_CHANNEL_ID" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
        <Youtube className="h-5 w-5 mr-1" /> Nosso canal no YouTube
      </a>
    </nav>
  </header>
);

export default LeadMagnetHeader;
