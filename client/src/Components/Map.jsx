import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";

const Map = () => {
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });
  
  const handleMapLoad = useCallback((map) => {
	setMap(map);
  
	const myLatlng = { lat: 29.749907, lng: -95.358421 };
  
	const initialInfoWindow = new window.google.maps.InfoWindow({
	  content: "Click the map to get Lat/Lng!",
	  position: myLatlng,
	});
  
	setInfoWindow((prevInfoWindow) => {
	  // Close the previous infoWindow if it exists
	  if (prevInfoWindow) {
		prevInfoWindow.close();
	  }
  
	  initialInfoWindow.open(map);
  
	  map.addListener("click", (mapsMouseEvent) => {
		// Close the current infoWindow.
		if (prevInfoWindow) {
		  prevInfoWindow.close();
		}
  
		const newInfoWindow = new window.google.maps.InfoWindow({
		  position: mapsMouseEvent.latLng,
		});
  
		newInfoWindow.setContent(
		  JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
		);
		newInfoWindow.open(map);
		setInfoWindow(newInfoWindow);
	  });
  
	  return initialInfoWindow;
	});
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "92vh" }}
      center={{ lat: 29.749907, lng: -95.358421 }}
      zoom={7}
      onLoad={handleMapLoad}
    >
      {infoWindow && (
        <InfoWindow anchor={infoWindow.getPosition()}>
          <div>{infoWindow.getContent()}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : null;
};

export default Map;
