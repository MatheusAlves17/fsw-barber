import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"

function BookingItem() {
  return (
    <>
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
    </>
  )
}

export default BookingItem
