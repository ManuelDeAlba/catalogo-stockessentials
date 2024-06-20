"use client";

import { useState } from "react";
import Filtro from "./Filtro";
import Producto from "./Producto";
function GaleriaProductos({ productos: productosServidor }){
    const [productosFiltrados, setProductosFiltrados] = useState(productosServidor);

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

            <section className="productos contenedor">
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