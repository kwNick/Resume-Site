const page = () => {
    {/* <li className="peer py-2 px-3 duration-500" >Projects</li> */ }
    {/* Github link with explanation */ }
    return (
        <div className="w-full min-h-[100vh] flex items-center justify-around">
            <div className="relative w-3/5 flex flex-col gap-y-5 after:absolute after:bg-colour after:h-[10%] after:w-[30%] after:bottom-[-2px] after:right-[-2px] after:z-[-20]">
                <span className="absolute inset-0 bg-contrast z-[-10]" />
                <div className="">
                    <h1 className="text-4xl lg:text-6xl underline text-center tracking-widest uppercase">
                        Projects
                    </h1>
                </div>
                <div className="relative pt-10 p-3 mx-3 my-5 flex flex-col gap-y-5 items-center bg-contrast before:absolute before:bg-colour before:h-[20%] before:w-[20%] before:top-[-2px] before:left-[-2px] before:z-[-10] after:absolute after:bg-colour after:h-[20%] after:w-[20%] after:bottom-[-2px] after:right-[-2px] after:z-[-10]">
                    <div className="text-xl lg:text-2xl">
                        <p>
                            Movie Recommendation - Github Repo
                        </p>
                    </div>

                    <div className="text-xl lg:text-2xl ">
                        <p className="text-center">
                            Technologies:<br /> Next.js, Spring Boot, MongoDB Atlas. Tailwind CSS
                        </p>
                    </div>

                    <div className=" pb-10 text-lg lg:text-xl tracking-wide">

                        <ul>
                            <li>
                                Integrated Spring Boot backend REST API with MongoDB Atlas cluster to fetch data.
                            </li>
                            <li>
                                Designed a responsive front-end using Next.js and Tailwind CSS.
                            </li>
                            <li>
                                Developed a full-stack web application for managing movie analytics.
                            </li>
                            <li>
                                Improved load times by optimizing database queries and API responses.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page