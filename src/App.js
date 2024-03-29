import { Container, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './component/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import axios from 'axios';
require('dotenv').config();

function App() {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	async function getWeather() {
		let req = await axios.get(`/weather/${query}`);
		let res = req.data;
		console.log(res);
		setWeather(res);
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			getWeather();
		}
	}

	useEffect(getWeather, []);

	return (
		<Container fluid>
			<Row>
				<Col>
					<div className="app">
						<main>
							<Col md="auto">
								<div className="search-box"></div>

								<input
									type="text"
									className="search-bar"
									placeholder="Search by Country or City..."
									onChange={(e) => setQuery(e.target.value)}
									value={query}
									onKeyPress={handleKeyPress}
								/>
							</Col>
							<Weather weather={weather} />
						</main>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
