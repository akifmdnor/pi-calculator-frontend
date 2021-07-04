import React, {useState,useEffect} from 'react'
import axios from 'axios'

function Suncalculator() {
    const [pi, setPi] = useState([])
    var url = "https://majestic-voyageurs-92598.herokuapp.com/pi";

    useEffect (() => {
        axios.get(url)
        .then(res=> {
            console.log(res.data.request)
            setPi(res.data.request)
        }).catch (err => {
            console.log(err)
        })
    },[])
    return (
        <div>
            <p>Sun circumference is </p>
            {pi.value* 1.39} Million KM
        </div>
       
       
    )
}

export default Suncalculator
