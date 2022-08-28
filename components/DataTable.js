import React from 'react'

export default function DataTable() {
  return (
    
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
            <tr className="bg-white dark:bg-gray-800">
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

