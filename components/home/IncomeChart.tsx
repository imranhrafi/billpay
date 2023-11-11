"use client";
import { LineChart, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "January",
    income: 1200,
  },
  {
    month: "February",
    income: 3000,
  },
  {
    month: "March",
    income: 2000,
  },
  {
    month: "April",
    income: 2780,
  },
  {
    month: "May",
    income: 1890,
  },
  {
    month: "June",
    income: 2390,
  },
  {
    month: "July",
    income: 3490,
  },
];

export default function IncomeChart() {
  const gradient =
    "linear-gradient(180deg, rgba(66, 135, 119, 0.25) 0%, rgba(66, 135, 119, 0.00) 100%)";

  return (
    <div className='flex flex-col '>
      <div className='flex justify-between'>
        <div className=''>
          <h1 className='text-xl'>Income</h1>
          <h1 className='text-2xl font-bold'>${data[6].income}</h1>
        </div>
        <TrendingUp
          className=' text-primary'
          width={48}
          height={48}
        />
      </div>

      <ResponsiveContainer width='100%' height={120}>
        <AreaChart data={data} width={275} height={118}>
          <defs>
            <linearGradient
              id='incomeGradient'
              x1='137.5'
              y1='0'
              x2='137.5'
              y2='118'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#428777' stop-opacity='0.25' />
              <stop
                offset='1'
                stop-color='#428777'
                stop-opacity='0'
              />
            </linearGradient>
          </defs>
          <Area
            type='monotone'
            dataKey='income'
            stroke='#428777'
            strokeWidth={5}
            fill='url(#incomeGradient)'
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
