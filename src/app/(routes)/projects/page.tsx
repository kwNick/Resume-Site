import Link from "next/link"

const page = () => {

    return (
        <div className="w-full min-h-[100vh] flex items-center justify-around">
            <div className="relative w-4/5 flex flex-col gap-y-5 after:absolute after:bg-colour after:h-[10%] after:w-[30%] after:bottom-[-2px] after:right-[-2px] after:z-[-20]">

                <span className="absolute inset-0 bg-contrast z-[-10]" />
                <div className="flex flex-col items-center justify-center gap-y-4 p-3 m-3">
                    <h1 className="text-4xl lg:text-6xl underline text-center tracking-widest uppercase">
                        Projects
                    </h1>

                    <div className="text-lg lg:text-xl tracking-wide">
                        <p>
                            Projects have self-hosted SpringBoot API on a Rocky Linux PC, reverse-proxied through Nginx, and assigned a public-facing subdomain: spring-movie.duckdns.org,  jwt-auth.duckdns.org. These APIs are connected to a locally-hosted Mongodb or Postgresql databases on the same machine. Vercel hosts the Nextjs frontends: movies-spring-nextjs.vercel.app,  jwt-auth-olive.vercel.app, which communicate securely with the databases via the RESTful APIs.
                        </p>
                    </div>
                </div>

                <div className="relative pt-10 p-3 mx-3 my-5 flex flex-col gap-y-5 items-center bg-contrast before:absolute before:bg-colour before:h-[20%] before:w-[20%] before:top-[-2px] before:left-[-2px] before:z-[-10] after:absolute after:bg-colour after:h-[20%] after:w-[20%] after:bottom-[-2px] after:right-[-2px] after:z-[-10]">
                    <div className="text-xl lg:text-2xl">
                        <p>
                            Movie Recommendation - <Link href="https://github.com/kwNick/MoviesSpringNextjs" target="_blank" className="underline">Github Repo</Link>
                        </p>
                    </div>

                    <div className="text-xl lg:text-2xl ">
                        <p className="">
                            Technologies: Next.js, Spring Boot, Nginx, MongoDB, Tailwind CSS, Vercel
                        </p>
                    </div>

                    <div className="text-lg lg:text-xl tracking-wide">
                        <p>
                            Full-stack movie analytics application with a Next.js frontend and a Spring Boot backend, designed for responsive, animated and intuitive user interaction.
                        </p>
                    </div>

                    <div className=" pb-10 text-lg lg:text-xl tracking-wide">
                        <ul className="list-disc list-inside text-left flex flex-col gap-y-2">
                            <li>
                                {/* Integrated Spring Boot backend REST API with MongoDB Atlas cluster to fetch data. */}
                                Provides search, pagination, and creating a personal favorite movies list.
                            </li>
                            <li>
                                Optionally supporting MongoDB Atlas for broader accessibility. The movie data for this project is retrieved from the OMDB API.
                                {/* Designed a responsive front-end using Next.js and Tailwind CSS. */}
                            </li>
                            {/* <li>
                                Developed a full-stack web application for managing movie analytics.
                            </li>
                            <li>
                                Improved load times by optimizing database queries and API responses.
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="relative pt-10 p-3 mx-3 my-5 flex flex-col gap-y-5 items-center bg-contrast before:absolute before:bg-colour before:h-[20%] before:w-[20%] before:top-[-2px] before:left-[-2px] before:z-[-10] after:absolute after:bg-colour after:h-[20%] after:w-[20%] after:bottom-[-2px] after:right-[-2px] after:z-[-10]">
                    <div className="text-xl lg:text-2xl">
                        <p>
                            JWT-Auth - <Link href="https://github.com/kwNick/JWT-Auth" target="_blank" className="underline">Github Repo</Link>
                        </p>
                    </div>

                    <div className="text-xl lg:text-2xl ">
                        <p className="">
                            Technologies: Next.js, Spring Boot, Nginx, Postgresql, Tailwind CSS, Vercel
                        </p>
                    </div>

                    <div className="text-lg lg:text-xl tracking-wide">
                        <p>
                            A full-stack template POS system that utilizes Spring Security to create JWT Authentication for login and register.
                        </p>
                    </div>

                    <div className=" pb-10 text-lg lg:text-xl tracking-wide">
                        <ul className="list-disc list-inside text-left flex flex-col gap-y-2">
                            <li>
                                Supports login/register and logout/delete user. Add/update/delete shops and users. Supports roles: ROLE_USER/ROLE_ADMIN for authorization.
                            </li>
                            <li>
                                Utilizes access token and refresh token for authentication via httpsResponse headers. Authenticates on every http request.
                            </li>
                            <li>
                                Enhancing security with custom corsConfiguration, a HoneyPotController, requestLogging via filters and rate-limiting on open routes.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default page