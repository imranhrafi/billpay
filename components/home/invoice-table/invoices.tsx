import { Payment } from "../../../lib/type";

import Card from "../../ui/card";
import { columns } from "./column";
import InvoiceTable from "./invoice-table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
    date: "2023-11-14",
    recipient: "John Doe",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    date: "2023-11-15",
    recipient: "Jane Smith",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    date: "2023-11-16",
    recipient: "Alex Johnson",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
    date: "2023-11-17",
    recipient: "Emily Brown",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    date: "2023-11-18",
    recipient: "Michael Davis",
  },
];
export default function Invoices() {
  return (
    <Card className='p-8'>
      <h1 className='mb-8 text-2xl font-bold'>Latest Invoices</h1>
      <InvoiceTable data={data} columns={columns} />
    </Card>
  );
}
