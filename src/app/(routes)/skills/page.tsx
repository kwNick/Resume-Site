const page = () => {
    {/* <li className="peer py-2 px-3 duration-500" >Skills</li> */ }
    {/* 
                 - Resume PDF Download
                 - Technologies You Use
                 - Publications
                */}
    return (
        <div className="w-full min-h-full flex items-center justify-around">
            <div className="w-3/5 h-fit max-h-[75vh] flex flex-col gap-y-5">
                <div className="">
                    <h1 className="text-3xl lg:text-5xl text-center underline tracking-widest uppercase">Skills</h1>
                </div>
                <div className="text-lg lg:text-xl text-center">
                    <p className="text-xl lg:text-2xl">
                        Education
                    </p>
                    <p className="">
                        Graduated December 2021
                    </p>
                    <p>
                        B.S. Computer Science - Florida State University, Tallahassee, FL
                    </p>
                </div>
                <div className="text-lg lg:text-xl text-center">

                    <p className="text-xl lg:text-2xl">
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
                    {/* ●   ●   ●
                    ●   ●  ●   ●   ● */}
                </div>
            </div>
        </div>
    )
}
export default page