import './App.scss';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer';
import Intr from './components/introduction/Intr';

function App() {

	return (
		<div className="app">

			<Header />

			<div className='app-container'>

				<Intr />

			</div>

			<Footer />
		</div>
	);
}

export default App;