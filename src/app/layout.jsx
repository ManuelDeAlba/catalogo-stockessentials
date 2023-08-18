import { Poppins } from 'next/font/google';
import "./globals.css";
import ModalProvider from "@/context/ModalProvider";

export const metadata = {
    title: "Catálogo StockEssentials",
    description: "Blancos disponibles en StockEssentials",
};

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ["500"],
    variable: "--font-poppins"
})
  

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={poppins.variable}>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
