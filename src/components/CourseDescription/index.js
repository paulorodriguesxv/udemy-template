import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import { useStyles } from '../../theme/bottomContainerStyle';
import markdownDescription from './coursedescription.rc';

const CourseDescription = () => {
  const classes = useStyles();

  return (
    <Box sx={{ m: 1, pt: 1 }}>
      <Typography
        display="block"
        variant="h6"
        className={classes.titleContainer}
        style={{ marginLeft: 0 }}
      >
        Description
      </Typography>
      <Typography display="block" component="span" variant="body2" style={{}}>
        <ReactMarkdown>{markdownDescription}</ReactMarkdown>
      </Typography>
    </Box>
  );
};

export default CourseDescription;
