"use client"
import Navbar from "@/components/Navbar"
import { useAuth } from "@/hooks/auth"
import useSWR from "swr"

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" })

  return (
    <div className="flex">
      <div>Dashboard Page {user?.name}</div>
    </div>
  )
}

export default Dashboard
