import React, { useState, useEffect } from 'react';
import rainy from '../video/rainy.mp4';
import cloudy from '../video/cloudy.mov';
import sunny from '../video/sunny.mov';
import { Container, Col, Row } from 'react-bootstrap';

export default function Weather(props) {
	const { weather } = props;
	const [background, setBackground] = useState('asdf');

	useEffect(backgroundImage, [weather]);

	function temperature() {
		if (weather.main) {
			return <h1 className="temp">{Math.floor(weather.main.temp)}&deg;</h1>;
		}
	}

	function location() {
		if (weather.sys) {
			return (
				<div>
					{weather.name}, {weather.sys.country}
				</div>
			);
		}
	}
	function minmaxTemp() {
		if (weather.main) {
			return (
				<h3>
					<span className="min">
						min {Math.floor(weather.main.temp_min)}&deg;
					</span>
					<span className="max">
						max {Math.floor(weather.main.temp_max)}&deg;
					</span>
				</h3>
			);
		}
	}

	function weatherDesc() {
		if (weather.weather) {
			return <h1 id="weatherDesc">{weather.weather[0].description}</h1>;
		}
	}

	function weatherIcon() {
		if (weather.weather) {
			if (weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
				return <i className={`wi wi-thunder display-1`} />;
			}
			if (weather.weather[0].id >= 500 && weather.weather[0].id <= 531) {
				return <i className={`wi wi-rain display-1`} />;
			}
			if (weather.weather[0].id >= 801 && weather.weather[0].id <= 804) {
				return <i className={`wi wi-cloud display-1`} />;
			}
			if (weather.weather[0].id >= 800) {
				return <i className={`wi wi-day-sunny display-1`} />;
			}
		}
	}

	function backgroundImage() {
		if (weather.weather) {
			// if (weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
			// 	setBackground(thunder);
			// }
			if (weather.weather[0].id >= 500 && weather.weather[0].id <= 531) {
				return setBackground(rainy);
			}
			if (weather.weather[0].id >= 801 && weather.weather[0].id <= 804) {
				return setBackground(cloudy);
			}
			if (weather.weather[0].id >= 800) {
				return setBackground(sunny);
			}
		}
	}

	function others() {
		if (weather.main) {
			return (
				<h3>
					<Container>
						<Row>
							<Col>
								<i className={`wi wi-humidity display-7`} /> humidity:{' '}
								{weather.main.humidity}
							</Col>

							<Col>
								<i className={`wi wi-barometer display-7`} /> pressure:{' '}
								{weather.main.pressure}
							</Col>
						</Row>
					</Container>
				</h3>
			);
		}
	}

	function sunTime() {
		if (weather.sys) {
			const date = new Date(weather.sys.sunrise * 1000);
			const hours = date.getHours();
			const minutes = '0' + date.getMinutes();
			const formattedSunrise = hours + ':' + minutes.substr(-2);

			const date2 = new Date(weather.sys.sunset * 1000);
			const hours2 = date2.getHours();
			const minutes2 = '' + '0' + date2.getMinutes();
			const formattedSunset = '' + hours2 + ':' + minutes2.substr(-2);

			return (
				<>
					<h3>
						<Container>
							<Row>
								<Col className="desc">
									<i className={`wi wi-sunrise display-7`} />
									Sunrise: {formattedSunrise}
								</Col>

								<Col className="desc">
									<i className={`wi wi-sunset display-7`} />
									Sunset: {formattedSunset}
								</Col>
							</Row>
						</Container>
					</h3>
				</>
			);
		}
	}

	return (
		<Container>
			<Row>
				<Col md="auto">
					<div className="container">
						<video
							className="background-video"
							src={background}
							type="video/mp4"
							width="100%"
							autoPlay
							loop
							muted
						/>
						<Col>
							<Row>
								<Col>
									<div className="overlay">
										<Col>
											<h1 className="location">{location()} </h1>
										</Col>

										<Col>
											<h5 className="icon">{weatherIcon()} </h5>
										</Col>

										<Col>{temperature()}</Col>

										<Col>
											<div id="weatherDesc">{weatherDesc()}</div>
										</Col>

										<Col>{minmaxTemp()}</Col>
										<Col>{others()}</Col>
										<Col>{sunTime()}</Col>
									</div>
								</Col>
							</Row>
						</Col>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
