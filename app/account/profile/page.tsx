import type { Metadata } from "next"
import UserProfile from "@/components/account/user-profile"

export const metadata: Metadata = {
  title: "Profile | TaskGrove AI",
  description: "Your TaskGrove AI profile",
}

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
          <p className="text-gray-400">View and manage your profile information</p>
        </div>

        <UserProfile />
      </div>
    </div>
  )
}
