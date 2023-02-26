import { ReactComponent as Iclose } from '../../pictures/CloseIcon.svg';
import { ReactComponent as Imenu } from '../../pictures/MenuIcon.svg';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './HeaderStyle.css';

function Header() {
    const [showIcon, setShowIcon] = useState(false);

    const handleClick = () => {
        setShowIcon(!showIcon);
        if (!showIcon) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    return (
        <>
        <header>
            <div className='logoContainer'>
                <Link to='/'>
                    <img src='./logoPicture.svg' alt='logo' className='logoPicture'></img>
                </Link>
                <h1 className='LogoName'>Simon Adam</h1>
            </div>
            <nav>
                <ol className={showIcon ? 'active' : ''}>
                    <li><a href='/#top' onClick={handleClick}>Home</a></li>
                    <li><a href='/#about' onClick={handleClick}>About me</a></li>
                    <li><a href='/#experience'onClick={handleClick}>Expirience</a></li>
                    <li><a href='/#project' onClick={handleClick}>Projects</a></li>
                    <li><a href='/#contact' onClick={handleClick}>Contact</a></li>
                </ol>
            </nav>
            <button onClick={handleClick} className='menu-btn transparent'>
                {showIcon ? <Iclose className='menu-icon'></Iclose> : <Imenu className='menu-icon' />}
            </button>
            <button onClick={handleClick} id='freespace' className={showIcon ? 'show transparent' : 'transparent'}></button>
        </header>
        <main>
            <Outlet />
        </main>
        </>
    );
}


export default Header;