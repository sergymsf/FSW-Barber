import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">

        <h2 className="text-x1 font-bold">Olá, User!</h2>
        <p>Dia x, y de z</p>


        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search"></Input>
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>


        <div className="relative h-[150px] w-full mt-6">
          <Image src="/banner-01.png" fill className="object-cover rounded-xl" alt="" />
        </div>


        <Card className="mt-6">
          <CardContent className="flex justify-between">
            <div className="flex flex-col gap-2 py-5">
              <Badge className="w-fit">Confrimado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>

            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm">Mes</p>
              <p>Dia</p>
              <p>00:00</p>
            </div>

          </CardContent>
        </Card>

      </div>

    </div>
  )
}

export default Home
