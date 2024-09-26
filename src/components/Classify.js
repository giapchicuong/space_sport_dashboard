export const classifyOrderStatus = (statusId) => {

    if (statusId === 1) return <p className='bg-bgComplete text-textComplete font-bold rounded-full w-fit px-2.5 py-1'>Thành công</p>

    if (statusId === 2) return <p className='bg-bgReject text-textReject font-bold rounded-full w-fit px-2.5 py-1'>Đang tiến trình</p>

    if (statusId === 3) return <p className='bg-bgProcess text-textProcess font-bold rounded-full w-fit px-2.5 py-1'>Thất bại</p>

    return <></>
}

export const classsifyPaymentMethod = (paymentId) => {

    if (paymentId === 1) return 'Tiền mặt'

    if (paymentId === 2) return 'Chuyển khoản'

    if (paymentId === 3) return 'Đang nợ'

    return ''

}

export const classsifyInvoiceType = (invoiceId) => {

    if (invoiceId === 1) return 'Thu'

    if (invoiceId === 2) return 'Chi'

    return ''

}
