import React from 'react'
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import {useStyles}  from "../../theme/bottomContainerStyle"

import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem'
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { useTheme } from '@mui/styles';

const CourseInstructor = ({data}) => {
  
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box sx={{m:1, pt: 1}}>
        <Typography display="block" variant="h6" className={classes.titleContainer} style={{marginLeft: 0}}>
            Instructors
        </Typography>
        <Typography display="block" variant="h6" sx={{ color: theme.palette.primary.main,  textDecoration: "none"}}>
              {data.name}
        </Typography>
        <Typography display="block" variant="body2" sx={{ color: "#6a6f73",  textDecoration: "none"}}>
              {data.jobTitle}
        </Typography>      
        <Box display="flex" alignItems="center" sx={{pt:2}}>
          <img
            src="./autor.jpg"
            alt="logo"
            style={{
              width: "8.2re",
              height: "8.2rem",
              border: "1px solid #d1d7dc",
              borderRadius:"50%"}}
          />
          <Box>
            <List dense={true}>
              <ListItem >
                <StarIcon />
                <Typography display="block" variant="body2" sx={{pl: 1}}>{data.score} Instructor Rating</Typography>
              </ListItem>        
              <ListItem >
                <VerifiedIcon />
                <Typography display="block" variant="body2" sx={{pl: 1}}>{data.ratingNumber} Reviews</Typography>
              </ListItem>                     
              <ListItem >
                <PeopleIcon />
                <Typography display="block" variant="body2" sx={{pl: 1}}>{data.studentsTotal} Students</Typography>
              </ListItem>     
              <ListItem >
                <PlayCircleFilledWhiteIcon />
                <Typography display="block" variant="body2" sx={{pl: 1}}>{data.courses} Courses</Typography>
              </ListItem>                                                                               
            </List>           
          </Box>
        </Box>  
        <Typography display="block" variant="body2" sx={{pt: 2}}>{data.description}</Typography>
                
    </Box>
  );
}

export default CourseInstructor