import "./globals.css";

export const metadata = {
    title: "Catálogo StockEssentials",
    description: "Blancos disponibles en StockEssentials",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    );
}
