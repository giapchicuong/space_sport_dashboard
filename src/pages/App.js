import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { FiBox } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import AreaChart from "../components/AreaChart";
import DefaultTable from "../components/DefaultTable";
import ButtonCalendar from "../components/ButtonCalendar";
import { overviewTable } from "../mockData";

export default function App() {

  const { pathname } = useLocation()

  return (
    <main className="flex relative z-10 w-full h-screen overflow-hidden">

      <SideBar />

      <article className="w-full h-full flex flex-col flex-grow-0 hide_scroll ">

        <Header />

        <div className="w-full h-full p-5 bg-primaryBg overflow-y-auto hide-scroll">

          {
            pathname === '/admin' ? <DashboardPage /> : <Outlet />
          }
        </div>
      </article>
    </main>
  );
}

;



export function DashboardPage() {
  return (
    <main className='w-full h-fit flex flex-col gap-5'>

      <h1 className="text-[32px] font-semibold">Tổng quan</h1>

      <div className="grid grid-cols-4 gap-10">

        <div className="w-full p-3 flex flex-col justify-between aspect-video bg-white rounded-[14px] shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex flex-col gap-2">

              <p className="text-base font-normal text-stroke">Tổng người mua hàng</p>

              <p className="text-[28px] font-bold">10.000</p>
            </div>

            <div className="flex justify-center items-center w-[60px] rounded-3xl bg-iconDashboard1 opacity-60 aspect-square">

              <AiOutlineUsergroupAdd className="text-3xl text-black" />
            </div>
          </div>

          <div className="flex items-center gap-2">

            <HiOutlineArrowTrendingUp className="text-base font-normal text-uptrend" />

            <p className="text-base font-normal text-uptrend">8.5%</p>

            <p className="text-base font-normal text-uptrendText">Up from yesterday</p>
          </div>
        </div>

        <div className="w-full p-3 flex flex-col justify-between aspect-video bg-white rounded-[14px] shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex flex-col gap-2">

              <p className="text-base font-normal text-stroke">Tổng đơn hàng</p>

              <p className="text-[28px] font-bold">50.000</p>
            </div>

            <div className="flex justify-center items-center w-[60px] rounded-3xl bg-iconDashboard2 opacity-60 aspect-square">

              <FiBox className="text-3xl text-black" />
            </div>
          </div>

          <div className="flex items-center gap-2">

            <HiOutlineArrowTrendingUp className="text-base font-normal text-uptrend" />

            <p className="text-base font-normal text-uptrend">8.5%</p>

            <p className="text-base font-normal text-uptrendText">Up from yesterday</p>
          </div>
        </div>


        <div className="w-full p-3 flex flex-col justify-between aspect-video bg-white rounded-[14px] shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex flex-col gap-2">

              <p className="text-base font-normal text-stroke">Tổng doanh thu</p>

              <p className="text-[28px] font-bold">3.000</p>
            </div>

            <div className="flex justify-center items-center w-[60px] rounded-3xl bg-iconDashboard3 opacity-60 aspect-square">

              <FaChartLine className="text-3xl text-black" />
            </div>
          </div>

          <div className="flex items-center gap-2">

            <HiOutlineArrowTrendingUp className="text-base font-normal text-uptrend" />

            <p className="text-base font-normal text-uptrend">8.5%</p>

            <p className="text-base font-normal text-uptrendText">Up from yesterday</p>
          </div>
        </div>


        <div className="w-full p-3 flex flex-col justify-between aspect-video bg-white rounded-[14px] shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex flex-col gap-2">

              <p className="text-base font-normal text-stroke">Tổng đơn hàng đang nợ</p>

              <p className="text-[28px] font-bold">0</p>
            </div>

            <div className="flex justify-center items-center w-[60px] rounded-3xl bg-iconDashboard4 opacity-60 aspect-square">

              <RxCountdownTimer className="text-3xl text-black" />
            </div>
          </div>

          <div className="flex items-center gap-2">

            <HiOutlineArrowTrendingUp className="text-base font-normal text-uptrend" />

            <p className="text-base font-normal text-uptrend">8.5%</p>

            <p className="text-base font-normal text-uptrendText">Up from yesterday</p>
          </div>
        </div>
      </div>

      <div className="w-full p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">

        <div className="flex items-center justify-between">

          <p className="text-2xl font-bold">Chi tiết doanh thu</p>

          <ButtonCalendar />

        </div>


        <AreaChart />
      </div>


      <div className="w-full h-auto p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">

        <div className="flex items-center justify-between">

          <p className="text-2xl font-bold">Chi tiết hóa đơn</p>

          <ButtonCalendar />
        </div>

        <DefaultTable thead={overviewTable.thead} tbody={overviewTable.tbody} />

      </div>

      <div className="py-2.5"></div>

    </main>
  );
}

