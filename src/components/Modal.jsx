import React from 'react'
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

function ModalCard({ selectedCard, open, handleClose }) {
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
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Films :
                    <Typography variant="body2" color="green">{selectedCard.films}</Typography>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    ShortFilms :
                    <Typography variant="body2" color="green">{selectedCard.shortFilms}</Typography>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    TV-Shows :
                    <Typography variant="body2" color="green">{selectedCard.tvShows}</Typography>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Park Attractions :
                    <Typography variant="body2" color="green">{selectedCard.parkAttractions}</Typography>
                </Typography>

            </Box>
        </Modal>
    )
}
export default ModalCard


