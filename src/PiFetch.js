import React, {useState,useEffect} from 'react'
import axios from 'axios'

function PiFetch() {
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
            {pi.value}
        </div>
       
       
    )
}

export default PiFetch
