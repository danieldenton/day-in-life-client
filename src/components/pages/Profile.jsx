import Photo from '../partials/Photo'
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Profile() {
    const { id } = useParams()
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem("jwt")
                const options = {
                headers: {
                "Authorization": token
            }
        }
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-vi/users/${id}`, options )
        console.log(response.data)
        setPhotos(response.data)

            } catch (err) {
                console.log(err)
            }
        })()
        
        
    }, [])

        // const userPhotos = photos.map((photo, idx) => {
        //     return (
        //       <div key={`photo-link${idx}`}>
        //         <Link to={`pictures/${photos._id}`}></Link>
        //         <div>
        //         {photo.img}
        //         </div>
        //       </div>
        // //     )
        // })
    return (
        <>
            <h1>Testing</h1>
            {/* {userPhotos} */}
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
        </>
    )
}
