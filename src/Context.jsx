import { useState, createContext, useContext } from "react";

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return <AppContext.Provider
        value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            closeModal,
            openSidebar,
            closeSidebar
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}