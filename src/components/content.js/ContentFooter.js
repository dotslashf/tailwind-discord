import { useState } from 'react';
import {
  FaMicrophoneSlash,
  FaHeadphonesAlt,
  FaMicrophone,
  FaCog,
  FaTimesCircle,
  FaVolumeMute,
} from 'react-icons/fa';

const ContentFooter = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isDeafen, setIsDeafen] = useState(true);

  const handleIsMuted = () => {
    setIsMuted(!isMuted);
  };

  const handleIsDeafen = () => {
    setIsDeafen(!isDeafen);
  };

  return (
    <div className="absolute w-full bg-discord-content-darker bottom-0 h-12 px-2 py-2">
      <div className="m-auto flex flex-row w-full h-full relative">
        <div className="absolute left-0 w-8 h-full rounded-full z-10 bg-discord-content-darker bg-opacity-0 hover:bg-discord-content-darker hover:bg-opacity-20 hover:cursor-pointer" />
        <div
          className="relative left-0 w-8 h-full rounded-full bg-cover bg-top"
          style={{ backgroundImage: 'url(/images/avatar.png' }}
        >
          <FaTimesCircle className="w-4 h-4 rounded-full bg-discord-content-darker absolute -bottom-1 -right-1 text-red-500 border-2 border-discord-content-darker" />
        </div>
        <div className="flex flex-col justify-start text-xs ml-2 m-auto hover:cursor-pointer">
          <span className="font-semibold text-white">dotslashf</span>
          <span className="text-discord-shade-gray">#6969</span>
        </div>
        <div className="right-0 flex flex-row items-center justify-center cursor-pointer">
          {isMuted ? (
            <span
              className="p-1.5 hover:bg-discord-shade-gray hover:bg-opacity-10 rounded-md"
              onClick={handleIsMuted}
            >
              <FaMicrophoneSlash className="text-red-500 w-5 h-5" />
            </span>
          ) : (
            <span
              className="p-1.5 hover:bg-discord-shade-gray hover:bg-opacity-10 rounded-md"
              onClick={handleIsMuted}
            >
              <FaMicrophone className="text-discord-shade-gray w-5 h-5" />
            </span>
          )}
          {isDeafen ? (
            <span
              className="p-1.5 hover:bg-discord-shade-gray hover:bg-opacity-10 rounded-md"
              onClick={handleIsDeafen}
            >
              <FaVolumeMute className="text-red-500 w-5 h-5" />
            </span>
          ) : (
            <span
              className="p-1.5 hover:bg-discord-shade-gray hover:bg-opacity-10 rounded-md"
              onClick={handleIsDeafen}
            >
              <FaHeadphonesAlt className="text-discord-shade-gray w-5 h-5" />
            </span>
          )}
          <span className="p-1.5 hover:bg-discord-shade-gray hover:bg-opacity-10 rounded-md">
            <FaCog className="text-discord-shade-gray w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentFooter;
