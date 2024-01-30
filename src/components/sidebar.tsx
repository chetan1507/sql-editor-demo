export const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-gray-50">
      <div className="px-4 py-6">
        <span className="grid h-10 w-64 place-content-center rounded-lg bg-gray-50 text-xs text-gray-600">
          Logo
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Saved Queries </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Banned Users
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Calendar
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden " open>
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
                <span className="text-sm font-medium"> Tables </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4 x">
                <li className="justify-space-between flex grow rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <a href="" className="flex grow rounded-lg px-4 py-2 ">
                    Categories
                  </a>
                  <div className="p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </li>

                <li className="justify-space-between flex grow rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <a href="" className="flex grow rounded-lg px-4 py-2 ">
                    Customers
                  </a>
                  <div className="p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
