import { createContext, useState } from "react";

const ModalContext = createContext();

// eslint-disable-next-line react/prop-types
function ModalProvider({ children }) {

    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalNotification, setOpenModalNotification] = useState(false);
    const [openModalVisual, setOpenModalVisual] = useState(false)
    
    return (
        <ModalContext.Provider value={{openModalEdit, setOpenModalEdit, openModalDelete, setOpenModalDelete, openModalAdd, setOpenModalAdd, openModalNotification, setOpenModalNotification, openModalVisual, setOpenModalVisual}}>
            {children}
        </ModalContext.Provider>
    );
}

export { ModalContext, ModalProvider };