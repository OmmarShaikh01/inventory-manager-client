import { Box, Container } from '@mui/material';
import React from 'react';

function Inventory() {
    return( 
        <Container 
            sx={{
                backgroundColor: "grey.900",
                margin: "8px 8px 4px 4px",
                borderRadius: "8px"                               
            }}
            maxWidth={false}
            disableGutters={true}
        >
            <h1>Inventory</h1>
        </Container>
    );}

export default Inventory;