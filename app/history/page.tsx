"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TripHistoryTable } from "@/components/trip-history/trip-history-table";
import { TripHistoryFilter } from "@/components/trip-history/trip-history-filter";

export default function TripHistoryPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Trip History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Filter Trips</CardTitle>
        </CardHeader>
        <CardContent>
          <TripHistoryFilter />
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>All Trips</CardTitle>
        </CardHeader>
        <CardContent>
          <TripHistoryTable />
        </CardContent>
      </Card>
    </div>
  );
}