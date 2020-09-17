import React from 'react'
import { Map, TileLayer , Marker, Popup } from 'react-leaflet'
import './leafletmap.css'
import * as parkData from "../data/liste-librairie.json";

export default function LeafletMap() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Map center={[47.295298, 2.550805]} zoom={6}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/divergences/ckapdctf101321iozioh1a5xc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGl2ZXJnZW5jZXMiLCJhIjoiY2thcGU1bTZkMWVkNzJ6bXZxMjUzZG1mayJ9.k0hcee2Ul-JC2Vg7BGKFjg
        "
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
      />

      {parkData.features.map(park =>(
        <Marker
        key = {park.properties.PARK_ID}
        position={[
          park.geometry.coordinates[1],
          park.geometry.coordinates[0]
        ]}
        onClick={() => {
          setActivePark(park);
        }}
        />
      ))}
      
      {activePark && (
    <Popup
      position={[
        activePark.geometry.coordinates[1],
        activePark.geometry.coordinates[0]
      ]}
      onClose={() => {
        setActivePark(null);
      }}
    >
      <div>
        <h2>{activePark.properties.NAME}</h2>
        <p>{activePark.properties.DESCRIPTIO}</p>
      </div>
    </Popup>
  )}

    </Map>
  );
}
