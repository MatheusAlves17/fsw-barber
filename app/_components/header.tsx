import Image from "next/image"
import { Card, CardContent } from "./ui/card"

import FSWBarberLogo from "../../public/logo.png"
import { Button } from "./ui/button"
import { Calendar, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearch } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          src={FSWBarberLogo}
          alt="FSW Barber Logotipo"
          width={120}
          height={20}
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex gap-3 border-b border-solid py-5">
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Foto de perfil"
                />
              </Avatar>
              <div>
                <p className="font-bold">Mario Arnaldo</p>
                <p className="text-xs">mario@atras.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-b border-solid py-5">
              <SheetClose asChild>
                <Button className="justify-start gap-2" asChild>
                  <Link href="/">
                    <HomeIcon size={12} />
                    Início
                  </Link>
                </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant={"ghost"}>
                <Calendar size={12} />
                Agendamento
              </Button>
            </div>
            <div className="flex flex-col gap-2 border-b border-solid py-5">
              {quickSearch.map((item) => (
                <Button
                  key={item.service}
                  className="justify-start gap-2"
                  variant={"ghost"}
                >
                  <Image
                    alt={item.service}
                    src={item.url}
                    width={12}
                    height={12}
                  />
                  {item.service}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2 py-5">
              <Button className="justify-start gap-2" variant={"ghost"}>
                <LogOutIcon size={12} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
