import React from 'react'

export default function DataTable() {
  return (
    
<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                   ID Number
                </th>
                <th scope="col" class="py-3 px-6">
                    Nickname
                </th>
                <th scope="col" class="py-3 px-6">
                    Registration Time
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td class="py-4 px-6">
                    2
                </td>
                <td class="py-4 px-6">
                    3
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   4
                </th>
                <td class="py-4 px-6">
                   5
                </td>
                <td class="py-4 px-6">
                    6
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    7
                </th>
                <td class="py-4 px-6">
                    8
                </td>
                <td class="py-4 px-6">
                   9
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

