import React, { Component } from 'react'
import { Typography, Modal, Box, CardMedia } from '@mui/material'

const style = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

export default class ModalCard extends Component {

    render() {
        const { selectedCard, open, handleClose } = this.props

        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <CardMedia
                        component="img"
                        alt="img"
                        image={selectedCard.imageUrl}
                    />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {selectedCard.name}
                    </Typography>

                    <Typography id="modal-modal-description" component="div">
                        <Typography variant="body1" color="green" sx={{ mt: 2 }}>
                            <b style={{ color: 'black' }}>Films :</b> {selectedCard.films}
                        </Typography>
                        <Typography variant="body1" color="green" sx={{ mt: 2 }}>
                            <b style={{ color: 'black' }}>ShortFilms :</b> {selectedCard.shortFilms}
                        </Typography>
                        <Typography variant="body1" color="green" sx={{ mt: 2 }}>
                            <b style={{ color: 'black' }}>TV-Shows :</b> {selectedCard.tvShows}
                        </Typography>
                        <Typography variant="body1" color="green" sx={{ mt: 2 }}>
                            <b style={{ color: 'black' }}>Park Attractions :</b> {selectedCard.parkAttractions}
                        </Typography>
                        <Typography variant="body1" color="green" sx={{ mt: 2 }}>
                            <b style={{ color: 'black' }}>Video Games :</b> {selectedCard.videoGames}
                        </Typography>
                    </Typography>
                </Box>
            </Modal>
        )
    }
}


