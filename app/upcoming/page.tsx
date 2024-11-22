"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UpcomingTripsList } from "@/components/upcoming/upcoming-trips-list";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { BookTripDialog } from "@/components/upcoming/book-trip-dialog";

export default function UpcomingTripsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Upcoming Trips</h1>
        <BookTripDialog>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Book New Trip
          </Button>
        </BookTripDialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Upcoming Journeys</CardTitle>
        </CardHeader>
        <CardContent>
          <UpcomingTripsList />
        </CardContent>
      </Card>
    </div>
  );
}