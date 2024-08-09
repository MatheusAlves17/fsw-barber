import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Params {
  params: {
    id: string
  }
}

async function BarbershopPage({ params }: Params) {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name}
          src={barbershop?.imageUrl}
          fill
          quality={100}
          objectFit="cover"
          className="object-cover"
        />

        <Button
          variant={"secondary"}
          className="absolute left-2 top-4"
          size={"icon"}
          asChild
        >
          <Link href={"/"}>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          variant={"secondary"}
          className="absolute right-2 top-4"
          size={"icon"}
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="border-b border-solid p-4">
        <h1 className="text-xl font-bold">{barbershop?.name}</h1>
        <div className="my-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={16} />
          <span className="text-sm">{barbershop?.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={16} />
          <span className="text-sm">4.8 (500 avaliações)</span>
        </div>
      </div>
      <div className="space-y-3 border-b border-solid p-4">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-xs">{barbershop?.description}</p>
      </div>
    </div>
  )
}

export default BarbershopPage
