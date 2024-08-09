import Image from "next/image"
import { Button } from "./ui/button"

interface IQuickSearchProps {
  service: string
  icon: any
}

function QuickSearch({ icon, service }: IQuickSearchProps) {
  return (
    <Button className="gap-2" variant="secondary">
      <Image src={icon} alt={service} width={16} height={16} />
      <p>{service}</p>
    </Button>
  )
}

export default QuickSearch
