import Cursor from "../components/Cursor";
export default function RootTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Cursor />
            {children}
        </>
    );
};