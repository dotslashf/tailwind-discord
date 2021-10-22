import SidebarItem from './sidebar/SidebarItem';
import { HiEmojiHappy, HiHand, HiLightningBolt, HiPlus } from 'react-icons/hi';

function Sidebar() {
  return (
    <div className="relative flex flex-col top-0 left-0 items-center w-[4.5rem] bg-discord-shade-darkest text-white h-screen m-0 py-3">
      <SidebarItem
        icon={<HiEmojiHappy size="28" />}
        isPillShown={true}
        notifCount={69}
        tooltipText="Home"
      />
      <div className="border opacity-60 border-gray-600 px-4 mt-1 mb-1" />
      <SidebarItem icon={<HiPlus size="28" />} tooltipText="Add Server" />
      <SidebarItem
        icon={<HiHand size="28" />}
        notifCount={420}
        tooltipText="Server gabut"
      />
      <SidebarItem
        icon={<HiLightningBolt size="28" />}
        isPillShown={true}
        tooltipText="ShibArmy"
      />
    </div>
  );
}

export default Sidebar;
