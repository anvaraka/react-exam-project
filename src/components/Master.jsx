import { useEffect, useState } from 'react'
import '../App.css'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { callToAPi } from './homeSlice'
import { Card, CardMedia, CardContent, Typography, Grid, Modal } from '@mui/material'
import ModalCard from './Modal';

function Master() {
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.disney)

    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({})

    const handleOpen = (id) => {
        setOpen(true)

        for (let el of allData) {
            if (el._id === id) {
                setSelectedCard(el)
            }
        }
    };

    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(callToAPi())
    }, [])


    return (
        <>

            <h1 className='title'>Disney Characters </h1>
            <p className='header'>We will see some of the Disney Characters below and some information about them like list of moview, tv-shows they participated and etc</p>

            <Grid width='100%' container spacing={{ xs: 2, md: 3 }} rowSpacing={2}>

                {allData.map(el => {

                    return (

                        <Grid key={el._id} onClick={() => handleOpen(el._id)} item xs={2}>
                            <Card sx={{
                                width: "100%", height: "95%",
                                borderRadius: '25px', backgroundColor: 'rgba(250, 250, 29, 0.968)'
                            }} >
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

                <ModalCard selectedCard={selectedCard} open={open} handleOpen={handleOpen} handleClose={handleClose} />
            </Grid >
        </>
    )
}

export default Master