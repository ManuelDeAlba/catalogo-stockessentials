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
                        <h1 className="header__titulo">Home Stock Essentials</h1>
                        <h3 className="header__subtitulo">Compra tus blancos de calidad a un mejor precio</h3>
                    </div>

                    <div className="header__apartado header__caracteristicas">
                        <section className="header__texto">
                            <h3 className="header__subtitulo">Pedidos</h3>
                            <p className="header__parrafo">Los pedidos que excedan la cantidad disponible se tomarán sobre pedido.</p>
                            <p>Preguntar por el plazo de tiempo.</p>
                        </section>

                        <section className="header__texto">
                            <h3 className="header__subtitulo">Apartados</h3>
                            <p className="header__parrafo">Los productos se pueden apartar, teniendo máximo 1 mes para terminar de completar los pagos.</p>
                            <p>No aplica para venta de mayoreo.</p>
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

                    <Link href="#main" className="header__cta boton">Ver productos</Link>
                </div>
            </header>

            <main className="main" id="main">
                <GaleriaProductos productos={productos} />
            </main>

            <footer className="footer">
                <div className="footer__contenedor contenedor">
                    <h3 className="footer__titulo titulo">Contacto</h3>
                    <div className="footer__links">
                        <Link className="footer__link" target="_blank" href="https://api.whatsapp.com/send?phone=523327306581">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                            </svg>
                        </Link>
                        <Link className="footer__link" target="_blank" href="https://www.facebook.com/midnaismera.madizonhernandez.1?mibextid=ZbWKwL">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Inicio;