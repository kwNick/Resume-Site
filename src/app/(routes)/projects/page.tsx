const page = () => {
    {/* <li className="peer py-2 px-3 duration-500" >Projects</li> */ }
    {/* Github link with explanation */ }
    return (
        <div className="w-full min-h-full flex items-center justify-around">
            <div className="w-3/5 h-fit max-h-[75vh] flex flex-col">
                <div>
                    <h1 className="text-2xl lg:text-4xl underline">Projects</h1>
                </div>
                <div className="">
                    Movie Recommendation - Github Repo<br />
                    Technologies: Next.js, Spring Boot, MongoDB Atlas. Tailwind CSS
                    Developed a full-stack web application for managing movie analytics.<br />
                    Integrated Spring Boot backend REST API with MongoDB Atlas cluster to fetch data.<br />
                    Designed a responsive front-end using Next.js and Tailwind CSS.
                    Improved load times by optimizing database queries and API responses.<br />

                </div>
            </div>
        </div>
    )
}
export default page