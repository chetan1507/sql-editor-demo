const stringifyData = (data: any) => {
  if (typeof data === 'object') {
    return JSON.stringify(data, null, 2);
  }

  return data;
};

export const TableView = ({ resultsData, error }: { resultsData: any[]; error: string | null }) => {
  const headers = resultsData?.length > 0 ? Object.keys(resultsData[0]) : [];

  if (error) {
    return (
      <div className="rounded-lg border border-gray-200 p-4 justify-start items-start">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 flex-col">
      <div className="rounded-t-lg">
        <table className="relative w-full divide-y-2 divide-gray-200 bg-white text-sm overflow-x-scroll">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="flex w-full">
              {headers.map((header, idx) => (
                <th
                  key={`${header}-${idx}`}
                  className="whitespace-nowrap px-4 py-2 font-medium w-32 text-gray-900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 flex flex-col overflow-y-auto h-[60svh]">
            {resultsData?.length === 0 && (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700" colSpan={headers.length}>
                  No results found
                </td>
              </tr>
            )}

            {resultsData?.length > 0 &&
              resultsData.map((row, idxRow) => (
                <tr key={`${row}-${idxRow}`} className="flex w-full">
                  {headers.map((header, idxCol) => (
                    <td
                      key={`${idxRow}-${header}-${idxCol}`}
                      className="whitespace-break-spaces  px-4 py-2 text-gray-700 w-32 overflow-clip"
                      title={stringifyData(row[header])}>
                      {stringifyData(row[header])}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
        <ol className="flex justify-end gap-1 text-xs font-medium ">
          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
              1
            </a>
          </li>

          <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};
