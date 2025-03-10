import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';
import { MyComponent } from './MyComponent';

export function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{ /*декларативный*/}
				<div>{(new Date().getFullYear())}</div>
				<MyComponent />
			</header>
		</div>
	);
}
