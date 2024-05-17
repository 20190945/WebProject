import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Mas_vendidos from './components/Mas_vendidos';
import Nuevos from './components/Nuevos';
import Ofertas from './components/Ofertas';
import Ayuda from './components/Ayuda';
import Cuenta from './components/Cuenta';


function App() {
	return (
		<div className='Aplication'>
			<Routes>
				<Route path='/' element={ <Inicio/> }/>
				<Route path='/mas_vendidos' element={ <Mas_vendidos/> }/>
				<Route path='/nuevos' element={ <Nuevos/> }/>
				<Route path='/ofertas' element={ <Ofertas/> }/>
				<Route path='/ayuda' element={ <Ayuda/> }/>
				<Route path='/cuenta' element={ <Cuenta/> }/>
			</Routes>
		</div>
	);
}

export default App;