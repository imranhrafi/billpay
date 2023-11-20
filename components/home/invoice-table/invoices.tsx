import { TrendingDown } from "lucide-react";
import { Payment } from "../../../lib/type";
import Card from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { isNamedTupleMember } from "typescript";
import { cn } from "../../../lib/utils";

const Invoices = () => {
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

  return (
    <Card className='p-8'>
      <h1 className='mb-8 text-2xl font-bold'>Latest Invoices</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Invoice</TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'
            >
              <TableCell className='font-bold'>{item.id}</TableCell>
              <TableCell>{item.recipient}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <InvoiceStatusBadge status={item.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Invoices;

const InvoiceStatusBadge: React.FC<{ status: string }> = ({
  status,
}) => (
  <span
    className={cn(
      "border p-1",
      status === "failed" && "text-destructive border-destructive",
      status === "success" && "text-green-500 border-green-500",
      status === "processing" && "text-yellow-600 border-yellow-600"
    )}
  >
    {status}
  </span>
);
