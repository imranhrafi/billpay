import Image from "next/image";
import Card from "../components/ui/card";
import IncomeChart from "../components/home/IncomeChart";
import OutcomeChart from "../components/home/OutcomeChart";
import LimitProgressBar from "../components/home/LimitProgressBar";
import TransactionOverview from "../components/home/BarChart";
import Spending from "../components/home/Spending";
import Invoices from "../components/home/invoice-table/invoices";
import PreviousTransaction from "../components/home/prev-transaction";

export default function Page() {
  return (
    <section className='px-4 md:px-4'>
      {/* TOP ROW */}
      <div className='flex flex-col items-center gap-8 lg:flex-row'>
        <Card className='w-full h-[264px] lg:max-w-[450px] bg-primary text-primary-foreground p-4 md:p-8 relative flex flex-col items-start lg:flex-auto'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col'>
              <p className='text-base md:text-lg'>Balance</p>
              <p className='text-2xl font-bold md:text-3xl'>
                $4811,211
              </p>
            </div>
            <Image
              src='/images/circle.svg'
              alt='circle'
              width={38}
              height={24}
            />
          </div>
          <div className='flex items-center justify-between w-full mt-4 md:mt-auto'>
            <div>
              <p>Valid Thru</p>
              <p className='font-bold'>12/24</p>
            </div>
            <div>
              <p className='font-bold'>1234 5678 9012 3456</p>
            </div>
          </div>
          <div className='border rounded-full border-card w-[164px] h-[164px] flex justify-center items-center absolute -bottom-20 -right-20 md:w-[276px] md:h-[276px] md:-bottom-28 md:-right-28 lg:w-[376px] lg:h-[376px] lg:-bottom-36 lg:-right-36'>
            <div className='border rounded-full border-card w-[116px] h-[116px] flex justify-center items-center md:w-[196px] md:h-[196px] lg:w-[296px] lg:h-[296px]'>
              <div className='border rounded-full border-card w-[52px] h-[52px] flex justify-center items-center md:w-[88px] md:h-[88px] lg:w-[128px] lg:h-[128px]'></div>
            </div>
          </div>
        </Card>

        <div className='flex flex-col w-full gap-8 md:flex-row lg:flex-1'>
          <Card className='flex-1 p-8 md:w-1/2'>
            <IncomeChart />
          </Card>
          <Card className='flex-1 p-8 md:w-1/2'>
            <OutcomeChart />
          </Card>
        </div>

        <Card className='h-[264px] p-4 md:p-8 flex flex-col items-center'>
          <h1 className='text-2xl font-bold md:text-3xl'>Limit</h1>
          <LimitProgressBar
            progress={70}
            strokeColor='#428777'
            textColor='text-black'
          />
        </Card>
      </div>

      {/* BOTTOM ROW */}
      <div className='flex flex-col gap-8 mt-8 lg:flex-row'>
        <div className='flex-1'>
          <Card>
            <TransactionOverview />
          </Card>
        </div>
        <div className='flex-1'>
          <Spending />
        </div>
      </div>

      <div className='grid w-full grid-cols-1 gap-12 mt-14 lg:grid-cols-2'>
        <div className='w-full'>
          <Invoices />
        </div>
        <div className='w-full'>
          <PreviousTransaction />
        </div>
      </div>
    </section>
  );
}
