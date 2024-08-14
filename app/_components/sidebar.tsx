"use client"
import { Calendar, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearch } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import Google from "@/public/google.svg"
import { signIn, signOut, useSession } from "next-auth/react"

function SideBar() {
  const { data } = useSession()

  const handleLoginWithGoogle = () => signIn("google")
  const handleSignOutWithGoogle = () => signOut()

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      {!data?.user?.email ? (
        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          <h2 className="font-bold">Olá, faça seu Login</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"icon"}>
                <LogInIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-lg">
              <DialogHeader>
                <DialogTitle>Faça seu Login!</DialogTitle>
                <DialogDescription>
                  Conecte-se usando sua conta Google
                </DialogDescription>
              </DialogHeader>
              <Button
                variant={"outline"}
                className="gap-2 font-bold"
                onClick={handleLoginWithGoogle}
              >
                <Image
                  alt="Faça login usando sua conta Google"
                  src={Google}
                  width={20}
                  height={20}
                />
                Google
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="flex gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarImage
              src={data.user.image ?? ""}
              alt={data.user.name ?? ""}
            />
          </Avatar>
          <div>
            <p className="font-bold">{data.user.name}</p>
            <p className="text-xs">{data.user.email}</p>
          </div>
        </div>
      )}
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
            <Image alt={item.service} src={item.url} width={12} height={12} />
            {item.service}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 py-5">
        <Button
          className="justify-start gap-2"
          variant={"ghost"}
          onClick={handleSignOutWithGoogle}
        >
          <LogOutIcon size={12} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SideBar
