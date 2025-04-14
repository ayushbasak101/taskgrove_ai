import type { Metadata } from "next"
import AccountSettings from "@/components/account/account-settings"

export const metadata: Metadata = {
  title: "Account Settings | TaskGrove AI",
  description: "Manage your TaskGrove AI account settings",
}

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
          <p className="text-gray-400">Manage your account preferences and subscription</p>
        </div>

        <AccountSettings />
      </div>
    </div>
  )
}
