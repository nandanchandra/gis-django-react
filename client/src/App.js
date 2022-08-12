import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
const App = () => {
	const position = [20.5937, 78.9629];
	const zoom = 5;
	return (
		<MapContainer center={position} zoom={zoom}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	);
};

export default App;
