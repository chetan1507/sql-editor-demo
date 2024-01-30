import { useState } from 'react';

export const QueryEditorMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-end space-x-2 py-2">
      <div className="relative">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
          <a
            href="#"
            className="border-e px-4 py-2 text-sm/none bg-white text-gray-600 hover:bg-gray-50 font-medium"
            title="Diff with saved query">
            Diff
          </a>

          <button
            className="border-e h-full p-1 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
            title="Goto previous query">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>

          <button
            className="h-full p-1 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
            title="Goto next query">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div
          className={`absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg outline-none ${
            showMenu ? 'block' : 'hidden'
          }`}
          role="menu">
          <div className="p-2">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem">
              Download as PDF
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem">
              Download as CSV
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem">
              Download as XLS
            </a>
          </div>

          <div className="p-2">
            <form method="POST" action="#">
              <button
                type="submit"
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                role="menuitem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
