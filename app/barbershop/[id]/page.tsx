import ButtonSidebar from "@/app/_components/button-sidebar"
import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, StarIcon } from "lucide-react"
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
    include: {
      services: true,
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
          className="object-cover"
        />

        <Button
          variant={"secondary"}
          size={"icon"}
          asChild
          className="absolute left-2 top-4"
        >
          <Link href={"/"}>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <div className="absolute right-2 top-4">
          <ButtonSidebar />
        </div>
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
      <div className="space-y-3 border-b border-solid p-4">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        {barbershop?.services.map((item) => (
          <ServiceItem key={item.id} service={item} />
        ))}
      </div>
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem phone={phone} key={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
