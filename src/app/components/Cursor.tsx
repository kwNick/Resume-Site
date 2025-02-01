'use client';
import { useEffect } from "react"

const Cursor = () => {

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        document.addEventListener("mousemove", (e) => {
            if (cursor) {
                (cursor as HTMLElement).style.left = e.pageX + "px";
                (cursor as HTMLElement).style.top = e.pageY + "px";
            }
        });

        document.addEventListener("click", () => {
            console.log("clicked");
            if (cursor) {
                (cursor as HTMLSpanElement).classList.add("cursor-clicked");
                setTimeout(() => {
                    (cursor as HTMLSpanElement).classList.remove("cursor-clicked");
                }, 350);
            }
        });

    }, []);

    return (
        <span className="cursor absolute top-[50vh] left-[50vw] w-5 h-5 bg-colour rounded-full translate-x-[-50%] translate-y-[-50%] border border-colour" />
    )
}
export default Cursor