"use client";

import { useState } from "react";
import { TopNav } from "./top-nav";
import { Sidebar } from "./sidebar";
import { DashboardContent } from "./content";

export function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <main className={`flex-1 p-6 transition-all duration-200 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}