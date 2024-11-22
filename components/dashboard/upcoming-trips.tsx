"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

const upcomingTrips = [
  {
    route: "Mumbai → Pune",
    date: "2024-03-20",
    seats: "2A",
    status: "Confirmed",
    amount: 450,
  },
  {
    route: "Pune → Mumbai",
    date: "2024-03-25",
    seats: "3B",
    status: "Confirmed",
    amount: 450,
  },
  {
    route: "Mumbai → Nashik",
    date: "2024-04-01",
    seats: "1C",
    status: "Pending",
    amount: 350,
  },
];

export function UpcomingTrips() {
  const handleCancel = (route: string, date: string) => {
    toast.success("Trip cancellation request submitted", {
      description: `Your trip from ${route} on ${date} will be cancelled.`,
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Route</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Seats</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingTrips.map((trip, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{trip.route}</TableCell>
            <TableCell>{trip.date}</TableCell>
            <TableCell>{trip.seats}</TableCell>
            <TableCell>{trip.status}</TableCell>
            <TableCell className="text-right">₹{trip.amount}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleCancel(trip.route, trip.date)}
              >
                Cancel
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}