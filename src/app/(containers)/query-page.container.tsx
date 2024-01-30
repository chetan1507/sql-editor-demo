'use client';

import { ChartView } from '@/components/chart-view';
import { QueryEditor } from '@/components/query-editor';
import { QueryEditorMenu } from '@/components/query-editor-menu';
import { TableActionMenu } from '@/components/table-action-menu';
import { TableView } from '@/components/table-view';
import { getDataForQuery } from '@/services/data-query-service';
import { useState } from 'react';

export const QueryPageContainer = () => {
  const [query, setQuery] = useState('');
  const [resultsData, setResultsData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showChart, setShowChart] = useState(false);

  const handleRunQuery = async () => {
    if (query.length === 0) return;
    try {
      const res = await getDataForQuery(query);
      setError(null);
      setResultsData(res);
    } catch (err: any) {
      setError(err.message);
      setResultsData([]);
    }
  };

  return (
    <div className="flex grow flex-col bg-gray-50">
      <div className="p-2 flex flex-col ">
        <div className="flex-row flex">
          <h3 className="text-lg font-semibold py-2 grow">SQL Editor</h3>
          <QueryEditorMenu />
        </div>
        <QueryEditor query={query} updateQuery={setQuery} handleRunQuery={handleRunQuery} />
      </div>
      <div className="p-2 flex flex-col grow">
        <div className="flex flex-row">
          <h3 className="text-lg font-semibold grow py-2">Results</h3>
          <TableActionMenu setShowChart={setShowChart} />
        </div>
        {!showChart && <TableView resultsData={resultsData.slice(0, 10)} error={error}></TableView>}
        {showChart && <ChartView />}
      </div>
    </div>
  );
};
