function SidebarIcon({
  icon,
  notifCount,
  tooltipText = 'tooltip 💡',
  isActive,
}) {
  return (
    <>
      <div
        className={`${
          isActive ? 'rounded-xl bg-discord-blue-default' : ''
        } sidebar-icon relative`}
      >
        {icon}
        {notifCount > 0 && <span className="notif-badge">{notifCount}</span>}
      </div>
      <div className="flex items-center">
        <span className="sidebar-tooltip flex items-center group-hover:scale-100">
          <div className="absolute bg-discord-shade-darkest w-3 h-3 rotate-45 -left-1"></div>
          <span className="text-sm text-white font-semibold">
            {tooltipText}
          </span>
        </span>
      </div>
    </>
  );
}

export default SidebarIcon;
