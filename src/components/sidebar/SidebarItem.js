import SidebarIcon from './SidebarIcon';

function SidebarItem({ icon, isPillShown, notifCount, tooltipText, isActive }) {
  return (
    <div className="sidebar-wrapper group">
      {isPillShown && (
        <div className="sidebar-pill">
          <span className="pill" />
        </div>
      )}
      <SidebarIcon
        icon={icon}
        notifCount={notifCount}
        tooltipText={tooltipText}
      />
    </div>
  );
}

export default SidebarItem;
