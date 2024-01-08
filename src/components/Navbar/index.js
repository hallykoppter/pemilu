import Link from "next/link"
import Button from "./button"

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-2 pt-4 px-5 items-center bg-transparent">
      <Link href={"/"} className="text-xl font-titan text-secondary">
        <span className="text-primary">E</span>-Lection
      </Link>
      <div className="flex justify-between gap-4 text-sm font-baloo items-center">
        <Button href="#" title="Kandidat" />
        <Button href="#" title="Jadwal" />
      </div>
    </div>
  )
}

export default Navbar
