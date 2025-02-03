import Link from "next/link"
import { socialLinks } from "../resources/socialLinks"

const Footer = () => {
    return (
        <footer className="absolute bottom-[1%]  w-[25%] text-xs">
            <ul className="flex text-center ">
                {socialLinks.map((link, idx) => {
                    return (
                        <li key={idx} className="w-full">
                            <Link href={link.href}>{link.value}</Link>
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}
export default Footer