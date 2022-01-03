import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

import {useStyles}  from "../../theme/bottomContainerStyle"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CourseCurriculum = ({data}) => {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <Box sx={{m:1, pt: 1}}>
        <Typography display="block" variant="h6" className={classes.titleContainer} style={{marginLeft: 0}}>
            Course content
        </Typography>    
      {data.map((item, key) => (
      <Accordion expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)} key={key}>
        <AccordionSummary aria-controls={`panel{${key}}d-content`} id={`panel${key}d-header`}>
          <Typography sx={{fontWeight: 700}}>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
            <List dense={true}>
              {item.topics.map( (item, i) => (
                    <ListItem key={i}>
                    <ListItemIcon>
                      <PlayCircleFilledWhiteIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                    />        
                    </ListItem>            
                  ))
                  }               
              </List>            

        </AccordionDetails>
      </Accordion>

      ))} 
    </Box>
  );
}

export default CourseCurriculum