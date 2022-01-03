import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const BottomContainerStyle = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingTop: '1.9rem'
  }
}));

const useStyles = makeStyles(() => ({
  titleContainer: {
    margin: '1rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-.02rem'
  }
}));

export { BottomContainerStyle, useStyles };
