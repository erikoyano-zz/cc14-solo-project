import React from 'react';

function Weather(props) {
	const { weather } = props;
	console.log(weather);

	function temperature() {
		if (weather.main) {
			return <h1>{weather.main.temp}&deg;</h1>;
		}
	}

	function country() {
		if (weather.sys) {
			return (
				<h1>
					{weather.name}, {weather.sys.country}
				</h1>
			);
		}
	}
	function minmaxTemp() {
		if (weather.main) {
			return (
				<h3>
					<span className="min">{weather.main.temp_min}&deg;</span>
					<span className="max">{weather.main.temp_max}&deg;</span>
				</h3>
			);
		}
	}

	function weatherDesc() {
		if (weather.weather) {
			return <h1>{weather.weather[0].description}</h1>;
		}
	}

	return (
		<div className="container">
			<div className="cards">
				<h1>{country()} </h1>
				<h5 className="icon">
					<i className="wi wi-day-sunny display-1" />
				</h5>
				{temperature()}
				{weatherDesc()}
				{/**show max and min temp */}
				{minmaxTemp()}
			</div>
		</div>
	);
}

export default Weather;
