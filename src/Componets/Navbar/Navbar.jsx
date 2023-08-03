import { Logo } from "./Logo"
export function Navbar(){
    return(
        <nav className="w-1/12 h-full bg-gray-700 flex flex-col items-center">
            <Logo/>
        </nav>
    )
}