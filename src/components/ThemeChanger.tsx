'use client';
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div className="hidden sm:block w-fit h-fit bg-transparent rounded-sm ">
            <select value={theme} onChange={e => setTheme(e.target.value)} className="bg-transparent rounded-sm p-3 border border-colour text-colour cursor-pointer">
                <option value="system" className="border-colour text-colour">System</option>
                <option value="light" className="border-colour text-colour">Light</option>
                <option value="dark" className="border-colour text-colour">Dark</option>
            </select>
        </div>
    )
}
export default ThemeChanger