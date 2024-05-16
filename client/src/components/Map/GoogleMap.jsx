import React, {useEffect} from "react";
import {APIProvider, Map, AdvancedMarker, Pin, useApiIsLoaded} from '@vis.gl/react-google-maps';

const API_KEY =
	globalThis.GOOGLE_MAPS_API_KEY ?? (import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

const GoogleMap = () => {
	
	const apiIsLoaded = useApiIsLoaded();

	useEffect(() => {
		if (!apiIsLoaded) return;

		// when the maps library is loaded, apiIsLoaded will be true and the API can be accessed using the global `google.maps` namespace.
	}, [apiIsLoaded]);
	

	const AUSTIN_LAT = 30.3;
	const AUSTIN_LONG = -97.7;

	const position = {lat: AUSTIN_LAT, lng: AUSTIN_LONG};
	const MONGOLIA_LAT = 47.6;
	const MONGOLIA_LONG = 106.6;

	return (
		<APIProvider apiKey={API_KEY} libraries={['marker']}>
			<Map 
				mapId={'bf51a910020fa25a'}
				center={position} 
				zoom={4}
				gestureHandling={'greedy'}
				disableDefaultUI={true}
				className="flex w-full h-[50vh]"
			>
				{/* advanced marker with customized pin */}
				<AdvancedMarker
					position={{lat: AUSTIN_LAT, lng: AUSTIN_LONG}}
					title={'Austin, TX, USA'}>
					<Pin
						background={'#22ccff'}
						borderColor={'#1e89a1'}
						glyphColor={'#0f677a'}>
					</Pin>
				</AdvancedMarker>
				<AdvancedMarker
					position={{lat: MONGOLIA_LAT, lng: MONGOLIA_LONG}}
					title={'Ulaanbaatar, Mongolia'}>
					<Pin
						background={'#22ccff'}
						borderColor={'#1e89a1'}
						glyphColor={'#0f677a'}>
					</Pin>
				</AdvancedMarker>
			</Map>
		</APIProvider>
	);
};

export default GoogleMap;