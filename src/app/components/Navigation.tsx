import Link from "next/link";
import { navItems } from "../resources/navItems"

const Navigation = () => {
    return (
        <nav className="absolute top-[50%] right-[2.5%] translate-y-[-50%] z-10">
            {/* <h1>Navigation</h1> */}
            <ul className="group text-lg lg:text-2xl flex flex-col text-center">
                {navItems.map((link, idx) => {
                    return (
                        <li key={idx} className="peer py-2 px-3 duration-500"><Link href={link.href}>{link.value}</Link></li>
                    );
                }
                )}
                {/* <li className="peer py-2 px-3 duration-500" >Home</li> */}
                {/* Some cool Hero section landing page */}
                {/* <li className="peer py-2 px-3 duration-500" >Experience</li> */}
                {/* BigLab and systems administration */}
                {/* <li className="peer py-2 px-3 duration-500" >Projects</li> */}
                {/* Github link with explanation */}
                {/* <li className="peer py-2 px-3 duration-500" >Skills</li> */}
                {/* 
                 - Resume PDF Download
                 - Technologies You Use
                 - Publications
                */}
            </ul>
        </nav>
    )
}
export default Navigation