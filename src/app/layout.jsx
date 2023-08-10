import "./globals.css";
import ModalProvider from "@/context/ModalProvider";

export const metadata = {
    title: "Catálogo StockEssentials",
    description: "Blancos disponibles en StockEssentials",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
