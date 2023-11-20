import { TrendingDown, TrendingUp } from "lucide-react";
import Card from "../ui/card";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
type TransactionDataProps = {
  id: number;
  date: string;
  source: string;
  amount: string;
  status: "completed" | "pending" | "canceled";
};

const transactionData: TransactionDataProps[] = [
  {
    id: 1,
    date: "March 1, 2022",
    source: "Netflix Subscription",
    amount: "$100.00",
    status: "completed",
  },
  {
    id: 2,
    date: "March 1, 2022",
    source: "Paypal payment",
    amount: "$100.00",
    status: "canceled",
  },
  {
    id: 3,
    date: "March 1, 2022",
    source: "Spotify Subscription",
    amount: "$100.00",
    status: "pending",
  },
];

export default function PreviousTransaction() {
  return (
    <Card className='p-8'>
      <h1 className='mb-8 text-2xl font-bold'>
        Previous Transaction
      </h1>
      <Table>
        <TableBody>
          {transactionData.map((item) => (
            <TableRow key={item.id} className='border-b'>
              <TableCell>
                {item.status === "canceled" ? (
                  <div className='grid w-12 h-12 p-2 font-bold text-white bg-red-500 rounded-md place-items-center'>
                    <TrendingDown className='' />
                  </div>
                ) : (
                  <div className='grid w-12 h-12 p-2 font-bold text-white bg-green-500 rounded-md place-items-center'>
                    <TrendingUp className='' />
                  </div>
                )}
              </TableCell>
              <TableCell className='font-bold '>
                {item.source}
              </TableCell>
              <TableCell className='text-muted-foreground'>
                {item.date}
              </TableCell>
              <TableCell className='font-bold'>
                {item.amount}
              </TableCell>
              {/* status  -complete=green canceled=red pending=yellow */}
              {item.status === "completed" ? (
                <TableCell>
                  <span className='p-2 text-white bg-green-500 rounded-sm'>
                    {item.status}
                  </span>
                </TableCell>
              ) : item.status === "canceled" ? (
                <TableCell>
                  <span className='p-2 text-white bg-red-500 rounded-sm'>
                    {item.status}
                  </span>
                </TableCell>
              ) : (
                <TableCell>
                  <span className='p-2 text-white bg-yellow-500 rounded-sm'>
                    {item.status}
                  </span>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
