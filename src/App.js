import logo from './logo.svg';
import './App.css';
import { CurrentYear } from './components/CurrentYear/CurrentYear';
import { createElement } from 'react';

export const App = () => {
	// return (
	// 	// декларативный стиль
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				This is just a dummy text
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<br></br>
	// 			<CurrentYear />
	// 		</header>
	// 	</div>


	// );

	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement(
				'img',
				{ src: logo, className: 'App-logo', alt: 'logo' }
			),
			createElement('p', null, 'This is just a dummy text'),
			createElement(
				'a',
				{ className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' },
				'Learn React'
			),
			createElement('br', null),
			createElement(CurrentYear, null)
		)
	);
};
