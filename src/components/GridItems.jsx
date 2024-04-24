import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import ModalCard from './Modal';

function GridItems({ allData }) {

    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({})

    const handleOpen = (id) => {
        if (allData._id == id) {
            setOpen(true)
            setSelectedCard(allData)
        }
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item  xs={2} sm={2} md={2} key={allData._id} id={allData._id} onClick={(e) => handleOpen(e.currentTarget.id)}>

                <Card sx={{
                    width: "100%", height: "95%",
                    borderRadius: '25px', backgroundColor: 'rgba(250, 250, 29, 0.968)'
                }} >

                    <CardMedia
                        component="img"
                        alt="img"
                        width="100%"
                        height='200'
                        image={allData.imageUrl}
                    />
                    <CardContent sx={{ padding: "15px", margin: '20px', lineHeight: '25px' }}>

                        {allData.name.length > 0 ? <Typography gutterBottom variant="h5" component="div">
                            {allData.name}
                        </Typography> : ''}

                        {allData.films.length > 0 ? <Typography variant="bod1" color="blue">  Films :
                            <Typography noWrap variant="body2" color="green">{allData.films}</Typography>
                        </Typography> : ''}

                        {allData.shortFilms.length > 0 ? <Typography variant="bod1" color="blue">
                            ShortFilms :
                            <Typography noWrap variant="body2" color="green">{allData.shortFilms}</Typography>
                        </Typography> : ''}

                        {allData.tvShows.length > 0 ? <Typography variant="bod1" color="blue">
                            TV-Shows :
                            <Typography noWrap variant="body2" color="green">{allData.tvShows}</Typography>
                        </Typography> : ''}

                        {allData.parkAttractions.length > 0 ? <Typography variant="bod1" color="blue">
                            Park Attractions :
                            <Typography noWrap variant="body2" color="green">{allData.parkAttractions}</Typography>
                        </Typography> : ''}

                        {allData.parkAttractions.length > 0 ? <Typography variant="bod1" color="blue">
                            Park Attractions :
                            <Typography noWrap variant="body2" color="green">{allData.parkAttractions}</Typography>
                        </Typography> : ''}

                        {allData.videoGames.length > 0 ? <Typography variant="bod1" color="blue">
                            Video Games :
                            <Typography noWrap variant="body2" color="green">{allData.videoGames}</Typography>
                        </Typography> : ''}

                    </CardContent>
                </Card>
            </Grid>
            <ModalCard selectedCard={selectedCard} open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </>
    )
}

export default GridItems