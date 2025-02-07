import Link from "next/link";
import ReactTypeWriter from "./components/ReactTypeWriter";

export default function Home() {
  return (
    <div className="min-w-full min-h-full">

      <ReactTypeWriter />

      <div className="flex items-center justify-center">
        <Link href="/resume.pdf" download="Nick_Resume.pdf" target="_blank" aria-label="Download Nick's Resume" className="border rounded p-1">
          Download Resume
        </Link>
      </div>
    </div>
  );
}
