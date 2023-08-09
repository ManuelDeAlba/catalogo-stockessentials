import Link from "next/link";

import GaleriaProductos from '@/components/GaleriaProductos.jsx';
import { obtenerProductos } from "@/firebase";

export const dynamic = 'force-dynamic';

async function Inicio(){
    const productos = await obtenerProductos();

    return(
        <>
            <header className="header">
                <div className="header__apartados contenedor">
                    <div className="header__apartado">
                        <h1 className="header__titulo">StockEssentials</h1>
                        <h3 className="header__subtitulo">Compra tus blancos de calidad a un mejor precio</h3>
                    </div>

                    <div className="header__apartado">
                        <section className="header__texto">
                            <h3 className="header__subtitulo">Pedidos</h3>
                            <p className="header__parrafo">Los pedidos que excedan la cantidad disponible se tomarán sobre pedido, el cual tardará máximo 3 semanas.</p>
                        </section>

                        <section className="header__texto">
                            <h3 className="header__subtitulo">Apartados</h3>
                            <p className="header__parrafo">Los productos se pueden apartar, teniendo máximo 1 mes para terminar de completar los pagos.</p>
                        </section>

                        <section className="header__texto">
                            <h3 className="header__subtitulo">Formas de pago</h3>
                            <div className="header__metodos">
                                <div className="header__metodo">
                                    <h4>Efectivo</h4>
                                    <img className="header__icono" src="/assets/money.svg" alt="Icono dinero" /></div>
                                <div className="header__metodo">
                                    <h4>Transferencia</h4>
                                    <img className="header__icono" src="/assets/transfer.svg" alt="Icono dinero" /></div>
                            </div>
                        </section>
                    </div>
                </div>

                <Link href="#main" className="header__cta boton">Ver productos</Link>
            </header>

            <main className="main" id="main">
                <GaleriaProductos productos={productos} />
            </main>

            <footer className="footer">
                <div className="footer__contenedor contenedor">
                    <h3 className="footer__titulo titulo">Contacto</h3>
                    <div className="footer__links">
                        <Link className="footer__link" target="_blank" href="https://api.whatsapp.com/send?phone=523340085203">Whatsapp</Link>
                        <Link className="footer__link" target="_blank" href="https://www.facebook.com/midnaismera.madizonhernandez.1?mibextid=ZbWKwL">Facebook</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Inicio;