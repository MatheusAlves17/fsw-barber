import { Search } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

import Banner from "@/public/banner-01.png"

export default function Home() {
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
      </div>
    </div>
  )
}
