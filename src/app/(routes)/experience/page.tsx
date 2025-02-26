const page = () => {
    {/* <li className="peer py-2 px-3 duration-500" >Experience</li> */ }
    {/* BigLab and systems administration */ } //carousel for all experiences
    return (
        <div className="w-full min-h-full flex items-center justify-around">
            <div className=" w-3/5 h-fit max-h-[75vh] flex flex-col gap-y-5">
                <div>
                    <h1 className="text-3xl lg:text-5xl underline text-center tracking-widest uppercase">Experience</h1>
                </div>
                <div className="text-lg lg:text-xl">
                    <p className="text-center">
                        June 2021 - December 2023<br />
                        BigLab, Florida State University - Research Implementation Lead
                    </p>
                    <p className="text-center">
                        - Developed a full-stack medical informatics web application that integrated data visualizations and search engine capabilities derived from the latest medical research publications.
                    </p>
                </div>
                <div className="pb-10 lg:text-lg tracking-wide">
                    <ul>
                        <li>Developed a robust pipeline for database imports, querying and parsing over 4 million documents, converting XML to JSON for MongoDB integration.</li>
                        <li>Enhanced application performance by optimizing runtime and page load speeds through efficient data retrieval techniques in PHP.</li>
                        <li>Developed multiple search engines and improved search result accuracy by 60% using a PHP frontend and MongoDB backend.</li>
                        <li>Extracted and designed a schema for a dataset exceeding 4 million records, utilizing multithreading and multiprocessing in Python for efficient data handling.</li>
                        <li>Designed and deployed a custom AWS AMI from a virtual host disk, optimizing environment setup for scalable machine learning model deployment.</li>
                        <li>Extracted hierarchical metadata from research tables for visualizations and improved data schemas.</li>
                        <li>Prioritized efficient code writing and revisioning to ensure code quality and legibility.</li>
                        <li>“COVIDKG.ORG - a Web-scale COVID-19 Interactive, Trustworthy Knowledge Graph, Constructed and Interrogated for Bias using Deep-Learning”, appeared in EDBT, 2023</li>
                        <li>Led successful funding acquisition efforts by leading NSF I-Corps program presentations, articulating the technical merits and research potential of the project, resulting in a significant grant that enhanced project funding and supported ongoing research development.</li>
                    </ul>
                </div>

            </div>
        </div >
    )
}
export default page