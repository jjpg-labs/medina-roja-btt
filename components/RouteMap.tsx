"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import "leaflet-gpx";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const ALMEDINA: [number, number] = [38.5417, -2.8867];

// Silence the default marker 404s. We render our own divIcons; this just
// prevents Leaflet from probing for marker-icon.png if anything falls through.
const TRANSPARENT_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
L.Icon.Default.mergeOptions({
  iconUrl: TRANSPARENT_PIXEL,
  iconRetinaUrl: TRANSPARENT_PIXEL,
  shadowUrl: TRANSPARENT_PIXEL,
});

type Props = { gpxUrl: string; routeColor: string };

function makeMarker(bg: string) {
  return L.divIcon({
    className: "mr-marker",
    html: `<span style="background:${bg};border:2px solid #D9CDA0;"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function GpxLayer({ gpxUrl, routeColor }: Props) {
  const map = useMap();
  const layerRef = useRef<L.Layer | null>(null);

  useEffect(() => {
    if (layerRef.current) {
      map.removeLayer(layerRef.current);
      layerRef.current = null;
    }

    type GpxOpts = {
      async: boolean;
      polyline_options?: object;
      marker_options?: object;
      markers?: object;
    };
    type GpxLayer = L.Layer & {
      on(event: string, fn: (e: { target: L.Layer & { getBounds(): L.LatLngBounds } }) => void): void;
    };
    type GpxCtor = new (gpx: string, opts: GpxOpts) => GpxLayer;
    const GPX = (L as unknown as { GPX: GpxCtor }).GPX;

    const gpx = new GPX(gpxUrl, {
      async: true,
      polyline_options: {
        color: routeColor,
        weight: 5,
        opacity: 0.95,
        lineCap: "round",
        lineJoin: "round",
      },
      markers: {
        startIcon: makeMarker("#4F5C4F"),
        endIcon: makeMarker("#8B4A3A"),
      },
    });

    gpx.on("loaded", (e) => {
      map.fitBounds(e.target.getBounds(), { padding: [24, 24] });
    });
    gpx.on("error", () => {
      // No GPX available — keep default Almedina center.
    });

    gpx.addTo(map);
    layerRef.current = gpx;

    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
        layerRef.current = null;
      }
    };
  }, [gpxUrl, routeColor, map]);

  return null;
}

export default function RouteMap({ gpxUrl, routeColor }: Props) {
  return (
    <MapContainer
      center={ALMEDINA}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GpxLayer gpxUrl={gpxUrl} routeColor={routeColor} />
    </MapContainer>
  );
}
