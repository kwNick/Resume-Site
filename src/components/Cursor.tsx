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
            if (cursor) {
                (cursor as HTMLSpanElement).classList.add("cursor-clicked");
                setTimeout(() => {
                    (cursor as HTMLSpanElement).classList.remove("cursor-clicked");
                }, 250);
            }
        });

    }, []);

    return (
        <span className="cursor absolute top-[50vh] left-[50vw] w-5 h-5 bg-colour rounded-full mix-blend-difference translate-x-[-50%] translate-y-[-50%] border border-accent pointer-events-none z-20 [box-shadow:_0px_0px_10px_var(--accent),_0px_0px_15px_var(--accent),_0px_0px_15px_rgba(255,255,255,0.5)]" />
    )
}
export default Cursor