const page = () => {
    {/* <li className="peer py-2 px-3 duration-500" >Skills</li> */ }
    {/* 
                 - Resume PDF Download
                 - Technologies You Use
                 - Publications
                */}
    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center">
            <div className="relative w-3/5 flex flex-col gap-y-5 after:absolute after:bg-colour after:h-[10%] after:w-[30%] after:bottom-[-2px] after:right-[-2px] after:z-[-20]">
                <span className="absolute inset-0 bg-contrast z-[-10]" />
                <div className="">
                    <h1 className="text-4xl lg:text-6xl text-center underline tracking-widest uppercase">
                        Skills
                    </h1>
                </div>
                <div className="relative pt-10 p-3 mx-3 my-5 flex flex-col gap-y-5 items-center bg-contrast before:absolute before:bg-colour before:h-[20%] before:w-[20%] before:top-[-2px] before:left-[-2px] before:z-[-10] after:absolute after:bg-colour after:h-[20%] after:w-[20%] after:bottom-[-2px] after:right-[-2px] after:z-[-10]">
                    <div className="text-xl lg:text-2xl text-center">
                        <p className="">
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

                        <p className="">
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
                </div>

            </div>
        </div>
    )
}
export default page