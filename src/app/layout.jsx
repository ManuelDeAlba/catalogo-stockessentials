import { Poppins } from 'next/font/google';
import "./globals.css";
import ModalProvider from "@/context/ModalProvider";

export const metadata = {
    title: "Catálogo Home Stock Essentials",
    description: "Blancos disponibles en Home Stock Essentials",
    // icons: {
    //     icon: "/assets/icono.png"
    // }
};

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ["500"]
})
  

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={poppins.className}>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
