import { useEffect } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { callToAPi } from './homeSlice'
import { Card, CardMedia, CardContent, Typography, Grid, Box, Button, CardActions } from '@mui/material'

function Master() {
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.disney)

    useEffect(() => {
        dispatch(callToAPi())
    }, [])

    console.log(allData)



    return (
        <>
            <h1>Disney Characters </h1>
            <p className='header'>We will see some of the Disney Characters below and some information about them, list of moview or tv-shows they participated and etc</p>


            <Grid width='100%' container spacing={{ xs: 2, md: 3 }} rowSpacing={2}>
                {allData.map(el => {
                    return (
                        <Grid item xs={2}>

                            <Card key={el._id} sx={{ width: "100%", height: "95%" }}>
                                <CardMedia
                                    component="img"
                                    alt="img"
                                    width="100%"
                                    height='270'
                                    image={el.imageUrl}
                                />
                                <CardContent sx={{ padding: "15px", margin: '20px', lineHeight: '25px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {el.name}
                                    </Typography>

                                    <Typography variant="bod1" color="blue">  Films :
                                        <Typography noWrap variant="body2" color="green">{el.films}</Typography>
                                    </Typography>

                                    <Typography variant="bod1" color="blue">
                                        ShortFilms :
                                        <Typography noWrap variant="body2" color="green">{el.shortFilms}</Typography >
                                    </Typography>
                                    <Typography variant="bod1" color="blue">
                                        TV-Shows :
                                        <Typography noWrap variant="body2" color="green">{el.tvShows}</Typography >
                                    </Typography>
                                    <Typography variant="bod1" color="blue">
                                        Park Attractions :
                                        <Typography noWrap variant="body2" color="green">{el.parkAttractions}</Typography >
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid >
                    )
                })}
            </Grid >


        </>
    )
}

export default Master