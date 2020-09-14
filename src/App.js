import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './component/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

function App() {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	async function getWeather() {
		const api = {
			key: '990c548db80372ce5608848c39a3ac1e',
			base: 'https://api.openweathermap.org/data/2.5/',
		};

		const fetchedAPI = await fetch(
			// 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=990c548db80372ce5608848c39a3ac1e'
			`${api.base}weather?q=Tokyo,jp&units=metric&appid=${api.key}`
		);
		const res = await fetchedAPI.json();
		setWeather(res);
	}

	useEffect(() => {
		getWeather();
	}, []);

	return (
		<div className="App">
			<div className="search-box">
				<input
					type="text"
					className="search-bar"
					placeholder="Search..."
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					onKeyPress={getWeather}
				/>

				<Weather weather={weather} />
			</div>
		</div>
	);
}

export default App;
