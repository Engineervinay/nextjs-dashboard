
import Sidebar from './sidebar';
import Image from 'next/image';
import Head from 'next/head';
import avatar from './favico.jpg';
import Container from './container';
import ContainerReferal from './ContainerReferal';
import DataTable from './DataTable';
export default function Layout () {
  return (
    <div className="h-screen flex flex-row justify-start ">
    <Sidebar />
    <div className="rounded-lg bg-fgcolor dark:bg-darkfg  m-4 flex-1 p-4 text-text">
    <div className="flex flex-row justify-end  gap-5">
    <div className="relative h-5 text-gray-600">
        <input type="search" name="serch" placeholder="Search" class="bg-searchbar h-5 px-6 pr-10 rounded-full text-sm focus:outline-none"/>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>
<div className="w-5 h-5 relative"> 
  <Image
    src={avatar}
    alt="Admin"
    layout="fill" 
    objectFit="cover" 
    className="rounded-full" 
  />
</div>
</div>

  <div className='text-xl my-4 '>My Team</div>
  <div className='flex flex-row space-x-4 justify-center'>
      <Container/>
      <ContainerReferal/>
  </div>
  <DataTable/>
    </div>
  </div>
  );
}

