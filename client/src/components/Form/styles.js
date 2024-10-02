import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';

// You can style any MUI component
export const StyledForm = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: '10px 0',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: '20px',
}));
