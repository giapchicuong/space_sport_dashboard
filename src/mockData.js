export const overviewTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Tên sản phẩm',
        },
        {
            id: 3,
            title: 'Nhân viên bán',
        },
        {
            id: 4,
            title: 'Tổng tiền',
        },
        {
            id: 5,
            title: 'Ngày bán',
        },
        {
            id: 6,
            title: 'Trạng thái',
        },
    ],
    tbody: [
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Nước mía',
                },
                {
                    id: 3,
                    title: 'Cường',
                },
                {
                    id: 4,
                    title: '45.000',
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 6,
                    statusId: 1,
                },
            ]
        },
        {
            data: [
                {
                    id: 1,
                    title: '2',
                },
                {
                    id: 2,
                    title: 'Nước cam',
                },
                {
                    id: 3,
                    title: 'Cường',
                },
                {
                    id: 4,
                    title: '25.000',
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 6,
                    statusId: 2,
                },
            ]
        },
        {
            data: [
                {
                    id: 1,
                    title: '3',
                },
                {
                    id: 2,
                    title: 'Trà đào',
                },
                {
                    id: 3,
                    title: 'Cường',
                },
                {
                    id: 4,
                    title: '25.000',
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 6,
                    statusId: 3,
                },
            ]
        }
    ]

}

export const orderTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Tên nhân viên',
        },
        {
            id: 3,
            title: 'Tổng tiền',
        },
        {
            id: 4,
            title: 'Phương thức thanh toán',
        },
        {
            id: 5,
            title: 'Ngày bán',
        },
        {
            id: 6,
            title: 'Trạng thái',
        },
    ],
    tbody: [
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    title: '50.000',
                },
                {
                    id: 4,
                    paymentId: 1,
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 6,
                    statusId: 1,
                },
            ]
        },
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    title: '50.000',
                },
                {
                    id: 4,
                    paymentId: 2,
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 6,
                    statusId: 2,
                },
            ]
        },
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    title: '50.000',
                },
                {
                    id: 4,
                    paymentId: 3,
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 6,
                    statusId: 3,
                },
            ]
        },
    ]

}

export const invoiceTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Tên nhân viên',
        },
        {
            id: 3,
            title: 'Loại hóa đơn',
        },
        {
            id: 4,
            title: 'Tổng tiền',
        },
        {
            id: 5,
            title: 'Phương thức thanh toán',
        },
        {
            id: 6,
            title: 'Ngày bán',
        },
        {
            id: 7,
            title: 'Trạng thái',
        },
    ],
    tbody: [
        {
            linkTo: 1,
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    invoiceId: 1
                },
                {
                    id: 4,
                    title: '50.000',
                },
                {
                    id: 5,
                    paymentId: 1,
                },
                {
                    id: 6,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 7,
                    statusId: 1,
                },
            ]
        },
        {
            linkTo: 2,
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    invoiceId: 1
                },
                {
                    id: 4,
                    title: '50.000',
                },
                {
                    id: 5,
                    paymentId: 3,
                },
                {
                    id: 6,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 7,
                    statusId: 1,
                },
            ]
        },
        {
            linkTo: 3,
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    invoiceId: 2
                },
                {
                    id: 4,
                    title: '50.000',
                },
                {
                    id: 5,
                    paymentId: 2,
                },
                {
                    id: 6,
                    title: '15:00 26/09/2024',
                },
                {
                    id: 7,
                    statusId: 1,
                },
            ]
        },
    ]

}

export const inventoryTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Tên nhân viên',
        },
        {
            id: 3,
            title: 'Tên sản phẩm',
        },
        {
            id: 4,
            title: 'Số lượng',
        },
        {
            id: 5,
            title: 'Ngày nhập',
        },

    ],
    tbody: [
        {
            linkTo: 1,
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    title: 'Nước mía',
                },
                {
                    id: 4,
                    title: '50',
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
            ]
        },
        {
            linkTo: 2,
            data: [
                {
                    id: 1,
                    title: '2',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    title: 'Nước Cam',
                },
                {
                    id: 4,
                    title: '20',
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
            ]
        },
        {
            linkTo: 3,
            data: [
                {
                    id: 1,
                    title: '3',
                },
                {
                    id: 2,
                    title: 'Cường',
                },
                {
                    id: 3,
                    title: 'Trà đào',
                },
                {
                    id: 4,
                    title: '30',
                },
                {
                    id: 5,
                    title: '15:00 26/09/2024',
                },
            ]
        },
    ]

}

