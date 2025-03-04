import { Container } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import MainCard from "./MainCard"


export default function Main() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/data.json')
            .then(res => {
                setData(res.data)
            })
    }, [])
    console.log(data)
    return (

        <Container
            maxWidth="xl"
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                },
                gap: 5,
            }}
        >

            {
                data.map(item => <MainCard key={item._id} item={item} />)
            }

        </Container>

    )
}
