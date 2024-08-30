import React from 'react'

const Footer = () => {
    return (


        <footer className="">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-white">© 2024 <a href="https://nissansenta.com/" className="hover:underline">Nissan Senta</a>. Todos los derechos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://nissansenta.com/conozcanos/nuestra_empresa" className="hover:underline me-4 md:me-6">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://nissansenta.com/sucursales" className="hover:underline me-4 md:me-6">Sucursales</a>
                    </li>
                    
                    
                </ul>
            </div>
        </footer>

    )
}

export default Footer