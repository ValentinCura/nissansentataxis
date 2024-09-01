import React, { useState } from 'react';

const FormInscription = () => {
    // Define una variable de estado para cada campo
    const [nombre, setNombre] = useState('');
    const [placa, setPlaca] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');

    // Función para manejar el cambio en los inputs
    const handleNombreChange = (e) => setNombre(e.target.value);
    const handlePlacaChange = (e) => setPlaca(e.target.value);
    const handleMailChange = (e) => setMail(e.target.value);
    const handleTelefonoChange = (e) => setTelefono(e.target.value);

    const handleSubmit = (e) => {
        const mensaje = `Hola, deseo inscribirme en el evento del dia 14/09 en el Autodromo Vip.
                     Nombre: ${nombre}.
                     Placa: ${placa}.
                     Email: ${mail}.
                     Telefono: ${telefono}.`;
        // Codificar el mensaje para que sea válido en la URL
        const mensajeCodificado = encodeURIComponent(mensaje);

        // Redirigir a WhatsApp con el mensaje
        window.open(`https://wa.me/+5493413438617?text=${mensajeCodificado}`, '_blank');
    };

    return (
        <form className="border bg-white bg-opacity-20 backdrop-blur-sm rounded-lg" onSubmit={handleSubmit}>
            <div className="z-0 mb-5 mt-5 group items-end">
                <input 
                    type="text" 
                    name="floating_email" 
                    id="text-name" 
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                    value={nombre} 
                    onChange={handleNombreChange} 
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2">Nombre y Apellido</label>
            </div>
            <div className="relative z-0 mb-5 group">
                <input 
                    type="text" 
                    name="text-placa" 
                    id="text-placa" 
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                    value={placa} 
                    onChange={handlePlacaChange} 
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero de Placa</label>
            </div>
            <div className="relative z-0 mb-5 group">
                <input 
                    type="mail" 
                    name="mail" 
                    id="mail" 
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                    value={mail} 
                    onChange={handleMailChange} 
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mail</label>
            </div>
            
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 group">
                    <input 
                        type="text"  
                        name="telefono" 
                        id="telefono" 
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        required 
                        value={telefono} 
                        onChange={handleTelefonoChange} 
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    );
};

export default FormInscription;
