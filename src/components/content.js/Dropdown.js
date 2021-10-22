import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  HiChevronDown,
  HiX,
  HiUserAdd,
  HiCheck,
  HiBell,
  HiShieldCheck,
  HiLogin,
  HiPencil,
} from 'react-icons/hi';
import { BsSuitDiamondFill, BsCheckSquareFill } from 'react-icons/bs';

export default function Dropdown({ serverName }) {
  return (
    <>
      <Menu
        as="div"
        className="flex text-left relative items-center justify-center z-50"
      >
        {({ open }) => (
          <>
            <div className="relative w-full px-4 py-3 border-b-2 border-discord-shade-darker shadow-sm">
              <Menu.Button className="inline-flex w-full justify-between font-medium items-center text-discord-shade-grayLight">
                <div>{serverName}</div>
                {open ? (
                  <div>
                    <HiX className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                  </div>
                ) : (
                  <div>
                    <HiChevronDown
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
                  </div>
                )}
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
              <Menu.Items className="absolute w-11/12 top-14 origin-top bg-discord-shade-darkest divide-y rounded-md shadow-md">
                <div className="px-2 py-1.5">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-discord-blue-default text-white'
                            : 'text-discord-shade-gray'
                        } group flex justify-between rounded-sm items-center w-full px-2 py-1.5 text-sm`}
                      >
                        Server Boost
                        {active ? (
                          <BsSuitDiamondFill size="16" className="text-white" />
                        ) : (
                          <BsSuitDiamondFill
                            size="16"
                            className="text-pink-400"
                          />
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <hr className="border-t my-1 border-discord-shade-grayLight border-opacity-10" />
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-discord-blue-default text-white'
                            : 'text-discord-blue-light'
                        } group flex justify-between rounded-sm items-center w-full px-2 py-1.5 text-sm`}
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
                  <hr className="border-t my-1 border-discord-shade-grayLight border-opacity-10" />
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-discord-blue-default text-white'
                            : 'text-discord-shade-gray'
                        } group flex justify-between rounded-sm items-center w-full px-2 py-1.5 text-sm`}
                      >
                        Mark As Read
                        {active ? (
                          <HiCheck size="16" className="text-white" />
                        ) : (
                          <HiCheck
                            size="16"
                            className="text-discord-shade-gray"
                          />
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
                        } group flex justify-between rounded-sm items-center w-full px-2 py-1.5 text-sm`}
                      >
                        Notification Settings
                        {active ? (
                          <HiBell size="16" className="text-white" />
                        ) : (
                          <HiBell
                            size="16"
                            className="text-discord-shade-gray"
                          />
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
                        } group flex justify-between rounded-sm items-center w-full px-2 py-1.5 text-sm`}
                      >
                        Privacy Settings
                        {active ? (
                          <HiShieldCheck size="16" className="text-white" />
                        ) : (
                          <HiShieldCheck
                            size="16"
                            className="text-discord-shade-gray"
                          />
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <hr className="border-t my-1 border-discord-shade-grayLight border-opacity-10" />
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-discord-blue-default text-white'
                            : 'text-discord-shade-gray'
                        } group flex justify-between rounded-sm items-center w-full px-2 py-1.5 text-sm`}
                      >
                        Edit Server Profile
                        {active ? (
                          <HiPencil size="16" className="text-white" />
                        ) : (
                          <HiPencil
                            size="16"
                            className="text-discord-shade-gray"
                          />
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
                        } group flex justify-between rounded-sm items-center w-full px-2 py-1.5 text-sm`}
                      >
                        Hide Muted Channels
                        {active ? (
                          <BsCheckSquareFill size="14" className="text-white" />
                        ) : (
                          <BsCheckSquareFill
                            size="14"
                            className="text-discord-shade-gray"
                          />
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <hr className="border-t my-1 border-discord-shade-grayLight border-opacity-10" />
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-red-600 text-white' : 'text-red-600'
                        } group flex justify-between rounded-sm items-center w-full px-2 py-1.5 text-sm`}
                      >
                        Leave Server
                        {active ? (
                          <HiLogin size="16" className="text-white" />
                        ) : (
                          <HiLogin size="16" className="text-red-600" />
                        )}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
}
