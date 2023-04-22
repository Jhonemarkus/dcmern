"use client"
import { useEffect, useMemo, useState } from "react"
import axios from "axios"

export default function Home() {
  const [health, setHealth] = useState()
  useEffect(() => {
    load()
    return () => null

    async function load() {
      const data =  await axios.get('http://localhost:3001/db')
      setHealth(data)
    }
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      Hot reload working
      <pre>
        {JSON.stringify(health, null, 2)}
      </pre>

    </main>
  )
}
