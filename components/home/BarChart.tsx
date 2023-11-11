"use client";

import { ArrowDown, ChevronDown } from "lucide-react";
import {
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";

const data = [
  {
    month: "January",
    income: 3400,
    outcome: 2000,
    firstWeek: {
      income: 400,
      outcome: 240,
    },
    secondWeek: {
      income: 230,
      outcome: 250,
    },
    thirdWeek: {
      income: 300,
      outcome: 250,
    },
    forthWeek: {
      income: 300,
      outcome: 250,
    },
  },
  {
    month: "February",
    income: 3600,
    outcome: 2100,
    firstWeek: {
      income: 430,
      outcome: 250,
    },
    secondWeek: {
      income: 240,
      outcome: 260,
    },
    thirdWeek: {
      income: 310,
      outcome: 260,
    },
    forthWeek: {
      income: 310,
      outcome: 260,
    },
  },
  {
    month: "March",
    income: 3800,
    outcome: 2200,
    firstWeek: {
      income: 450,
      outcome: 270,
    },
    secondWeek: {
      income: 250,
      outcome: 270,
    },
    thirdWeek: {
      income: 330,
      outcome: 270,
    },
    forthWeek: {
      income: 330,
      outcome: 270,
    },
  },
  {
    month: "April",
    income: 3800,
    outcome: 2200,
    firstWeek: {
      income: 450,
      outcome: 270,
    },
    secondWeek: {
      income: 250,
      outcome: 270,
    },
    thirdWeek: {
      income: 330,
      outcome: 270,
    },
    forthWeek: {
      income: 330,
      outcome: 270,
    },
  },
  {
    month: "May",
    income: 3800,
    outcome: 2200,
    firstWeek: {
      income: 450,
      outcome: 270,
    },
    secondWeek: {
      income: 250,
      outcome: 270,
    },
    thirdWeek: {
      income: 330,
      outcome: 270,
    },
    forthWeek: {
      income: 330,
      outcome: 270,
    },
  },
  {
    month: "June",
    income: 3800,
    outcome: 2200,
    firstWeek: {
      income: 450,
      outcome: 270,
    },
    secondWeek: {
      income: 250,
      outcome: 270,
    },
    thirdWeek: {
      income: 330,
      outcome: 270,
    },
    forthWeek: {
      income: 330,
      outcome: 270,
    },
  },
];

export default function TransactionOverview() {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold'>Transaction Overview</h1>
      <div className='flex items-center gap-2 mt-6 mb-6 ml-6'>
        <p>Yearly</p> <ChevronDown />
      </div>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart data={data}>
          {/* <CartesianGrid strokeDasharray='3 3' /> */}
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='income'
            fill='#428777'
            name='Income'
            barSize={20}
          />
          <Bar
            dataKey='outcome'
            fill='#F0CA43'
            name='Outcome'
            barSize={20}
          />
          <Legend wrapperStyle={{ top: 4, right: 0 }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
