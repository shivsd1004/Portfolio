import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.scss";
import "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// JSX
function Map() {
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[26.4499, 80.3319]}
        zoom={8}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[26.4499, 80.3319]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default Map;
