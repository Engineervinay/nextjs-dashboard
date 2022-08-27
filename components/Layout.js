
import Sidebar from './sidebar';
import Image from 'next/image';
import bell from './bell.png';
import avatar from './favico.jpg';
export default function Layout () {
  return (
    <div className="h-screen flex flex-row justify-start">
    <Sidebar />
    <div className="bg-fgcolor  m-2 flex-1 p-4 text-text rounded-sm">
    <div class="flex flex-row justify-end ">
    <div class="relative h-5 text-gray-600">
        <input type="search" name="serch" placeholder="Search" class="bg-searchbar h-5 px-6 pr-10 rounded-full text-sm focus:outline-none"/>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>
<div className="w-5 h-5 relative"> 
  <Image
    src={avatar}
    alt="Picture of the author"
    layout="fill" // required
    objectFit="cover" // change to suit your needs
    className="rounded-full" // just an example
  />
</div>
</div>
    </div>
  </div>
  );
}

