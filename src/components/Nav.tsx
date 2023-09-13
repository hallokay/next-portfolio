import React from 'react'
// import './Nav.module.css'
import Link from 'next/link'
export default function Nav() {
    return (
        <nav className='nav_container'>
            <ul className='nav_manu'>

                <li>
                    <Link href={'/'} >
                        home
                    </Link>
                </li>

                <li>
                    <Link href={'/about'} >
                        about
                    </Link>
                </li>
            </ul>

        </nav>


    )
}
