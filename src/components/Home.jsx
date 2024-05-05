import { useGlobalContext } from "../Context";
import { FaBars } from "react-icons/fa";

const Home = () => {
    const {openModal, openSidebar} = useGlobalContext()

    return <main>
        <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars />
        </button>
        <button className="btn" onClick={openModal}>
            show modal
        </button>
    </main>
}

export default Home;