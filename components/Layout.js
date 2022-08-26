
import Sidebar from './sidebar';
import Header from './header';

export default function Layout () {
  return (
    <div className="h-screen flex flex-row justify-start">
    <Sidebar />
    <div className="bg-fgcolor flex-1 p-4 text-text">
       home
    </div>
  </div>
  );
}

