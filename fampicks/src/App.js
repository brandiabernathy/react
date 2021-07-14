import logo from './logo.svg';
import './App.css';

import picks from './picks';
import WeeklyPicks from './components/WeeklyPicks';

function App() {
	console.log('picks', picks);
	const weeksInfo = picks.map(week => {
		return <WeeklyPicks picks={week.picks} upset={week.upset}/>
	})
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
			</header>
			<main>
				{weeksInfo}
			</main>
		</div>
	);
}

export default App;
