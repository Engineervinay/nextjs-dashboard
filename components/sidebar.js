
import {useTheme} from 'next-themes'

export default function Sidebar(){

    const {theme, setTheme} = useTheme()
    return(
        <div className='h-screen py-4 px-4 pb-8 bg-bgcolor dark:bg-darkbg flex justify-between flex-col align-start w-56 '>
            LOGO 
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="p-3 h-12 w-12 bg-white"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Dark Mode</button>
        
        </div>
    );
}