import SidebarIcon from './SidebarIcon';

function SidebarItem({ icon, isPillShown, notifCount, tooltipText, isActive }) {
  return (
    <div className="sidebar-wrapper group">
      {isPillShown && (
        <div className="sidebar-pill">
          <span className={`${isActive ? 'h-8 group-hover:h-8' : ''} pill`} />
        </div>
      )}
      <SidebarIcon
        icon={icon}
        notifCount={notifCount}
        tooltipText={tooltipText}
        isActive={isActive}
      />
    </div>
  );
}

export default SidebarItem;
