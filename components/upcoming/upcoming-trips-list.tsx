"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const upcomingTrips = [
  {
    id: "TR-004",
    route: "Mumbai → Pune",
    date: "2024-03-20",
    time: "07:00 AM",
    seats: "2A, 2B",
    status: "confirmed",
    amount: 900,
    busType: "AC Sleeper",
    boardingPoint: "Dadar",
    dropPoint: "Pune Station",
  },
  {
    id: "TR-005",
    route: "Pune → Mumbai",
    date: "2024-03-25",
    time: "09:30 PM",
    seats: "3B",
    status: "pending",
    amount: 450,
    busType: "AC Seater",
    boardingPoint: "Pune Station",
    dropPoint: "Dadar",
  },
];

const statusColors = {
  confirmed: "success",
  pending: "warning",
  cancelled: "destructive",
} as const;

export function UpcomingTripsList() {
  const handleCancel = (tripId: string) => {
    toast.success("Trip cancelled successfully", {
      description: `Booking ${tripId} has been cancelled. Refund will be processed within 48 hours.`,
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Booking ID</TableHead>
          <TableHead>Route</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Bus Type</TableHead>
          <TableHead>Seats</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingTrips.map((trip) => (
          <TableRow key={trip.id}>
            <TableCell className="font-medium">{trip.id}</TableCell>
            <TableCell>{trip.route}</TableCell>
            <TableCell>
              {trip.date}
              <br />
              <span className="text-sm text-muted-foreground">{trip.time}</span>
            </TableCell>
            <TableCell>{trip.busType}</TableCell>
            <TableCell>{trip.seats}</TableCell>
            <TableCell>
              <Badge variant={statusColors[trip.status as keyof typeof statusColors]}>
                {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">₹{trip.amount}</TableCell>
            <TableCell className="text-right">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">Cancel</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cancel Trip Booking</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to cancel this trip? Cancellation charges may apply as per the policy.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleCancel(trip.id)}>
                      Yes, Cancel Trip
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}