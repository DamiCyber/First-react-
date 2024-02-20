import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Uploadfile = () => {
    const url = "http://localhost:8000/upload"
    const [myfile, setMyfile] = useState("")
    const [data, setData] = useState([])

    const changeFile = (e) => {
        console.log(e.target.files[0]);
        let myImage = e.target.files[0];
        let reader = new FileReader()
        reader.readAsDataURL(myImage)
        reader.onload = () => {
            setMyfile(reader.result)
        }
    }

    const upload = () => {
        axios.post(url, { myfile }).then((res)=>{
            setData(res.data)
            console.log(res);
        })
    }

    return (
        <div>
            <input type="file" onChange={(e) => changeFile(e)} />
            <button onClick={upload}>upload</button>
            <img src={data.storedImage} alt="" />
        </div>
    )
}

export default Uploadfile
