"use client";
import { TrendingDown } from "lucide-react";
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

export default function OutcomeChart() {
  const gradient =
    "linear-gradient(180deg, rgba(66, 135, 119, 0.25) 0%, rgba(66, 135, 119, 0.00) 100%)";

  return (
    <div className='flex flex-col '>
      <div className='flex justify-between'>
        <div className=''>
          <h1 className='text-xl'>Outcome</h1>
          <h1 className='text-2xl font-bold'>${data[6].income}</h1>
        </div>
        <TrendingDown
          className=' text-destructive'
          width={48}
          height={48}
        />
      </div>

      <ResponsiveContainer width='100%' height={120}>
        <AreaChart data={data} width={275} height={118}>
          <defs>
            <linearGradient
              id='outcomeGradient'
              x1='137.5'
              y1='0'
              x2='137.5'
              y2='118'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#EE4444' stop-opacity='0.25' />
              <stop
                offset='1'
                stop-color='#EE4444'
                stop-opacity='0'
              />
            </linearGradient>
          </defs>
          <Area
            type='monotone'
            dataKey='income'
            stroke='#EE4444'
            strokeWidth={5}
            fill='url(#outcomeGradient)'
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
