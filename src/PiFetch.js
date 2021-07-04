import React, {useState,useEffect} from 'react'
import axios from 'axios'

function PiFetch() {
    const [pi, setPi] = useState([])

    useEffect (() => {
        axios.get('http://localhost:8080/latest-pi')
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
