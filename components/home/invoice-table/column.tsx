"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "../../../lib/type";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { ChevronUp, ChevronsDownUp } from "lucide-react";

// Define columns with strongly type-checked components
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) =>
          table.toggleAllRowsSelected(!!value)
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      // A button that sorts the emails when clicked
      <Button
        variant='ghost'
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        Amount
        <ChevronsDownUp className='w-4 h-4 ml-2' />
      </Button>
    ),
    accessorFn: (row) => row.amount,
    cell: ({ row }) => (
      // Displaying emails in lowercase
      <div className='lowercase'>{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "recipient",
    header: "Recipient",
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue("recipient")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue("date")}</div>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue("status")}</div>
    ),
  },
];
