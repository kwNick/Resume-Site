import Link from "next/link";
import { navItems } from "../resources/navItems"

const Navigation = () => {
    return (
        <nav className={`fixed flex top-[1%] left-[50%] translate-x-[-50%] sm:w-1/7 sm:fixed sm:top-[50%] sm:left-[100%] sm:-translate-x-[100%] sm:-translate-y-1/2 z-10`}>
            {/* <h1>Navigation</h1> */}
            <ul className="w-full group text-lg lg:text-2xl flex sm:flex-col text-center gap-y-8">
                {navItems.map((link, idx) => {
                    return (
                        <li key={idx} className="peer py-2 px-1 duration-500 text-white">
                            <Link href={link.href}>{link.value}</Link>
                        </li>
                    );
                }
                )}
            </ul>
        </nav>
    )
}
export default Navigation