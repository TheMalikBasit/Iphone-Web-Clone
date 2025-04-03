// "use client" this function is a client component i.e it will be rendered on the client side

import Hero from "@/Components/Hero"
import Highlights from "@/Components/Highlights"
import Navbar from "@/Components/Navbar"

export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center">
        <Navbar />
        <Hero />
        <Highlights />
      </main>
    </div>
  )
}