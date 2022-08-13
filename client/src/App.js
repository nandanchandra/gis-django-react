import axios from "axios";

import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import useSWR from "swr";

import "./App.css";

export const icon = new Icon({
	iconUrl: "leaf-green.png",
	shadowUrl: "leaf-shadow.png",
	iconSize: [28, 85],
	shadowSize: [40, 74],
	iconAnchor: [22, 94],
	shadowAnchor: [4, 62],
	popupAnchor: [-3, -76],
});

const api = (url) => axios.get(url).then((res) => res.data);

const App = () => {
	const [activeHospital, setActiveHospital] = useState(null);

	const { data, error } = useSWR("/api/hospital", api);

	const hospital = data && !error ? data : {};
	const position = [20.5937, 78.9629];

	const zoom = 10;

	if (error) {
		return <Alert variant="danger">OOps a Problem occur</Alert>;
	}
	if (!data) {
		return (
			<Spinner
				animation="border"
				variant="danger"
				role="status"
				style={{
					width: "400px",
					height: "400px",
					margin: "auto",
					display: "block",
				}}
			/>
		);
	}
	return (
		<MapContainer center={position} zoom={zoom}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{hospital.features.map((hospital) => (
				<Marker
					key={hospital.properties.name}
					position={[
						hospital.geometry.coordinates[1],
						hospital.geometry.coordinates[0],
					]}
					onClick={() => {
						setActiveHospital(hospital);
					}}
					icon={icon}
				>
					<Popup
						position={[
							hospital.geometry.coordinates[1],
							hospital.geometry.coordinates[0],
						]}
						onClose={() => {
							setActiveHospital(null);
						}}
					>
						<div>
							<h6>{hospital.properties.name}</h6>
							<p>{hospital.properties.province}</p>
							<p>{hospital.properties.district}</p>
							<p>Department: {hospital.properties.department}</p>
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default App;
