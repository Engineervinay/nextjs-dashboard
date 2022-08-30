import React from "react";
import { TABLE_DATA } from "../data/data";
import { useState, useEffect } from "react";
export default function DataTable() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(TABLE_DATA.slice(0, 5));
  const pages = [1, 2, 3];
  const updatePage = (p) => {
    if (p > 0 && p < 4) {
      setPage(p);
    } else {
    }
    setData(TABLE_DATA.slice(page * 5 - 5, page * 5));
  };

  useEffect(() => {}, [page]);
  return (
    <div className=" my-5 bg-white dark:bg-darkcontainer overflow-x-auto relative">
      <table className="w-full text-sm text-left text dark:text-gray-400">
        <thead className="text-xs border-b text-gray-700 uppercase    dark:text-white">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID Number
            </th>
            <th scope="col" className="py-3 px-6">
              Nickname
            </th>
            <th scope="col" className="py-3 px-6">
              Registration Time
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((it) => (
            <tr className="bg-white  dark:bg-darkcontainer   dark:text-white">
              <td
                scope="row"
                className="py-3 px-6 text-[12px] text-gray-900 whitespace-nowrap dark:text-white"
              >
                {it.ID}
              </td>
              <td className="py-3 px-6 text-[12px]">{it.Nickname}</td>
              <td className="py-3 px-6 text-[12px]">
                <pre>{it.Time}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="justify-center flex w-full content-center">
        {" "}
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a
              onClick={() => updatePage(page - 1)}
              class=" cursor-pointer block py-1 px-2 dark:text-white ml-auto leading-tight   rounded-full  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>

          {pages.map((it) =>
            page == it ? (
              <li>
                <a
                  onClick={() => updatePage(it)}
                  class="cursor-pointer py-1 mx-2 px-3 leading-tight  bg-bgcolor hover:bg-gray-100 text-white hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full"
                >
                  {it}
                </a>
              </li>
            ) : (
              <li>
                <a
                  onClick={() => updatePage(it)}
                  class=" cursor-pointer py-2 px-3 leading-tight  dark:text-white"
                >
                  {it}
                </a>
              </li>
            )
          )}

          <li>
            <a
              onClick={() => updatePage(page + 1)}
              class="block py-2 px-2 leading-tight  rounded-full  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
