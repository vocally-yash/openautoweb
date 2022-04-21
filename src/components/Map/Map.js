import styles from "../Map/Map.module.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import MapStyle from "./MapStyle";

const containerStyle = {
    width: '445px',
    height: '630px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

export default function Maps(){
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map){
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnMount = useCallback(function callback(map){
        setMap(null)
    }, [])

    return(
        <div className={styles.mapModal}>
            { isLoaded ? (
                <div style={{width:'445px',height:'630px'}}>
                    <div className={styles.mapModalLayer1}>
                        <div>    
                            <input type="text" placeholder="Enter your address" className={styles.mapModalInput}/>
                        </div>
                        <div style={{display:'flex',flexDirection:'row-reverse'}}>
                            <button className={styles.mapModalButton}>Click</button>
                        </div>
                    </div>
                    <div>
                        <GoogleMap style={{zIndex:'-1'}} defaultOptions={{
                            styles: MapStyle,
                        }} mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnMount}><></></GoogleMap> 
                    </div>
                </div>
            ) : <></>}
        </div>
    )
}