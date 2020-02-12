
import React from "react";
import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import { useSelector } from 'react-redux';

export function MapComponent(props) {
    const map_center = useSelector(state => state.map_center)
    const markers = useSelector(state => state.markers)

    var zoom = 15;


    return (
        <Map zoom={zoom} center={map_center} style={{ width: '900px', height: '700px' }}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <CircleMarker center={map_center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </CircleMarker>

            {(markers.a) &&
                <Marker position={markers.a}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            }

            {(markers.b) &&
                <Marker position={markers.b}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            }
        </Map>
    );

}

