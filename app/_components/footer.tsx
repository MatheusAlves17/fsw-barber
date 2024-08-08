import { Card, CardContent } from "./ui/card"

function Footer() {
  return (
    <Card>
      <CardContent className="px-6 py-5">
        <p className="text-sm text-gray-400">
          © 2024 Copyright <span className="font-bold">FSW Barber</span>
        </p>
      </CardContent>
    </Card>
  )
}

export default Footer
