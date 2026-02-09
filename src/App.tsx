import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import { useGeographic } from "ol/proj";

useGeographic(); // Show coordinates as [longitude, latitude]

export default function App() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({ source: new OSM() }),
                new VectorLayer({
                    source: new VectorSource({
                        url: "/geojson/fylker.json",
                        format: new GeoJSON(),
                    }),
                }),
            ],
            view: new View({
                center: [10.75, 59.91], // Oslo
                zoom: 5,
            }),
        });
    }, []);

    return <div ref={mapRef} className="map" />;
}
