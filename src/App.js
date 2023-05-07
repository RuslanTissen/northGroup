import './App.scss';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer';
import Intr from './components/introduction/Intr';
import FrontMan from './components/frontMan/Frontman';
import House from './components/house/House';
import Districts from './components/districts/Districts';

function App() {

	return (
		<div className="app">

			<Header />

			<div className='app-container'>

				<Intr />

				<FrontMan />

				<House />

				<Districts />

			</div>

			<Footer />
		</div>
	);
}

export default App;