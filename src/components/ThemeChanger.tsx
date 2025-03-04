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
        <div className="hidden sm:block w-fit h-fit bg-transparent rounded">
            <select value={theme} onChange={e => setTheme(e.target.value)} className="bg-transparent rounded">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    )
}
export default ThemeChanger