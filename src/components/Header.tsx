import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className="container mx-auto flex flex-wrap p-5 px-16 flex-col md:flex-row justify-between items-center">

                <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </Link>


                <div>
                    <Link href={'/'} className='hover:text-indigo-500 hover:font-semibold'>
                        연락하기
                    </Link>

                    <button className="inline-flex items-center ml-3 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-base mt-4 md:mt-0">
                        dark
                    </button>
                </div>

            </div>
        </header>
    )
}
