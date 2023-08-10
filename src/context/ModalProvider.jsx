"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import Modal from '@/components/Modal';

const modalContext = createContext();

export const useModal = () => {
    return useContext(modalContext);
}

function ModalProvider({children}){
    const [modalVisible, setModalVisible] = useState(false);
    const [img, setImg] = useState("");
    const [nombre, setNombre] = useState("");
    let timeout;

    useEffect(() => {
        // Cuando se termina la animación de cerrar se quita la imagen
        // Para que al abrir otra no se siga viendo la anterior
        if(!modalVisible){
            timeout = setTimeout(() => {
                setImg("");
                setNombre("");
            }, 300)
        }
    }, [modalVisible])

    const abrirModal = (src, nombre) => {
        clearTimeout(timeout);
        setImg(src);
        setNombre(nombre);
        setModalVisible(true);
    }

    const cerrarModal = () => {
        setModalVisible(false);
    };

    return(
        <modalContext.Provider value={{ abrirModal, cerrarModal }}>
            <Modal
                src={img}
                nombre={nombre}
                visible={modalVisible}
                handleCerrar={cerrarModal}
            />
            {children}
        </modalContext.Provider>
    )
}

export default ModalProvider;