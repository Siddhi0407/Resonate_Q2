import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { useDispatchMap } from "./hooks/mapHook";
import { MarkerList } from "./Marker/MarkerList";

export const Map = () => {
  const mapDispatch = useDispatchMap();

  const [mapViewport, setMapViewport] = useState({
    height: "100vh",
    width: "100wh",
    longitude: 75.300293,
    latitude: 19.663280,
    zoom: 5
  });

  React.useEffect(() => {
    mapDispatch({ type: "ADD_MARKER", payload: { marker: [76.36596682812643, 19.71500002828729] } })
  }, []);

  return (
    <ReactMapGL
      {...mapViewport}
      mapboxApiAccessToken="pk.eyJ1IjoiZXJuZWJ1dGEiLCJhIjoiY2s2bDVwYTRlMGFwdDNncGE0ZWdjaWZzMCJ9.2PppNmYQsYZ8HDSjEGwjCA"
      mapStyle="mapbox://styles/ernebuta/ck6l5q6me1dmn1ip74713pndm"
      onViewportChange={setMapViewport}
    // onClick={x => {
    //   x.srcEvent.which === 1 &&
    //     mapDispatch({ type: "ADD_MARKER", payload: { marker: [76.36596682812643, 19.71500002828729] } });
    // }}
    >
      {console.log("redraw")}
      <MarkerList />
    </ReactMapGL>
  );
};
