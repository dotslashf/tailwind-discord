import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiChevronDown, HiUserAdd } from 'react-icons/hi';
import { BsSuitDiamondFill } from 'react-icons/bs';

export default function Dropdown({ serverName }) {
  return (
    <>
      <Menu
        as="div"
        className="flex text-left relative items-center justify-center"
      >
        <div className="relative w-full px-4 py-4 border-b-2 border-discord-shade-darkest shadow-md">
          <Menu.Button className="inline-flex w-full justify-between text-sm font-semibold text-discord-shade-grayLight">
            <div>{serverName}</div>
            <div>
              <HiChevronDown
                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-11/12 top-16 origin-top bg-discord-shade-darkest divide-y rounded-sm shadow-md">
            <div className="px-2 py-3 text-xs">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? 'bg-discord-blue-default text-white'
                        : 'text-discord-shade-gray'
                    } group flex justify-between rounded-sm items-center w-full px-2 py-2 text-sm`}
                  >
                    Server Boost
                    {active ? (
                      <BsSuitDiamondFill size="16" className="text-white" />
                    ) : (
                      <BsSuitDiamondFill size="16" className="text-pink-400" />
                    )}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? 'bg-discord-blue-default text-white'
                        : 'text-discord-shade-gray'
                    } group flex justify-between rounded-sm items-center w-full px-2 py-2 text-sm`}
                  >
                    Invite People
                    {active ? (
                      <HiUserAdd size="16" className="text-white" />
                    ) : (
                      <HiUserAdd
                        size="16"
                        className="text-discord-blue-light"
                      />
                    )}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
