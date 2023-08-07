"use client";

import { useEffect, useState } from "react";
import Filtro from "./Filtro";
import Producto from "./Producto";
function GaleriaProductos({ productos: productosServidor }){
    const [productos, setProductos] = useState();
    const [productosFiltrados, setProductosFiltrados] = useState(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/productos`)
        .then(res => res.json())
        .then(prods => {
            setProductos(prods);
            setProductosFiltrados(prods);
        })
    }, [])

    const handleProductosFiltrados = filtrados => {
        setProductosFiltrados(filtrados);
    }

    return(
        <div className="contenedor">
            <h1 className="titulo">Nuestros productos</h1>

            <Filtro
                elementos={productos}
                handleElementosFiltrados={handleProductosFiltrados}
            />

            <section className="productos contenedor">
                {
                    !productosFiltrados ? (
                        //! Productos para el Server Side Rendering
                        productosServidor.map(producto => (
                            <Producto producto={producto} key={producto.id} />
                        ))
                    ) : (
                        //! Productos para el filtro
                        productosFiltrados.map(producto => (
                            <Producto producto={producto} key={producto.id} />
                        ))
                    )
                }
            </section>
        </div>
    )
}

export default GaleriaProductos;