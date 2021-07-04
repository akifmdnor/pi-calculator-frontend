import React, {useState,useEffect} from 'react'
import axios from 'axios'

function Suncalculator() {
    const [pi, setPi] = useState([])

    useEffect (() => {
        axios.get('http://localhost:8080/pi')
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
