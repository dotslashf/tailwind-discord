import ContentSidebar from './content.js/ContentSidebar';

function Layout() {
  return (
    <div className="bg-discord-shade-dark flex-1 grid grid-cols-12">
      <div className="bg-discord-content-dark col-span-2">
        <ContentSidebar />
      </div>
      <div className="bg-discord-content-light col-span-8">A</div>
      <div className="bg-discord-content-dark col-span-2">A</div>
    </div>
  );
}

export default Layout;
