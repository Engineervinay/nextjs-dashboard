import React from "react";
import { TABLE_DATA } from "../data/data";
export default function DataTable() {
  return (
    <div className=" my-5 overflow-x-auto relative">
      <table className="w-full text-sm text-left text dark:text-gray-400">
        <thead className="text-xs border-b text-gray-700 uppercase  bg-white dark:bg-darkcontainer  dark:text-white">
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
          {TABLE_DATA.map((it) => (
            <tr className="bg-white  dark:bg-darkcontainer   dark:text-white">
              <td
                scope="row"
                className="py-4 px-6 text-normal text-gray-900 whitespace-nowrap dark:text-white"
              >
                {it.ID}
              </td>
              <td className="py-4 px-6">{it.Nickname}</td>
              <td className="py-4 px-6">{it.Time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
