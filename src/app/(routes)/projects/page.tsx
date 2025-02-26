const page = () => {
    {/* <li className="peer py-2 px-3 duration-500" >Projects</li> */ }
    {/* Github link with explanation */ }
    return (
        <div className="w-full min-h-full flex items-center justify-around">
            <div className="w-3/5 h-fit max-h-[75vh] flex flex-col gap-y-5">
                <div className="">
                    <h1 className="text-3xl lg:text-5xl underline text-center tracking-widest uppercase">
                        Projects
                    </h1>
                </div>
                <div className="text-lg lg:text-xl text-center">
                    <p>
                        Movie Recommendation - Github Repo
                    </p>
                </div>
                <div className="pb-10 lg:text-lg tracking-wide">

                    <p>
                        Technologies: Next.js, Spring Boot, MongoDB Atlas. Tailwind CSS
                        Developed a full-stack web application for managing movie analytics.
                    </p>
                    <ul>
                        <li>
                            Integrated Spring Boot backend REST API with MongoDB Atlas cluster to fetch data.

                        </li>
                        <li>
                            Designed a responsive front-end using Next.js and Tailwind CSS.
                            Improved load times by optimizing database queries and API responses.
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default page