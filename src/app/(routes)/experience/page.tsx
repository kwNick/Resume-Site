const page = () => {

    return (
        <div className="w-full flex items-center justify-center">
            <div className="relative p-3 m-3 w-4/5 flex flex-col gap-y-5 mt-10 pt-5 after:absolute after:bg-colour after:h-[10%] after:w-[30%] after:bottom-[-2px] after:right-[-2px] after:z-[-20]">
                <span className="absolute inset-0 bg-contrast z-[-10]" />

                <div className="">
                    <h1 className="text-4xl lg:text-6xl underline text-center tracking-widest uppercase">
                        Experience
                    </h1>
                </div>

                <div className="relative pt-10 p-3 mx-3 my-5 flex flex-col gap-y-5 bg-contrast before:absolute before:bg-colour before:h-[30%] before:w-[20%] before:top-[-2px] before:left-[-2px] before:z-[-10] after:absolute after:bg-colour after:h-[30%] after:w-[20%] after:bottom-[-2px] after:right-[-2px] after:z-[-10]">
                    <div className="text-xl lg:text-2xl">
                        <p className="text-center">
                            June 2021 - December 2023<br />
                            BigLab, Florida State University - Lead Software Engineer
                        </p>
                    </div>

                    <div className="text-xl lg:text-2xl">
                        <p className="text-center">
                            - Developed a full-stack medical informatics web application that integrated data visualizations and search engine capabilities derived from the latest medical research publications.
                        </p>
                    </div>

                    <div className="pb-10 text-lg lg:text-xl tracking-wide">
                        <ul className="list-disc list-inside text-left flex flex-col gap-y-2">
                            <li className="">
                                {/* Developed a robust pipeline for database imports, querying and parsing over 4 million documents, converting XML to JSON for MongoDB integration. */}
                                Engineered a MongoDB pipeline to import, query, and parse 4M+ documents, cutting data processing time by 55% and enabling scalable backend operations.
                            </li>
                            <li>
                                {/* Enhanced application performance by optimizing runtime and page load speeds through efficient data retrieval techniques in PHP. */}
                                Boosted web application performance by 50% by optimizing PHP data retrieval and minimizing page load times, enhancing user experience.
                            </li>
                            <li>
                                {/* Developed multiple search engines and improved search result accuracy by 60% using a PHP frontend and MongoDB backend. */}
                                Developed and deployed multiple search engines, increasing query result accuracy by 70% using PHP and MongoDB, enabling faster access to medical research data.
                            </li>
                            <li>
                                {/* Extracted and designed a schema for a dataset exceeding 4 million records, utilizing multithreading and multiprocessing in Python for efficient data handling. */}
                                Designed a scalable schema and processing workflow for a large dataset, leveraging Python multithreading/multiprocessing to accelerate throughput by 8x.
                            </li>
                            <li>
                                {/* Designed and deployed a custom AWS AMI from a virtual host disk, optimizing environment setup for scalable machine learning model deployment. */}
                                Built custom AWS AMIs for machine learning reducing deployment time by 40% and improving maintainability.
                            </li>
                            {/* <li>
                                Extracted hierarchical metadata from research tables for visualizations and improved data schemas.
                            </li>
                            <li>
                                Prioritized efficient code writing and revisioning to ensure code quality and legibility.
                            </li>
                            <li>
                                “COVIDKG.ORG - a Web-scale COVID-19 Interactive, Trustworthy Knowledge Graph, Constructed and Interrogated for Bias using Deep-Learning”, appeared in EDBT, 2023
                            </li>
                            <li>
                                Led successful funding acquisition efforts by leading NSF I-Corps program presentations, articulating the technical merits and research potential of the project, resulting in a significant grant that enhanced project funding and supported ongoing research development.
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="relative pt-10 p-3 mx-3 my-5 flex flex-col gap-y-5 bg-contrast before:absolute before:bg-colour before:h-[30%] before:w-[20%] before:top-[-2px] before:left-[-2px] before:z-[-10] after:absolute after:bg-colour after:h-[30%] after:w-[20%] after:bottom-[-2px] after:right-[-2px] after:z-[-10]">

                    <div className="text-xl lg:text-2xl">
                        <p className="text-center">
                            July 2018 - December 2021<br />
                            Systems Group, Florida State University - Systems Engineer
                        </p>
                    </div>

                    <div className="text-xl lg:text-2xl">
                        <p className="text-center">
                            - Developed a full-stack medical informatics web application that integrated data visualizations and search engine capabilities derived from the latest medical research publications.
                        </p>
                    </div>

                    <div className="pb-10 text-lg lg:text-xl tracking-wide">
                        <ul className="list-disc list-inside text-left flex flex-col gap-y-2">
                            <li className="">
                                Provided technical support to 300+ students and faculty, resolving IT issues both in-person and remotely to ensure minimal downtime and user satisfaction.
                            </li>
                            <li>
                                Maintained and repaired 20+ departmental printers, scanners, and copiers, reducing device service interruptions by 40%.
                            </li>
                            <li>
                                Managed toner inventory and backup systems, streamlining device maintenance and improving disaster recovery response times.
                            </li>
                            <li>
                                Installed and configured CentOS 7-based DNS, DHCP,  and web servers, enhancing lab network reliability.
                            </li>
                            <li>
                                Setup and maintained over 50 lab workstations, including custom CAT5e cable fabrication and software provisioning, reducing setup time by 100%.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default page