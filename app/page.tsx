import Image from "next/image";
import Card from "../components/ui/card";
import IncomeChart from "../components/home/IncomeChart";
import OutcomeChart from "../components/home/OutcomeChart";
import LimitProgressBar from "../components/home/LimitProgressBar";
import TransactionOverview from "../components/home/BarChart";
import Spending from "../components/home/Spending";
import LatestInvoices from "../components/home/invoice-table/LatestInvoices";

export default function Page() {
  return (
    <section className='px-4 md:px-0'>
      {/* TOP ROW */}
      <div className='flex flex-col items-center gap-8 lg:flex-row'>
        <div className='w-full lg:flex-1'>
          <Card className='h-[264px] bg-primary text-primary-foreground p-4 md:p-8 relative flex flex-col items-start'>
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
                I
              </div>
            </div>
          </Card>
        </div>
        <div className='flex flex-col w-full gap-8 md:flex-row lg:flex-1'>
          <div className='flex-1'>
            <IncomeChart />
          </div>
          <div className='flex-1'>
            <OutcomeChart />
          </div>
        </div>
        <div className=''>
          <Card className='h-[264px] p-4 md:p-8'>
            <h1 className='text-2xl font-bold md:text-3xl'>Limit</h1>
            <LimitProgressBar
              progress={75}
              strokeColor='#F0CA43'
              textColor='white'
            />
          </Card>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className='flex flex-col gap-8 mt-8 lg:flex-row'>
        <div className='flex-1'>
          <Card>
            <TransactionOverview />
          </Card>
        </div>
        <div className='flex-1 w-full'>
          <Spending />
        </div>
      </div>
      <LatestInvoices />
    </section>
  );
}