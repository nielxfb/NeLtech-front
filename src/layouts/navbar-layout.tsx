import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { IChildren } from "../interfaces/children-interface"

function NavbarLayout({children}: IChildren) {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default NavbarLayout