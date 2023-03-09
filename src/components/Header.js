import React from 'react'
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/1024px-Logonfx.png' alt='Netflix'></img>
                </a>
                </div>
            <div className='header--user'>

            

                <a href='/'>
                    <img src='https://cdn.icon-icons.com/icons2/2619/PNG/96/among_us_netflix_icon_156927.png' alt='Usuário'></img>
                </a>

            
            </div>
        </header>
    )
}