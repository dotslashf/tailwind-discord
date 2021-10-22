import SidebarItem from './sidebar/SidebarItem';
import { HiHand, HiLightningBolt, HiPlus } from 'react-icons/hi';
import { FaDiscord } from 'react-icons/fa';

function Sidebar() {
  const sidebarItems = [
    {
      icon: <HiHand size="28" />,
      notifCount: 492,
      tooltipText: 'Server Gabut',
      isPillShown: true,
      isActive: true,
    },
    {
      icon: <HiLightningBolt size="28" />,
      notifCount: 69,
      tooltipText: 'ShibArmy',
      isPillShown: true,
      isActive: false,
    },
  ];

  const sidebarItemsComponent = sidebarItems.map(s => {
    return (
      <SidebarItem
        icon={s.icon}
        notifCount={s.notifCount}
        tooltipText={s.tooltipText}
        isPillShown={s.isPillShown}
        isActive={s.isActive}
      />
    );
  });

  return (
    <div className="relative flex flex-col top-0 left-0 items-center w-[4.5rem] bg-discord-shade-darker text-white h-screen m-0 py-2">
      <SidebarItem
        icon={<FaDiscord size="28" />}
        isPillShown={true}
        notifCount={24}
        tooltipText="Home"
      />
      <div className="border opacity-40 border-gray-600 px-3 mt-1 mb-1" />
      <SidebarItem icon={<HiPlus size="28" />} tooltipText="Add Server" />
      {sidebarItemsComponent}
    </div>
  );
}

export default Sidebar;
