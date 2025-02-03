import Navigation from "./components/Navigation";
import ReactTypeWriter from "./components/ReactTypeWriter";

export default function Home() {
  return (
    <div className="">

      <div className="absolute translate-y-[50%] translate-x-[50%] text-lg lg:text-xl">
        <h1>
          Nick&apos;s Portfolio Website
        </h1>
        <h2>
          Full-Stack Developer
        </h2>
      </div>

      <ReactTypeWriter />

      <Navigation />

    </div>
  );
}
