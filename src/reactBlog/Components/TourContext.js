import React ,{ createContext, useState, useEffect } from "react";
import axios from "axios";
export const TourContext=createContext();

const TourDetails = (props) =>{

    let [Tourist,setTourist] =useState([]);
    let [Fitness,setFitness]=useState([])
    let [Technology,setTechnology] = useState([]);
    let [Bollywood,setBollywood] = useState([]);
    let [Food,setFood]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/api/v1/tourism").then((res)=>{setTourist(res.data) })
     
         axios.get("http://localhost:5000/api/v1/fitness").then((res)=>{setFitness(res.data)})
 
         axios.get("http://localhost:5000/api/v1/technology").then((res)=>{ setTechnology(res.data)})
 
         axios.get("http://localhost:5000/api/v1/bollywood").then((res)=>{ setBollywood(res.data)})
 
         axios.get("http://localhost:5000/api/v1/food").then((res)=>{ setFood(res.data)})
     }, [])

return (
    <TourContext.Provider  value={{value1:[Tourist,setTourist],
                                   value2:[Fitness,setFitness],
                                   value3:[Technology,setTechnology],
                                   value4:[Bollywood,setBollywood],
                                   value5:[Food,setFood]}} >
    {props.children}
    </TourContext.Provider>
)
}
export default TourDetails