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

const tripHistory = [
  {
    id: "TR-001",
    route: "Mumbai → Pune",
    date: "2024-03-15",
    status: "completed",
    amount: 450,
    busType: "AC Sleeper",
    boardingPoint: "Dadar",
    dropPoint: "Pune Station",
  },
  {
    id: "TR-002",
    route: "Pune → Mumbai",
    date: "2024-03-10",
    status: "completed",
    amount: 450,
    busType: "AC Seater",
    boardingPoint: "Pune Station",
    dropPoint: "Dadar",
  },
  {
    id: "TR-003",
    route: "Mumbai → Nashik",
    date: "2024-03-05",
    status: "cancelled",
    amount: 350,
    busType: "Non-AC Sleeper",
    boardingPoint: "Borivali",
    dropPoint: "Nashik CBS",
  },
];

const statusColors = {
  completed: "success",
  cancelled: "destructive",
  refunded: "warning",
} as const;

export function TripHistoryTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Booking ID</TableHead>
          <TableHead>Route</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Bus Type</TableHead>
          <TableHead>Boarding</TableHead>
          <TableHead>Drop</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tripHistory.map((trip) => (
          <TableRow key={trip.id}>
            <TableCell className="font-medium">{trip.id}</TableCell>
            <TableCell>{trip.route}</TableCell>
            <TableCell>{trip.date}</TableCell>
            <TableCell>{trip.busType}</TableCell>
            <TableCell>{trip.boardingPoint}</TableCell>
            <TableCell>{trip.dropPoint}</TableCell>
            <TableCell>
              <Badge variant={statusColors[trip.status as keyof typeof statusColors]}>
                {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">₹{trip.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}