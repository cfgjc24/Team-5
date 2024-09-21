import { useState, useEffect } from "react";

export default function MarkerList() {

    const [markerList, setMarkerList] = useState([["John Smith", "Tom Cruise", "9:30 AM", "Home"]]) ;

    function addMarker(newMarker: string[]) {
        setMarkerList((markerList) => ([...markerList, newMarker])) ;
        console.log(markerList) ;
    }

    useEffect(() => {
        addMarker(["Jesse Xie", "Bob", "12:30 AM", "Park"]) ;
        addMarker(["Bill", "Joe", "2:30 PM", "Library"]) ;
    },[])

    
    
    
    return <>
        <div className = "markerList" >
            {markerList.map((marker => (
                <div>
                    <h2>Name: { marker[0] }</h2>
                    <h2>Meeting: { marker[1] }</h2>
                    <h2>Time: { marker[2] }</h2>
                    <h2> Place: { marker[3] }</h2>
                    <br></br>
                </div>
            )))}    
        </div>    
    </>
    
}

