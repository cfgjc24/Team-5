import { useState, useEffect, useMemo } from "react";
import { getMarkers } from "../../config/config" ;
import { getDocs, getDoc, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'

export default function MarkerList() {

    const [markerList, setMarkerList] = useState([{}]) ;

    useEffect(() => {
        getMarkers().then((value: any []) => {
            // console.log(value) ;
            setMarkerList(value) ;
        })
        
    },[])


    return <>
        <div className = "markerList" >
            {markerList.map((marker => (
                !("active" in marker) ? <></> : (
                    <div className="marker">
                        <h2>Name: { JSON.stringify(marker.name) }</h2>
                        <h2>Meeting name: { JSON.stringify(marker.clientName) }</h2>
                        <h2>Time: { ("time" in marker) ? JSON.stringify(marker.time.toDate().toLocaleTimeString('en-US')) : ""}</h2>
                        <h2> Place: { JSON.stringify(marker.coordinates) }</h2>
                        <br></br>
                    </div>
                )
            )))}   
        </div>    
    </>
    
}

