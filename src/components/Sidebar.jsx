import { links, social } from '../data'
import logo from '../aha.svg'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    console.log(isSidebarOpen);
    return <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-header'>
            <div className='logo-container'>
                <img src={logo} alt='Aha logo' className='logo' />
                <p className='logo-name'>ZAFAR AHASAN</p>
            </div>
            <button className='sidebar-close-btn' onClick={closeSidebar}>
                <FaTimes />
            </button>
        </div>
        <ul className='links'>
            {links.map((link) => {
                const { id, url, text, icon } = link
                return <li key={id}>
                    <a href={url}>{icon}{text}</a>
                </li>
            })}
        </ul>
        <ul className='social-links'>
            {social.map((link) => {
                const { id, url, icon } = link
                return <li key={id}>
                    <a href={url}>{icon}</a>
                </li>
            })}
        </ul>
    </aside>
}

export default Sidebar;