import { NavLink } from 'react-router-dom'
import Logo from '../assets/svgs/logo.svg'

export function AppHeader() {

    return (
        <header className="app-header full">
            <div className="flex-start">
                <img src={Logo} alt="React Logo" />
                <nav>
                    <NavLink to="/" className='link'>home</NavLink>
                    <NavLink to="/about" className='link'>about</NavLink>
                </nav>
            </div>
            <div className="flex-end">
                <NavLink to="/contact" className='link contact'>contact us</NavLink>
            </div>
        </header>

    )
}