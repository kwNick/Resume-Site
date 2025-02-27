const page = () => {
    {/* <li className="peer py-2 px-3 duration-500" >Skills</li> */ }
    {/* 
                 - Resume PDF Download
                 - Technologies You Use
                 - Publications
                */}
    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center">
            <div className="w-3/5 flex flex-col gap-y-5">
                <div className="">
                    <h1 className="text-3xl lg:text-5xl text-center underline tracking-widest uppercase">Skills</h1>
                </div>
                <div className="relative p-3 m-3 flex flex-col gap-y-5 items-center bg-contrast before:absolute before:bg-colour before:h-[20%] before:w-[20%] before:top-[-2px] before:left-[-2px] before:z-[-10] after:absolute after:bg-colour after:h-[20%] after:w-[20%] after:bottom-[-2px] after:right-[-2px] after:z-[-10]">
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
        </div>
    )
}
export default page