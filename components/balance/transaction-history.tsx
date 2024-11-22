"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "TX-001",
    date: "2024-03-15",
    type: "debit",
    description: "Bus Ticket - Mumbai to Pune",
    amount: 450,
  },
  {
    id: "TX-002",
    date: "2024-03-14",
    type: "credit",
    description: "Added Money via UPI",
    amount: 1000,
  },
  {
    id: "TX-003",
    date: "2024-03-10",
    type: "debit",
    description: "Bus Ticket - Pune to Mumbai",
    amount: 450,
  },
  {
    id: "TX-004",
    date: "2024-03-05",
    type: "credit",
    description: "Refund - Cancelled Booking",
    amount: 350,
  },
];

const typeColors = {
  credit: "success",
  debit: "destructive",
} as const;

export function TransactionHistory() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>
              <Badge variant={typeColors[transaction.type as keyof typeof typeColors]}>
                {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              ₹{transaction.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}