import { Disclosure } from '@headlessui/react';
import { HiChevronRight } from 'react-icons/hi';
import DisclosureContentItem from './DisclosureContentItem';

function DisclosureContent({ name, items }) {
  const disclosureItems = items.map(item => {
    return (
      <DisclosureContentItem
        key={item.name}
        name={item.name}
        isActive={item.isActive}
        notifCount={item.notifCount}
      />
    );
  });

  return (
    <Disclosure className="text-discord-shade-gray" as="div">
      {({ open }) => (
        <>
          <Disclosure.Button className="mt-2 font-semibold tracking-wider px-1 py-2 uppercase text-xs inline-flex flex-row items-center hover:text-discord-shade-grayLight z-10">
            <HiChevronRight
              className={`${open ? 'transform rotate-90' : ''} transition mr-1`}
            />
            {name}
          </Disclosure.Button>
          <div className="cursor-pointer px-3 space-y-1">{disclosureItems}</div>
        </>
      )}
    </Disclosure>
  );
}

export default DisclosureContent;
