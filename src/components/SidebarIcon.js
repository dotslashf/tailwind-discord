function SidebarIcon({ icon, notifCount, tooltipText = 'tooltip 💡' }) {
  return (
    <>
      <div className="sidebar-icon relative">
        {icon}
        {notifCount > 0 && <span className="notif-badge">{notifCount}</span>}
      </div>
      <div className="flex items-center">
        <span className="sidebar-tooltip flex items-center group-hover:scale-100">
          <div className="absolute bg-discord-shade-dark w-3 h-3 rotate-45 -left-1"></div>
          <span className="text-xs text-white font-bold">{tooltipText}</span>
        </span>
      </div>
    </>
  );
}

export default SidebarIcon;
