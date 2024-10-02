import { styled } from '@mui/material/styles';
import { Container } from '@mui/material'; // Import any necessary MUI components

const MainContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

const SmMargin = styled('div')(({ theme }) => ({
    margin: theme.spacing(1),
}));

const ActionDiv = styled('div')(() => ({
    textAlign: 'center',
}));

export { MainContainer, SmMargin, ActionDiv }; // Export the styled components
