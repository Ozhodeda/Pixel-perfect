import { NavLink } from 'react-router-dom'
import Logo from '../assets/svgs/logo.svg'

export function AppHeader() {

    return (
        <header className="app-header full">
            <img src={Logo} alt="React Logo" />
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/about">About</NavLink> |
                <NavLink to="/contact">Contact</NavLink> |
            </nav>
        </header>
    )
}