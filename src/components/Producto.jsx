
function Producto({ producto }){
    return(
        <div className="producto">
            <img className="producto__img" src={producto.img || "/assets/placeholder-producto.png"} alt={`Imagen de ${producto.nombre}`} />
            <h2 className="producto__nombre">{producto.nombre}</h2>
            <p className="producto__precio">${producto.precio_venta}</p>
            <p className="producto__cantidad"><b>Cantidad:</b> {producto.cantidad || "Sobre pedido"}</p>
        </div>
    )
}

export default Producto;