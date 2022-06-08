import React , {useState} from  "react";
import "./css/style.css"

 const WeatherApp =()=>{
    const [city,setCity]=useState("DELHI");
    return(
        <>
    <div className="box">
        <div className="inputData">
        <input type="search"
        className="inputField"
        onChange={(event) } />
        </div>
    
        <div className="info">
        <h1 className="location">   
        <i className="fa-solid fa-street-view"></i>{city}
        </h1>
        <h1 className="Temper">52.5 cel</h1>
        <h2>max temp and min temp</h2>
        </div>
    </div>
        </>
    )
}
export default WeatherApp;