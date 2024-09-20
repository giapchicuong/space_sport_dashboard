import React from 'react';
import DefaultNavbar from './DefaultNavbar';
import { AiOutlineDashboard, AiOutlineProduct } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTransportationRings } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa';
import { GrAnalytics } from 'react-icons/gr';

export default function SideBar() {
    return (
        <aside className='min-w-[240px] p-5 flex flex-col gap-10'>
            <div className='flex justify-center py-1 items-center gap-1'>
                <p className='text-xl font-extrabold text-primary'>Space</p>
                <p className='text-xl font-extrabold'>Spost</p>
            </div>

            <div className="flex flex-col gap-2.5">
                <DefaultNavbar
                    title='Tổng quan'
                    linkTo=''
                    isActive={true}
                    icon={<AiOutlineDashboard className='text-white text-xl' />}
                />

                <DefaultNavbar
                    title='Đơn hàng'
                    linkTo=''
                    isActive={false}
                    icon={<MdOutlineProductionQuantityLimits className='text-black text-xl' />}
                />

                <DefaultNavbar
                    title='Vận chuyển'
                    linkTo=''
                    isActive={false}
                    icon={<GiTransportationRings className='text-black text-xl' />}
                />

                <DefaultNavbar
                    title='Sản phẩm'
                    linkTo=''
                    isActive={false}
                    icon={<AiOutlineProduct className='text-black text-xl' />}
                />

                <DefaultNavbar
                    title='Khách hàng'
                    linkTo=''
                    isActive={false}
                    icon={<FaRegUser className='text-black text-xl' />}
                />

                <DefaultNavbar
                    title='Báo cáo'
                    linkTo=''
                    isActive={false}
                    icon={<GrAnalytics className='text-black text-xl' />}
                />
            </div>

        </aside>
    );
}
