import "@/styles/globals.css";

export const metadata = {
    title: "Coding game",
    description: "Coding game for kids",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="lt">
            <body>
                {children}
            </body>
        </html>
    );
}
export default RootLayout;
