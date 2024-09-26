import React from 'react';
import { classifyOrderStatus, classsifyInvoiceType, classsifyPaymentMethod } from './Classify';
import { Link } from 'react-router-dom';

export default function DefaultTable({ thead, tbody }) {
    return (
        <table className="table-auto w-full h-fit text-textColor">

            <thead className='bg-inputPlaceholder'>

                <tr>

                    {thead && thead.map((item, index) =>

                        <th key={index} className='p-5 text-base font-bold text-start whitespace-nowrap first:rounded-l-xl last:rounded-r-xl'>{item.title}</th>
                    )}
                </tr>
            </thead>

            <tbody>
                {tbody && tbody.map((item, index) =>

                    <tr className='border-b' key={index}>

                        {item.data && item.data.map((cell, cellIndex) =>

                            <React.Fragment key={cellIndex}>

                                {cell.title &&
                                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>

                                        <Link to={`${item.linkTo ?? ''}`}>

                                            {cell.title}
                                        </Link>
                                    </td>
                                }

                                {cell.paymentId &&
                                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>

                                        <Link to={`${item.linkTo ?? ''}`}>

                                            {classsifyPaymentMethod(cell.paymentId)}
                                        </Link>
                                    </td>
                                }

                                {cell.invoiceId &&
                                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>

                                        <Link to={`${item.linkTo ?? ''}`}>

                                            {classsifyInvoiceType(cell.invoiceId)}
                                        </Link>
                                    </td>
                                }

                                {cell.statusId &&
                                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>

                                        <Link to={`${item.linkTo ?? ''}`}>

                                            {classifyOrderStatus(cell.statusId)}
                                        </Link>
                                    </td>
                                }
                            </React.Fragment>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );
}
