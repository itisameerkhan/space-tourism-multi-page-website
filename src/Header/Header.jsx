import './Header.css';
import Logo from '../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <img src={Logo} alt="" />
            <div className="header-navigation">
                <ul>
                    <NavLink to='/' className={'header-navlink'}> 
                        <span>00</span> 
                        HOME
                    </NavLink>
                    <NavLink to='/destination' className={'header-navlink'}>
                        <span>01</span> 
                        DESTINATION
                    </NavLink>
                    <NavLink to='/crew' className={'header-navlink'}>
                        <span>02</span> 
                        CREW
                    </NavLink>
                    <NavLink to='/technology' className={'header-navlink'}>
                        <span>03</span> 
                        TECHNOLOGY
                    </NavLink>
                </ul>
            </div>
        </div>       
    )
}

export default Header;