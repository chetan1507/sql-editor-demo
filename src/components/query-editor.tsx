interface QueryEditorProps {
  query: string;
  updateQuery: (query: string) => void;
  handleRunQuery: () => void;
}

export const QueryEditor = ({ query, updateQuery, handleRunQuery }: QueryEditorProps) => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          id="OrderNotes"
          className="w-full resize-none border-none p-2 align-top focus:ring-0 sm:text-sm"
          rows={4}
          placeholder="Write your query here..."
          value={query}
          onChange={e => {
            updateQuery(e.target.value);
          }}></textarea>

        <div className="flex items-center justify-end gap-2 bg-white p-3">
          <button
            type="button"
            onClick={() => {
              updateQuery('');
            }}
            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600">
            Clear
          </button>

          <button
            type="button"
            onClick={handleRunQuery}
            className={`rounded ${
              query.length > 0
                ? 'bg-indigo-600 text-white  hover:bg-indigo-700'
                : 'bg-gray-50 text-gray-800'
            } px-3 py-1.5 text-sm font-medium text-white`}>
            Run
          </button>
        </div>
      </div>
    </div>
  );
};
