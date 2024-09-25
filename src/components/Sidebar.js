import React from 'react';
import DefaultNavbar from './DefaultNavbar';
import { AiOutlineApartment, AiOutlineCodeSandbox, AiOutlineDashboard, AiOutlineProduct } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { GrAnalytics } from 'react-icons/gr';
import { LiaFileInvoiceSolid, LiaUsersSolid } from 'react-icons/lia';
import { HiOutlineBuildingStorefront, HiOutlineUsers } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';

export default function SideBar() {
    const location = useLocation();

    const url = location.pathname.split('/')[2] ?? ''

    const menuItems = [
        { title: 'Tổng quan', linkTo: '', icon: <AiOutlineDashboard className='text-black text-xl' /> },
        { title: 'Báo cáo', linkTo: 'analyst', icon: <GrAnalytics className='text-black text-xl' /> },
        { title: 'Đơn hàng', linkTo: 'orders', icon: <MdOutlineProductionQuantityLimits className='text-black text-xl' /> },
        { title: 'Hóa đơn', linkTo: 'invoices', icon: <LiaFileInvoiceSolid className='text-black text-xl' /> },
        { title: 'Kho hàng', linkTo: 'inventory', icon: <HiOutlineBuildingStorefront className='text-black text-xl' /> },
        { title: 'Sản phẩm', linkTo: 'products', icon: <AiOutlineCodeSandbox className='text-black text-xl' /> },
        { title: 'Danh mục', linkTo: 'categories', icon: <AiOutlineProduct className='text-black text-xl' /> },
        { title: 'Người bán', linkTo: 'suppliers', icon: <LiaUsersSolid className='text-black text-xl' /> },
        { title: 'Nhân viên', linkTo: 'users', icon: <HiOutlineUsers className='text-black text-xl' /> },
        { title: 'Vai trò', linkTo: 'groups', icon: <FaRegUser className='text-black text-xl' /> },
        { title: 'Nhóm quyền', linkTo: 'roles', icon: <AiOutlineApartment className='text-black text-xl' /> },
    ];

    return (
        <aside className='min-w-[240px] p-5 flex flex-col gap-10'>

            <div className='flex justify-center py-1 items-center gap-1'>

                <p className='text-xl font-extrabold text-primary'>Space</p>

                <p className='text-xl font-extrabold'>Spost</p>
            </div>

            <div className="flex flex-col gap-2">

                {menuItems.map((item) => (

                    <DefaultNavbar
                        key={item.linkTo}
                        title={item.title}
                        linkTo={item.linkTo}
                        isActive={url === item.linkTo}
                        icon={item.icon}
                    />
                ))}
            </div>
        </aside>
    );
}
