"use client";

function Modal({ src, nombre, handleCerrar, visible }){
    const cerrarModal = (e) => {
        // Si se le da click en cualquier lugar menos en la imagen, se cierra
        if(!e.target.classList.contains("modal__img")){
            handleCerrar();
        }
    }

    return(
        <div className={`modal${visible ? " modal--activo" : ""}`} onClick={cerrarModal}>
            <img className="modal__img" src={src} alt={`Producto ${nombre}`} />
            <div className="modal__botones">
                <button className="boton boton--verde">Cerrar</button>
            </div>
        </div>
    )
}

export default Modal;