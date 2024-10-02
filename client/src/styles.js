import { styled } from '@mui/material/styles';
import { AppBar, Typography, Box } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    color: 'rgba(0,183,255, 1)',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
}));
