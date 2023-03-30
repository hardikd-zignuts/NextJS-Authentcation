import React, { useEffect, useState } from 'react'
import { useSession, signIn, getSession } from "next-auth/react"

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }
    securePage()
  }, []);

  if (loading) {
    return (
      <h1>Loading........</h1>
    )
  }
  return (
    <div>
      <h2>Dashboard Page</h2>
    </div>
  )
}

export default Dashboard
