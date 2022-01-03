import React from 'react'
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import {useStyles}  from "../../theme/bottomContainerStyle"
import ReactMarkdown from "react-markdown";
import {markdownDescription} from './coursedescription.rc'

const CourseDescription = ({data}) => {
  
  const classes = useStyles();

  return (
    <Box sx={{m:1, pt: 1}}>
      <Typography display="block" variant="h6" className={classes.titleContainer} style={{marginLeft: 0}}>
            Descrição
      </Typography>
      <Typography display="block" component="span" variant="body2" style={{ }}>
        <ReactMarkdown>{markdownDescription}</ReactMarkdown>
      </Typography>
       
    </Box>
  );
}

export default CourseDescription