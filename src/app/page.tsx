import ReactTypeWriter from "../components/ReactTypeWriter";

export default function Home() {
  {/* <li className="peer py-2 px-3 duration-500" >Home</li> */ }
  {/* Some cool Hero section landing page */ }
  return (
    <div className="w-full min-h-full">
      <ReactTypeWriter />

      <div className="min-h-[45vh] flex items-center justify-center ">
        <div className="w-3/5 border border-colour rounded-lg drop-shadow-lg">
          <div className="p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg text-center">
              This is a simple landing page built with Next.js and React. Explore my work and get to know me better!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
