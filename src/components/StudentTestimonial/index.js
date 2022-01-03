import React from 'react'
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import Rating from '@mui/material/Rating';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import IconButton from '@mui/material/IconButton';

import {useStyles}  from "../../theme/bottomContainerStyle"

import styles from './style'

const TestimonialItem = ({name, stars, comment}) => {
  return (
    <Box display="flex" alignItems="center" sx={{pt:2,  }}>
      <Box sx={{pr: 1, textAlign: 'center', color: '#b4690e'}}>
          <Box sx={styles.roundedBox}>
              <Typography display="block" variant="body2">MD</Typography>
          </Box>
      </Box>
      <Box sx={{}}>
        <Typography display="block" variant="body2" sx={{fontSize: "1em", fontWeight: 700}}>{name}</Typography>
        <Rating name="size-small" sx={{p:0, mt: 1,}} value={stars} readOnly  precision={0.5} size="small" />
        <Typography display="block" variant="body2">{comment}</Typography>
        <Typography display="block" variant="body2" sx={{fontSize: "0.7em"}}>Esta avaliação foi útil?</Typography>
        <IconButton color="primary" component="span">
          <ThumbUpOffAltIcon/>
        </IconButton>
        <IconButton color="primary" component="span" >
          <ThumbDownOffAltIcon/>
        </IconButton>
          
      </Box>          
    </Box>            
  )
}
const StudentTestimonial = ({data}) => {
  const classes = useStyles();

  return (
    <Box sx={{m:1, pt: 1}}>
        <Typography display="block" variant="h6" className={classes.titleContainer} style={{marginLeft: 0}}>
          Avaliações
        </Typography>
        {data.map(
          (item, key) => (
            <TestimonialItem {...item} key={key} />
          )
        )}
        
    </Box>
  )
}

export default StudentTestimonial