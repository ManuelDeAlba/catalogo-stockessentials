"use client";

import { useState, useEffect } from "react";
import Categorias from "@/categorias";

function Filtro({
    elementos,
    handleElementosFiltrados
}){
    const [filtros, setFiltros] = useState({
        categoria: "",
        min: "",
        max: "",
        soloDisponibles: false,
    });

    // Cada que cambie el filtro
    // O cada que cambien los elementos de las props, se actualizan los elementos
    useEffect(() => {
        let filtrados = elementos;

        if(filtros.categoria) filtrados = filtrados.filter(p => p.categoria == filtros.categoria);
        if(filtros.min) filtrados = filtrados.filter(p => p.precio_venta >= Number(filtros.min));
        if(filtros.max) filtrados = filtrados.filter(p => p.precio_venta <= Number(filtros.max));
        if(filtros.soloDisponibles) filtrados = filtrados.filter(p => p.cantidad);

        handleElementosFiltrados(filtrados);
    }, [filtros, elementos])

    const handleLimpiar = () => {
        setFiltros({
            categoria: "",
            min: "",
            max: "",
            soloDisponibles: false,
            // nombre: "",
        });
    }

    const handleInput = ({ target }) => {
        if(target.name == 'soloDisponibles'){
            setFiltros({
                ...filtros,
                soloDisponibles: !filtros.soloDisponibles
            });
            return;
        }

        setFiltros({
            ...filtros,
            [target.name]: target.value
        })
    }
    return(
        <div className="filtros contenedor">
            <div className="filtro__categoria filtro">
                <label htmlFor="categoria">Selecciona la categoría:</label>
                <select
                    className="filtro__input"
                    id="categoria"
                    name="categoria"
                    value={filtros.categoria}
                    onInput={handleInput}
                >
                    <option value="">Todo</option>
                    {
                        Object.keys(Categorias).map(categoria => (
                            <option value={categoria} key={categoria}>{Categorias[categoria]}</option>
                        ))
                    }
                </select>
            </div>

            <div className="filtro__precio filtro">
                <span>Precio:</span>
                <input
                    className="filtro__input"
                    name="min"
                    type="number"
                    placeholder="Min"
                    min={0}
                    value={filtros.min}
                    onInput={handleInput}
                />
                <input
                    className="filtro__input"
                    name="max"
                    type="number"
                    placeholder="Max"
                    min={0}
                    value={filtros.max}
                    onInput={handleInput}
                />
            </div>

            <div className="filtro__soloDisponibles filtro">
                <label htmlFor="soloDisponibles">Solo disponibles:</label>
                <input
                    className="filtro__input"
                    type="checkbox"
                    id="soloDisponibles"
                    name="soloDisponibles"
                    checked={filtros.soloDisponibles}
                    onChange={handleInput}
                />
            </div>
            {/* Filtro por nombre */}

            <button className="filtro__input boton" onClick={handleLimpiar}>Limpiar filtros</button>
        </div>
    )
}

export default Filtro;