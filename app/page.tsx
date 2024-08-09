import { Search } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

import Banner from "@/public/banner-01.png"

import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import Footer from "./_components/footer"

import QuickSearch from "./_components/quick-search"
import { quickSearch } from "./_constants/search"
import BookingItem from "./_components/booking-item"

export default async function Home() {
  const barbershops = await db.barbershop.findMany()
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Matheus!</h2>
        <p>Quarta-feira, 07 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <Search />
          </Button>
        </div>
        <div className="mt-3 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {quickSearch.map((item) => (
            <QuickSearch key={item.service} {...item} />
          ))}
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src={Banner}
            alt="Agende nos melhores com FSW Barber"
            fill
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <BookingItem />
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex items-center gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex items-center gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
