import React, { useState } from 'react'
import '../css/header.css'
import { CiShoppingBasket, CiLight } from 'react-icons/ci'
import { FaMoon } from 'react-icons/fa'

function Header() {

    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = 'rgb(52, 50, 50)'
            root.style.color = 'whitesmoke'
        } else {
            root.style.backgroundColor = 'whitesmoke'
            root.style.color = 'rgb(52, 50, 50)'
        }
    }

    return (
        <div className='header-container'>
            <div><img id='logo' src="./src/images/logo.png" alt="CommerceLogo" />
                <p>EAGLE AS</p>
            </div>
            <div className='flex-row'>
                <input type="text" placeholder='Ara...' />
                <div >
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <CiShoppingBasket className='icon' />
                </div>
            </div>

        </div>
    )
}

export default Header