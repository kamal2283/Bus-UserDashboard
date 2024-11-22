"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentTrips = [
  {
    route: "Mumbai → Pune",
    date: "2024-03-15",
    status: "Completed",
    amount: 450,
  },
  {
    route: "Pune → Mumbai",
    date: "2024-03-10",
    status: "Completed",
    amount: 450,
  },
  {
    route: "Mumbai → Nashik",
    date: "2024-03-05",
    status: "Completed",
    amount: 350,
  },
  {
    route: "Nashik → Mumbai",
    date: "2024-03-01",
    status: "Completed",
    amount: 350,
  },
];

export function RecentTrips() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Route</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentTrips.map((trip, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{trip.route}</TableCell>
            <TableCell>{trip.date}</TableCell>
            <TableCell>{trip.status}</TableCell>
            <TableCell className="text-right">₹{trip.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}