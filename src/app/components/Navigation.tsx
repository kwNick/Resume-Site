import Link from "next/link";
import { navItems } from "../resources/navItems"

const Navigation = () => {
    return (
        <nav className="fixed top-[50%] right-[2%] translate-y-[-50%] z-10">
            {/* <h1>Navigation</h1> */}
            <ul className="group text-lg lg:text-2xl flex flex-col text-center">
                {navItems.map((link, idx) => {
                    return (
                        <li key={idx} className="peer py-2 px-1 duration-500"><Link href={link.href}>{link.value}</Link></li>
                    );
                }
                )}
            </ul>
        </nav>
    )
}
export default Navigation