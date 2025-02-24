import Link from "next/link"
import { socialLinks } from "../resources/socialLinks"

const Footer = () => {
    return (
        <footer className="fixed bottom-[1%] left-[1%] w-[20%] text-xs">
            <ul className="flex text-center leading-3">
                {socialLinks.map((link, idx) => {
                    return (
                        <li key={idx} className="w-full">
                            <Link href={link.href} target="_blank">{link.value}</Link>
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}
export default Footer