export const productTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Hình ảnh',
        },
        {
            id: 3,
            title: 'Tên sản phẩm',
        },
        {
            id: 4,
            title: 'Số lượng',
        },
        {
            id: 5,
            title: 'Đơn vị tính',
        },
        {
            id: 6,
            title: 'Giá',
        },
        {
            id: 7,
            title: 'Danh mục',
        },
        {
            id: 8,
            title: 'Hành động',
        },

    ],
    tbody: [
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/2/19/cach-lam-nuoc-cam-ep-ngon-va-thom-ket-hop-voi-le-va-gung-5-1645248090817401855254.jpg',
                },
                {
                    id: 3,
                    title: 'Nước cam',
                },
                {
                    id: 4,
                    title: '30',
                },
                {
                    id: 5,
                    title: 'Phần',
                },
                {
                    id: 6,
                    title: '15.000',
                },
                {
                    id: 7,
                    title: 'Nước uống',
                },
            ]
        },
        {
            data: [
                {
                    id: 1,
                    title: '2',
                },
                {
                    id: 2,
                    image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
                },
                {
                    id: 3,
                    title: 'Nước mía',
                },
                {
                    id: 4,
                    title: '50',
                },
                {
                    id: 5,
                    title: 'Phần',
                },
                {
                    id: 6,
                    title: '10.000',
                },
                {
                    id: 7,
                    title: 'Nước uống',
                },
            ]
        },
        {
            data: [
                {
                    id: 1,
                    title: '3',
                },
                {
                    id: 2,
                    image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
                },
                {
                    id: 3,
                    title: 'Trà đào',
                },
                {
                    id: 4,
                    title: '15',
                },
                {
                    id: 5,
                    title: 'Phần',
                },
                {
                    id: 6,
                    title: '20.000',
                },
                {
                    id: 7,
                    title: 'Nước uống',
                },
            ]
        },
    ]

}

export const categoryTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Hình ảnh',
        },
        {
            id: 3,
            title: 'Tên danh mục',
        },
        {
            id: 4,
            title: 'Mô tả',
        },
        {
            id: 5,
            title: 'Ngày tạo',
        },
        {
            id: 6,
            title: 'Hành động',
        },

    ],
    tbody: [
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/2/19/cach-lam-nuoc-cam-ep-ngon-va-thom-ket-hop-voi-le-va-gung-5-1645248090817401855254.jpg',
                },
                {
                    id: 3,
                    title: 'Nước ngọt',
                },
                {
                    id: 4,
                    title: 'Nước ngọt',
                },
                {
                    id: 5,
                    title: '15:00 30/09/2024',
                },
            ]
        },
    ]

}

export const supplierTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Tên công ty',
        },
        {
            id: 3,
            title: 'Phone',
        },
        {
            id: 4,
            title: 'Address',
        },
        {
            id: 5,
            title: 'City',
        },
        {
            id: 6,
            title: 'Hành động',
        },

    ],
    tbody: [
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Công ty TNHH Nước Ngọt',
                },
                {
                    id: 3,
                    title: '0339201605',
                },
                {
                    id: 4,
                    title: 'Dĩ An',
                },
                {
                    id: 5,
                    title: 'Bình Dương',
                },
            ]
        },
    ]

}

export const userTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Username',
        },
        {
            id: 3,
            title: 'Email',
        },
        {
            id: 4,
            title: 'Phone',
        },
        {
            id: 5,
            title: 'Group',
        },
        {
            id: 6,
            title: 'Hành động',
        },

    ],
    tbody: [
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'giapchicuong',
                },
                {
                    id: 3,
                    title: 'giapchicuong@gmail.com',
                },
                {
                    id: 4,
                    title: '0354438249',
                },
                {
                    id: 5,
                    title: 'Admin',
                },
            ]
        },
    ]

}

export const groupsTable = {
    thead: [
        {
            id: 1,
            title: 'ID',
        },
        {
            id: 2,
            title: 'Tên vai trò',
        },
        {
            id: 3,
            title: 'Mô tả vai trò',
        },
        {
            id: 4,
            title: 'Hành động',
        },

    ],
    tbody: [
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Admin',
                },
                {
                    id: 3,
                    title: 'Vai trò admin',
                },
            ]
        },
        {
            data: [
                {
                    id: 1,
                    title: '1',
                },
                {
                    id: 2,
                    title: 'Quản lý',
                },
                {
                    id: 3,
                    title: 'Vai trò quản lý',
                },
            ]
        },
    ]

}


