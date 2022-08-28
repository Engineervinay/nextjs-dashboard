
import {useTheme} from 'next-themes'

export default function Sidebar(){

    const {theme, setTheme} = useTheme()
    return(
        <div className='h-screen py-4 px-4 pb-8 bg-bgcolor dark:bg-darkbg flex justify-start flex-col align-start w-56 gap-5'>
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
                        
        </div>
    );
}