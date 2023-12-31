import './Header.css';
import Logo from '../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IconClose from '../assets/shared/icon-close.svg';
import IconOpen from '../assets/shared/icon-hamburger.svg';

const Header = () => {

    const [burger, setBurger] = useState(true);


    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 700) {
                setBurger(true);
            } 
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    },[])

    return (
        <div className="header-container">
            <img src={Logo} alt="" />
            <div className="header-navigation">
                <ul 
                    className='header-navigation-ul'
                    style={{display: burger === true ? 'flex' : 'none'}}
                    >
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
                <img 
                    src={`${burger ? IconClose : IconOpen}`} 
                    className='burger-icon'
                    onClick={() => { setBurger(!burger) }}
                />
            </div>
        </div>       
    )
}

export default Header;