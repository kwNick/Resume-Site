import Link from "next/link"

const Resume = () => {
    return (
        <div className="flex items-center justify-center">
            <Link href="/resume.pdf" download="Nick_Resume.pdf" target="_blank" aria-label="Download Nick's Resume" className=" text-white border border-white rounded p-4">
                Resume
            </Link>
        </div>
    )
}
export default Resume