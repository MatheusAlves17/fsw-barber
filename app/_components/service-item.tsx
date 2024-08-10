import { BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { formatCurrency } from "@/utils/formatCurrency"
import { Card, CardContent } from "./ui/card"

interface IServiceItemProps {
  service: BarbershopService
}

function ServiceItem({ service }: IServiceItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px] rounded-xl">
          <Image
            alt={service.name}
            src={service.imageUrl}
            objectFit="cover"
            fill
            className="rounded-md"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {formatCurrency(Number(service.price))}
            </p>
            <Button variant={"secondary"} size={"sm"}>
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
