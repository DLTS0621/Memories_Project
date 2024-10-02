import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material'; // Keep only the necessary imports

// You can style any MUI component
export const StyledCard = styled(Card)(({ theme }) => ({
    margin: '20px',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
}));
