const page = () => {
    {/* <li className="peer py-2 px-3 duration-500" >Skills</li> */ }
    {/* 
                 - Resume PDF Download
                 - Technologies You Use
                 - Publications
                */}
    return (
        <div className="w-full min-h-full flex items-center justify-around">
            <div className="w-3/5 h-fit max-h-[75vh] flex flex-col">
                <div>
                    <h1 className="text-2xl lg:text-4xl underline">Skills</h1>
                </div>
                <div>
                    Education<br />
                    Graduated December 2021<br />
                    B.S. Computer Science - Florida State University, Tallahassee, Fl<br />
                    Skills<br />
                    ●JavaScript   ●React/NextJs   ●TailwindCSS<br />
                    ●AWS   ●Git   ●MongoDB   ●Java   ●Spring Boot<br />
                </div>
            </div>
        </div>
    )
}
export default page