import React from 'react';
import { Link } from 'react-router-dom';

const sharedClasses = {
    textColor: 'text-zinc-900 dark:text-white',
    linkColor: 'text-blue-500 hover:text-blue-700',
    image: 'w-full h-auto',
    mt6: 'mt-6',
    mt4: 'mt-4',
    flexWrap: 'flex flex-wrap gap-4',
    quarterWidth: 'w-1/4',
    mt2: 'mt-2',
    textSm: 'text-sm',
};

function CompletaOrden () {
    return (
        <div className="bg-white dark:bg-zinc-800 p-6">
            <h1 className={`text-xl font-bold ${sharedClasses.textColor}`}>TIENDA</h1>
            <div className={sharedClasses.mt6}>
                <h2 className={`text-lg font-semibold ${sharedClasses.textColor}`}>¡Muchas gracias por tu pedido!</h2>
                <p className={`text-zinc-600 dark:text-zinc-400 ${sharedClasses.mt2}`}>Puedes ver el detalle y estado de tu pedido ingresando a <a href="#" className={sharedClasses.linkColor}>tu cuenta</a>.</p>
            </div>
            <div className={sharedClasses.mt6}>
                <h3 className={`font-semibold ${sharedClasses.textColor}`}>También de podría interesar...</h3>
                <div className={sharedClasses.flexWrap}>
                    <div className={sharedClasses.quarterWidth}>
                        <img src="https://placehold.co/200x150" alt="Product Image" className={sharedClasses.image} />
                        <h4 className={`mt-2 ${sharedClasses.textColor}`}>Item 1</h4>
                        <a href="#" className={`${sharedClasses.linkColor} ${sharedClasses.textSm}`}>Learn More</a>
                    </div>
                    <div className={sharedClasses.quarterWidth}>
                        <img src="https://placehold.co/200x150" alt="Product Image" className={sharedClasses.image} />
                        <h4 className={`mt-2 ${sharedClasses.textColor}`}>Item 2</h4>
                        <a href="#" className={`${sharedClasses.linkColor} ${sharedClasses.textSm}`}>Learn More</a>
                    </div>
                    <div className={sharedClasses.quarterWidth}>
                        <img src="https://placehold.co/200x150" alt="Product Image" className={sharedClasses.image} />
                        <h4 className={`mt-2 ${sharedClasses.textColor}`}>Item 3</h4>
                        <a href="#" className={`${sharedClasses.linkColor} ${sharedClasses.textSm}`}>Learn More</a>
                    </div>
                    <div className={sharedClasses.quarterWidth}>
                        <img src="https://placehold.co/200x150" alt="Product Image" className={sharedClasses.image} />
                        <h4 className={`mt-2 ${sharedClasses.textColor}`}>Item 4</h4>
                        <a href="#" className={`${sharedClasses.linkColor} ${sharedClasses.textSm}`}>Learn More</a>
                    </div>
                    <Link className='regresar' to='/'>
                        <button className='Inicio'>Inicio</button>
			        </Link>
                </div>
            </div>
        </div>
    );
};

export default CompletaOrden;
