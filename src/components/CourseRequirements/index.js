import React from 'react'
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import GrainIcon from '@mui/icons-material/Grain';

import {useStyles}  from "../../theme/bottomContainerStyle"

const CourseRequirements = ({data}) => {
  
  const classes = useStyles();

  return (
    <Box sx={{m:1, pt: 1}}>
        <Typography display="block" variant="h6" className={classes.titleContainer} style={{marginLeft: 0}}>
          Requirements
        </Typography>    
        <List dense={true} >
          {data.map((item, key) => (
              <ListItem  key={key} >
                <ListItemIcon>
                  <GrainIcon />
                </ListItemIcon>                
                <ListItemText 
                  primary={item.text}
                />
              </ListItem>
          ))} 
          </List>

    </Box>
  );
}

export default CourseRequirements