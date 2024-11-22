"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileSettings } from "@/components/settings/profile-settings";
import { NotificationSettings } from "@/components/settings/notification-settings";
import { SecuritySettings } from "@/components/settings/security-settings";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <div className="grid gap-6">
        <ProfileSettings />
        <NotificationSettings />
        <SecuritySettings />
      </div>
    </div>
  );
}