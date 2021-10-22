import Dropdown from './Dropdown';
import DisclosureContent from './Disclosure';

function ContentSidebar() {
  const disclosureContent = [
    {
      name: 'Information',
      items: [
        { name: 'Introduction', isActive: false, notifCount: 1 },
        { name: 'Rules', isActive: false, notifCount: 0 },
      ],
    },
    {
      name: 'Text Channels',
      items: [
        { name: 'General Chat', isActive: false, notifCount: 0 },
        { name: 'Meme', isActive: true, notifCount: 420 },
        { name: 'Front End Stuff', isActive: false, notifCount: 69 },
        { name: 'Back End Stuff', isActive: false, notifCount: 2 },
      ],
    },
    {
      name: 'Voice Channels',
      items: [
        {
          name: 'Radio 24/7',
          isActive: false,
          isAudioChannel: true,
        },
        {
          name: 'Gaming',
          isActive: false,
          isAudioChannel: true,
        },
      ],
    },
  ];

  const disclosureList = disclosureContent.map(dis => {
    return (
      <DisclosureContent key={dis.name} name={dis.name} items={dis.items} />
    );
  });

  return (
    <div className="relative">
      <Dropdown serverName="Server Gabut" />
      {disclosureList}
    </div>
  );
}

export default ContentSidebar;
