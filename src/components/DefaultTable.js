import React from 'react';

export default function DefaultTable() {
    return (
        <table class="table-auto w-full h-full text-textColor border border-separate border-spacing-y-2.5">
            <thead className=''>
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                    <th>Year</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    <td>1961</td>
                    <td>1961</td>
                </tr>
                <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    <td>1972</td>
                    <td>1972</td>
                </tr>
                <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    <td>1975</td>
                    <td>1975</td>
                </tr>
            </tbody>
        </table>
    );
}
