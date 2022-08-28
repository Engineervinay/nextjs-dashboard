import React from 'react'

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
            <tr className="bg-white  dark:bg-darkcontainer   dark:text-white">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="py-4 px-6">
                    2
                </td>
                <td className="py-4 px-6">
                    3
                </td>
            </tr>
            <tr className="bg-white  dark:bg-darkcontainer dark:text-white dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   4
                </th>
                <td className="py-4 px-6">
                   5
                </td>
                <td className="py-4 px-6">
                    6
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-darkcontainer dark:text-white">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    7
                </th>
                <td className="py-4 px-6">
                    8
                </td>
                <td className="py-4 px-6">
                   9
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

