import Image from "next/dist/client/image";
import { useTheme } from "next-themes";
import LOGO from "./images/logo.png";
import { DASHBOARD_DATA } from "../data/data";
export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sm:h-screen  py-4 px-4 pb-8 sm:mr-0 m-auto pr-0 bg-bgcolor dark:bg-darkbg flex justify-start flex-col align-start w-56 gap-5">
      <div className="flex flex-row-reverse justify-end ">
        <button
          aria-label="Toggle"
          type="button"
          className="transition self-center p-1 pl-2 justify-self-center m-2 h-10 w-10 bg-darkbg rounded-lg dark:bg-bgcolor shadow-lg"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme == "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
        <div className="w-32 p-1 mx-auto"> <Image
              src={LOGO}
              alt="random logo"
              layout="responsive"
              objectFit="cover"
              className=""
            /></div>
      </div >
      <div className=" py-4 pr-0 pt-3 px-3 border-t border-gray-200 dark:border-gray-700">
        <ul className="space-x-2 space-y-2 ">
          {DASHBOARD_DATA.map((it) => (
            <li className="ml-0" key={it.title}>
              {it.status == false ? (
                <a
                  href="#"
                  className="flex items-center p-2 pr-0 py-1 text-base font-normal text-gray-900 rounded-full sm:rounded-r-none dark:text-white hover:bg-fgcolor hover:text-bgcolor dark:hover:bg-darkfg"
                >
                  <div className="w-5"> {it.icon}</div>
                  <span className="ml-3">{it.title}</span>
                </a>
              ) : (
                <a
                  href="#"
                  className="flex items-center p-2 pr-0 py-1 bg-fgcolor text-base font-normal text-bgcolor rounded-full sm:rounded-r-none dark:text-white hover:bg-fgcolor dark:bg-darkfg dark:hover:bg-darkfg"
                >
                  <div className="w-5"> {it.icon}</div>
                  <span className="ml-3">{it.title}</span>
                </a>
              )}
            </li>
          ))}
        </ul>

        <ul className="my-4 border-t border-gray-200 dark:border-gray-700 ">
          <li className="my-2 ml-0">
            <a
              href="#"
              className="flex items-center p-2 pr-0 py-1  text-base font-normal  rounded-full rounded-r-none dark:text-white hover:bg-fgcolor hover:text-bgcolor  dark:hover:bg-darkfg"
            >
              <div className="w-5">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </div>
              <span className="ml-3">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
