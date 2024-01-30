'use client';
import { useState } from 'react';

const tabs = [
  { name: 'Settings', href: '#', current: false },
  { name: 'Messages', href: '#', current: false },
  { name: 'Archive', href: '#', current: false },
  { name: 'Notifications', href: '#', current: true },
];

export const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(3);
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option>Settings</option>
          <option>Messages</option>
          <option>Archive</option>
          <option selected>Notifications</option>
        </select>
      </div>

      <div className="hidden sm:block bg-gray-50 p-1">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-1">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                className={
                  idx === selectedTab
                    ? 'shrink-0 rounded-t-lg border border-gray-300 border-b-white px-3 py-2 text-sm font-medium text-sky-600 flex-row flex space-x-1 cursor-pointer'
                    : 'shrink-0 rounded-t-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 flex-row flex space-x-1 cursor-pointer'
                }
                onClick={() => setSelectedTab(idx)}>
                <span className="py-1 my-1 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                <span>{tab.name}</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
