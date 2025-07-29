import Link from "next/link";
import ReactTypeWriter from "../components/ReactTypeWriter";

export default function Home() {

  return (
    <div className="w-full min-h-full">
      <ReactTypeWriter />

      <div className="min-h-[45vh] flex items-center justify-center mb-10">
        <div className="w-3/4 flex flex-col gap-y-5 border border-colour rounded-lg drop-shadow-lg">

          <div className="p-3">
            <h1 className="text-3xl font-bold text-center">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl lg:text-2xl text-center">
              This is a simple landing page built with Next.js and React. Explore my work and get to know me better!
            </p>
          </div>

          <div className="text-xl lg:text-2xl text-center">
            <p className="underline tracking-widest uppercase">
              Education
            </p>
            <p className="">
              Graduated December 2021
            </p>
            <p>
              B.S. Computer Science - Florida State University, Tallahassee, FL
            </p>
          </div>

          <div className="text-xl lg:text-2xl text-center">
            <p className="underline tracking-widest uppercase">
              Skills
            </p>
            <ul className="p-3 flex gap-x-7 flex-wrap items-center justify-center">
              <li>JavaScript</li>
              <li>React/NextJs</li>
              <li>TailwindCSS</li>
              <li>AWS</li>
              <li>Git</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>Spring Boot</li>
            </ul>
          </div>

          <div className="text-xl lg:text-2xl text-center">
            <p className="underline tracking-widest uppercase">
              Publications
            </p>
            <ul className="p-3 flex gap-y-4 flex-wrap items-center justify-center">
              <li>
                &ldquo;
                <Link href="https://openproceedings.org/2023/conf/edbt/3-paper-147.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                  COVIDKG.ORG - a Web-scale COVID-19 Interactive,
                  Trustworthy Knowledge Graph, Constructed and Interrogated
                  for Bias using Deep-Learning
                </Link>
                &rdquo;, authored in EDBT, 2023
              </li>
              <li>
                &ldquo;<Link href="https://www.rintonpress.com/xjdi3/xjdi3-4/460-473.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                  Hybrid Metadata Classification in Large-scale Structured Data sets
                </Link>&rdquo;, in the  journal of Data Intelligence, Rinton Press, Special Issue on &quot;Best of DEXA&quot;, 2021
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
