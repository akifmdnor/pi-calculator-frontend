import React, {useState,useEffect} from 'react'
import axios from 'axios'

function PiFetch() {
    const [pi, setPi] = useState([])

    var url = "https://pi-calculator-api-b53d1fffaadc.herokuapp.com/latest-pi";
 
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
            {pi.value}
        </div>
       
       
    )
}

export default PiFetch
