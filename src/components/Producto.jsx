import { useModal } from "@/context/ModalProvider";

function Producto({ producto }){
    const { abrirModal } = useModal();
    return(
        <div className="producto">
            <div className="producto__contenedor-img">
                <img
                    className="producto__img"
                    src={producto.img || "/assets/placeholder-producto.png"}
                    alt={`Imagen de ${producto.nombre}`}
                    onClick={() => {
                        if(producto.img) abrirModal(producto.img, producto.nombre)
                    }}
                />
            </div>
            <div className="producto__texto">
                <h2 className="producto__nombre">{producto.nombre}</h2>
                <div className="producto__precios">
                    <span className="producto__precio">${producto.precio_venta}</span>
                    {
                        producto.ultimo_precio_venta && producto.ultimo_precio_venta > producto.precio_venta && (
                            <span className="producto__precio-anterior">${producto.ultimo_precio_venta}</span>
                        )
                    }
                </div>
                <p className="producto__cantidad"><b>Cantidad:</b> {producto.cantidad || "Sobre pedido"}</p>
            </div>
        </div>
    )
}

export default Producto;