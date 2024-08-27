import logo from './logo.svg';
import './App.css';
import { CurrentYear } from './components/CurrentYear/CurrentYear';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					This is just a dummy text
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>

				<br></br>

				<CurrentYear />
			</header>
		</div>
	);
};