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
        <div className="absolute top-[2%] left-[50%] w-fit h-fit bg-contrast">
            <select value={theme} onChange={e => setTheme(e.target.value)} className="bg-contrast border border-colour rounded">
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
    )
}
export default ThemeChanger