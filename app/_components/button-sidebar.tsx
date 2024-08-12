import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { MenuIcon } from "lucide-react"
import SideBar from "./sidebar"

function ButtonSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SideBar />
    </Sheet>
  )
}

export default ButtonSidebar
