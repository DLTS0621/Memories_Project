import React from "react";
import { Container, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import { StyledAppBar, StyledTypography, StyledBox } from './styles';

const App = () => {
    return (
        <Container maxWidth="lg">
            <StyledAppBar position="static" color="inherit">
                <StyledBox>
                    <img 
                        src={memories} 
                        alt="memories" 
                        style={{ width: '150px', height: 'auto', marginBottom: '10px' }} // Adjust size and margin
                    />
                    <StyledTypography variant="h2" align="center">
                        Memories
                    </StyledTypography>
                </StyledBox>
            </StyledAppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
