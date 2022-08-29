import Image from 'next/dist/client/image';
import {useTheme} from 'next-themes'
import {DASHBOARD_DATA} from '../data/data';
export default function Sidebar(){

    const {theme, setTheme} = useTheme()
    return(
        <div className='h-screen py-4 px-4 pb-8 mr-0 pr-0 bg-bgcolor dark:bg-darkbg flex justify-start flex-col align-start w-56 gap-5'>
            <div className='flex flex-row justify-end'>
                <button
                aria-label="Toggle "
                type="button"
                className="p-3 h-12 w-12 bg-white"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Dark Mode</button>
            
            </div> 
            <div>
                    LOGO

            </div>
            <div className=' py-4 pr-0 px-3 '>
                <ul class="space-x-2">
                    

                {DASHBOARD_DATA.map((it) => (
            <li>
 {it.status==false ? (
    <a href="#" className="flex items-center p-2 pr-0 text-base font-normal text-gray-900 rounded-full rounded-r-none dark:text-white hover:bg-fgcolor dark:hover:bg-darkfg">
        <div className='w-5'> {it.icon}</div>
        <span className="ml-3">{it.title}</span>
    </a>

    ):(
        <a href="#" className="flex items-center p-2 pr-0 bg-fgcolor text-base font-normal text-blue-500 rounded-full rounded-r-none dark:text-white hover:bg-fgcolor dark:bg-darkfg dark:hover:bg-darkfg">
            <div className='w-5'> {it.icon}</div>
            <span className="ml-3">{it.title}</span>
        </a>
       
    )}
</li>            
            
            
          ))}



                    
                </ul>   
            </div>
                        
        </div>
    );
}