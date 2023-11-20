"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { flexRender } from "@tanstack/react-table";
import { InvoicesTableProps } from "./invoice-table";

export const InvoicesTable = ({ data }: InvoicesTableProps) => {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>(
    []
  );
  const handleCheckboxChange = (id: string) => {
    setSelectedInvoices((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const columns = [
    {
      Header: <Checkbox />,
      accessor: "id",
      Cell: ({ row }: any) => (
        <Checkbox
          checked={selectedInvoices.includes(row.original?.id)}
          onChange={() => handleCheckboxChange(row.original?.id)}
        />
      ), // Replace with your logic for rendering checkboxes
    },
    {
      Header: "ID Invoice",
      accessor: "id",
    },
    {
      Header: "Recipient",
      accessor: "email",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((headerGroup) => (
            <TableHead key={headerGroup.accessor}>
              {Array.isArray(headerGroup.Header) ? (
                headerGroup.Header.map((header) => (
                  <React.Fragment key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </React.Fragment>
                ))
              ) : (
                <TableHead>{headerGroup.Header}</TableHead>
              )}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      {/* TABLE BODY */}
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            {columns.map((column) => (
              <TableCell key={column.accessor}>
                {column.Cell
                  ? column.Cell({ row })
                  : row[column.accessor]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
