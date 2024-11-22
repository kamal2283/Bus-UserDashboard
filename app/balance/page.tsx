"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BalanceOverview } from "@/components/balance/balance-overview";
import { TransactionHistory } from "@/components/balance/transaction-history";
import { AddFundsDialog } from "@/components/balance/add-funds-dialog";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function BalancePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Balance & Transactions</h1>
        <AddFundsDialog>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Funds
          </Button>
        </AddFundsDialog>
      </div>
      <div className="grid gap-6">
        <BalanceOverview />
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionHistory />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}