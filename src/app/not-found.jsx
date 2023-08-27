import Link from 'next/link';
 
export default function NotFound() {
    return (
        <main className='notfound'>
            <section className="notfound__contenedor contenedor">
                <h1>Home Stock Essentials</h1>
                <p>No se ha encontrado la página</p>
                <Link className='boton' href="/">Inicio</Link>
            </section>
        </main>
    )
}