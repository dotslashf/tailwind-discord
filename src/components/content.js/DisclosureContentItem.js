import { Disclosure } from '@headlessui/react';
import { HiHashtag, HiUserAdd, HiVolumeUp } from 'react-icons/hi';
import { useState } from 'react';

function DisclosureContentItem({
  name,
  isActive,
  notifCount = 0,
  isAudioChannel = false,
}) {
  let [isA, setisA] = useState(isActive);

  return (
    <Disclosure.Panel
      as="div"
      onMouseEnter={() => setisA(true)}
      onMouseLeave={() => setisA(false)}
      className={
        'inline-flex flex-row items items-center px-2 py-1 rounded-md bg-opacity-10 w-full hover:text-discord-shade-grayLight hover:bg-discord-shade-gray hover:bg-opacity-10 ' +
        (isActive
          ? 'bg-discord-shade-gray text-discord-shade-grayLight'
          : 'text-discord-shade-gray text-opacity-60')
      }
    >
      {notifCount > 0 && (
        <div className="absolute sidebar-pill left-0">
          <span className="pill" />
        </div>
      )}
      <div className="flex w-full">
        <div className="flex flex-row items-center text-discord-shade-gray font-normal text-opacity-70">
          {isAudioChannel ? (
            <HiVolumeUp size="20" className="mr-1" />
          ) : (
            <HiHashtag size="20" className="mr-1" />
          )}
          {name}
        </div>
      </div>
      <div className="flex flex-row items-center">
        {(isActive || isA) && <HiUserAdd className="mr-1" />}
        {notifCount > 0 && (
          <span className="ml-1 bg-red-500 px-[5px] py-[0.5px] text-white text-xs font-semibold rounded-full">
            {notifCount}
          </span>
        )}
      </div>
    </Disclosure.Panel>
  );
}

export default DisclosureContentItem;
