import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {

    const [currentVan, setCurrentVan] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <img src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </div>
    )
}