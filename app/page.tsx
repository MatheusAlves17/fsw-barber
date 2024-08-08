import { Search } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

import Banner from "@/public/banner-01.png"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

export default async function Home() {
  const barbershops = await db.barbershop.findMany()

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
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src={Banner}
            alt="Agende nos melhores com FSW Barber"
            fill
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="p-0">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Agendamento</Badge>
                <h3 className="font-semibold">Corte de cabelo</h3>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png" />
                  </Avatar>
                  <p className="text-sm">Barbearia FSW</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border-l-2 border-solid border-white px-5">
                <p className="text-sm">Fevereiro</p>
                <p className="text-2xl">06</p>
                <p className="text-sm">09:45</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex items-center gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
