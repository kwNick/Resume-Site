const Navigation = () => {
    return (
        <div className="absolute top-[50%] right-[5%] translate-y-[-50%]">
            {/* <h1>Navigation</h1> */}
            <ul className="group text-lg lg:text-2xl gap-y-6 flex flex-col">
                <li className="peer duration-500" >Home</li>
                {/* Some cool Hero section landing page */}
                <li className="peer duration-500" >Experience</li>
                {/* BigLab and systems administration */}
                <li className="peer duration-500" >Projects</li>
                {/* Github link with explanation */}
                <li className="peer duration-500" >Skills</li>
                {/* 
                 - Resume PDF Download
                 - Technologies You Use
                 - Publications
                */}
            </ul>
        </div>
    )
}
export default Navigation