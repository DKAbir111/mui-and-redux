import React from 'react'
import Divider from '@mui/material/Divider';
import { Box, Button, Container, Typography } from '@mui/material';
import SouthEastIcon from '@mui/icons-material/SouthEast';
export default function Dividers() {
    return (
        <div >
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Broward County
                    </Typography>
                    <Button variant='contained' sx={{ backgroundColor: '#ff5a3d', paddingY: '10px' }}><SouthEastIcon /> </Button>
                </Box>
                <Divider sx={{ pt: 2 }} />
            </Container>

        </div>
    )
}