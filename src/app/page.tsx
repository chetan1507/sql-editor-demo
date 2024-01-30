import { QueryEditor } from '@/components/query-editor';
import { Sidebar } from '@/components/sidebar';
import { TableView } from '@/components/table-view';
import Image from 'next/image';
import { QueryPageContainer } from './(containers)/query-page.container';
import { TabComponent } from '@/components/tab-component';

export default function Home() {
  return (
    <main className="flex container w-full h-screen flex-row mx-auto bg-gray-200">
      <div className="flex shrink">
        <Sidebar></Sidebar>
      </div>
      <div className="p-2 h-full flex-col flex grow">
        <TabComponent></TabComponent>
        <QueryPageContainer></QueryPageContainer>
      </div>
    </main>
  );
}
