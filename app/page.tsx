import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

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

        

      </div>

    </div>
  )
}

export default Home
