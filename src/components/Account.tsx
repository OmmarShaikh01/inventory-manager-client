import { Box, Container } from '@mui/material';
import React from 'react';

function Account() {
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
            <h1>Account</h1>
        </Container>
    );}

export default Account;

