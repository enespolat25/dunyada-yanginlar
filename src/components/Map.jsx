import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';
import { useState } from 'react';

const Map = ({ eventData, center, zoom }) => {
    const[LocInfo , setLocInfo] = useState(null);
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocInfo({ id: ev.id , title: ev.title})}
            />
        }
        return null;
    })
  return (
    <div className='map'>
        <GoogleMapReact 
            bootstrapURLKeys={{key : 
                ''}}
                defaultCenter = { center }
                defaultZoom = { zoom }
                >
                    {markers}
                    <LocationMarker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
        {LocInfo && <LocationInfo info = {LocInfo} />}
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 39.2023,
        lng: 35.1012
    },
    zoom: 7
}

export default Map