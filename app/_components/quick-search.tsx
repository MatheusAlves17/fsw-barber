import Image from "next/image"
import { Button } from "./ui/button"

import { IQuickSearchProps } from "../_constants/search"

function QuickSearch({ url, service }: IQuickSearchProps) {
  return (
    <Button className="gap-2" variant="secondary">
      <Image src={url} alt={service} width={16} height={16} />
      <p>{service}</p>
    </Button>
  )
}

export default QuickSearch
