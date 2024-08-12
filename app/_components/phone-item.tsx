"use client"

import { Smartphone } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface IPhoneProps {
  phone: string
}

function PhoneItem({ phone }: IPhoneProps) {
  function handleCopyPhone(phone: string) {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-4">
        <Smartphone />
        <p>{phone}</p>
      </div>
      <Button
        size={"sm"}
        variant={"outline"}
        onClick={() => handleCopyPhone(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
