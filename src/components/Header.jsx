import React, { useState } from 'react'
import '../css/header.css'
import { CiShoppingBasket, CiLight } from 'react-icons/ci'
import { FaMoon } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux'

function Header() {

    const [theme, setTheme] = useState(true);
    const navigate = useNavigate();

    const { products } = useSelector(store => store.basket)

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
            <div onClick={() => navigate('/')}><img id='logo' src="./src/images/logo.png" alt="CommerceLogo" />
                <p>EAGLE AS</p>
            </div>
            <div className='flex-row'>
                <input type="text" placeholder='Ara...' />
                <div >
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge badgeContent={products.length} color="error">
                        <CiShoppingBasket className='icon' />
                    </Badge>

                </div>
            </div>
        </div>
    )
}

export default Header