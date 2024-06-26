import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Resultados from './components/Resultados';
import Ayuda from './components/Ayuda';
import Cuenta from './components/Cuenta';
import ProductDetails from './components/ProductDetails';
import CollectionDetails from './components/CollectionDetails';
import Checkout from './components/Checkout';
import CompletaOrden from './components/CompletaOrden';


function App() {
	return (
		<div className='Aplication'>
			<Routes>
				<Route path='/' element={ <Inicio/> }/>
				<Route path='/resultados' element={ <Resultados/> }/>
				<Route path='/product/:id' Component={ProductDetails}/>
				<Route path='/collection/:id' Component={CollectionDetails}/>
				<Route path='/ayuda' element={ <Ayuda/> }/>
				<Route path='/cuenta' element={ <Cuenta/> }/>
				<Route path='/checkout' element={ <Checkout/>}/>
				<Route path='/completa' element={ <CompletaOrden/>}/>
			</Routes>
		</div>
	);
}

export default App;