export const productMenu = [
    {
        id: 1,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 2,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 3,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
    {
        id: 4,
        title: 'String',
        price: '15.000',
        image: 'https://cdn.tgdd.vn/Products/Images/3226/195238/bhx/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202111061733148435.jpg',
        quantity: '50'
    },
    {
        id: 5,
        title: 'Pepsi',
        price: '15.000',
        image: 'https://product.hstatic.net/1000301274/product/_10100993__pepsi_cola_320ml_sleek_lon_29e233d9c27b4e6f85995a290d5fcad2.png',
        quantity: '50'
    },
    {
        id: 5,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 6,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 7,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
    {
        id: 8,
        title: 'String',
        price: '15.000',
        image: 'https://cdn.tgdd.vn/Products/Images/3226/195238/bhx/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202111061733148435.jpg',
        quantity: '50'
    },
    {
        id: 9,
        title: 'Pepsi',
        price: '15.000',
        image: 'https://product.hstatic.net/1000301274/product/_10100993__pepsi_cola_320ml_sleek_lon_29e233d9c27b4e6f85995a290d5fcad2.png',
        quantity: '50'
    },
    {
        id: 5,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 6,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 7,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
    {
        id: 8,
        title: 'String',
        price: '15.000',
        image: 'https://cdn.tgdd.vn/Products/Images/3226/195238/bhx/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202111061733148435.jpg',
        quantity: '50'
    },
    {
        id: 9,
        title: 'Pepsi',
        price: '15.000',
        image: 'https://product.hstatic.net/1000301274/product/_10100993__pepsi_cola_320ml_sleek_lon_29e233d9c27b4e6f85995a290d5fcad2.png',
        quantity: '50'
    },
    {
        id: 5,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 6,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 7,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
    {
        id: 8,
        title: 'String',
        price: '15.000',
        image: 'https://cdn.tgdd.vn/Products/Images/3226/195238/bhx/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202111061733148435.jpg',
        quantity: '50'
    },
    {
        id: 9,
        title: 'Pepsi',
        price: '15.000',
        image: 'https://product.hstatic.net/1000301274/product/_10100993__pepsi_cola_320ml_sleek_lon_29e233d9c27b4e6f85995a290d5fcad2.png',
        quantity: '50'
    },
    {
        id: 5,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 6,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 7,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
    {
        id: 8,
        title: 'String',
        price: '15.000',
        image: 'https://cdn.tgdd.vn/Products/Images/3226/195238/bhx/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202111061733148435.jpg',
        quantity: '50'
    },
    {
        id: 9,
        title: 'Pepsi',
        price: '15.000',
        image: 'https://product.hstatic.net/1000301274/product/_10100993__pepsi_cola_320ml_sleek_lon_29e233d9c27b4e6f85995a290d5fcad2.png',
        quantity: '50'
    },
    {
        id: 5,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 6,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 7,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
    {
        id: 8,
        title: 'String',
        price: '15.000',
        image: 'https://cdn.tgdd.vn/Products/Images/3226/195238/bhx/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202111061733148435.jpg',
        quantity: '50'
    },
    {
        id: 9,
        title: 'Pepsi',
        price: '15.000',
        image: 'https://product.hstatic.net/1000301274/product/_10100993__pepsi_cola_320ml_sleek_lon_29e233d9c27b4e6f85995a290d5fcad2.png',
        quantity: '50'
    },
]


export const productOrderMenu = [
    {
        id: 1,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 2,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 3,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
    {
        id: 1,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 2,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 3,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
    {
        id: 1,
        title: 'Trà đào',
        price: '30.000',
        image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596017380/blog/fdhbsx1x6tmyswssvb1v.jpg',
        quantity: '30'
    },
    {
        id: 2,
        title: 'Nước mía',
        price: '10.000',
        image: 'https://cdnphoto.dantri.com.vn/4p-2X1OJNf6w8zdlxX5e6JYWwr0=/thumb_w/1020/2023/05/28/nuocmia-12-1616975279087-1685270214183.jpg',
        quantity: '50'
    },
    {
        id: 3,
        title: 'Nước cam',
        price: '30.000',
        image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/11/7/uong-nuoc-cam-16993504421751885406385.jpg',
        quantity: '25'
    },
]