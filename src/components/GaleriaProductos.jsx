"use client";

import { useState } from "react";
import Filtro from "./Filtro";
import Producto from "./Producto";
import { useAutoAnimate } from '@formkit/auto-animate/react';

function GaleriaProductos({ productos: productosServidor }){
    const [productosFiltrados, setProductosFiltrados] = useState(productosServidor);
    const [parent, enableAnimations] = useAutoAnimate({
        duration: 300
    });

    const handleProductosFiltrados = filtrados => {
        setProductosFiltrados(filtrados);
    }

    return(
        <div className="contenedor">
            <h1 className="titulo">Nuestros productos</h1>

            <Filtro
                elementos={productosServidor}
                handleElementosFiltrados={handleProductosFiltrados}
            />

            <section className="productos contenedor" ref={parent}>
                {
                    productosFiltrados.map(producto => (
                        <Producto producto={producto} key={producto.id} />
                    ))
                }
            </section>
        </div>
    )
}

export default GaleriaProductos;