import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Resultados from './components/Resultados';
import Ayuda from './components/Ayuda';
import Cuenta from './components/Cuenta';


function App() {
	return (
		<div className='Aplication'>
			<Routes>
				<Route path='/' element={ <Inicio/> }/>
				<Route path='/resultados' element={ <Resultados/> }/>
				<Route path='/ayuda' element={ <Ayuda/> }/>
				<Route path='/cuenta' element={ <Cuenta/> }/>
			</Routes>
		</div>
	);
}

export default App;