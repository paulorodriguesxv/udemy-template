import React from 'react'
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import {useStyles}  from "../../theme/bottomContainerStyle"
import LinearProgress from '@mui/material/LinearProgress';
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem'
import Rating from '@mui/material/Rating';

const RattingComponent = (props) => {  
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row'}}>
      <LinearProgress variant="determinate" value={props.rating} sx={{ width: {xs:'100px', md:'200px'}, margin: '8px'}}/>
      <Rating name="size-small" sx={{p:0}} value={props.stars} readOnly  precision={0.5} size="small"/>
    </Box>
  )
}
const StudentFeedback = ({data}) => {
  
  const classes = useStyles();

  return (
    <Box sx={{m:1, pt: 1}}>
        <Typography display="block" variant="h6" className={classes.titleContainer} style={{marginLeft: 0}}>
            Feedback do Aluno
        </Typography>
        <Box display="flex" alignItems="center" sx={{pt:2}}>
          <Box sx={{textAlign: 'center', color: '#b4690e'}}>
            <Typography display="block" variant="h2" sx={{pl: 1, fontWeight: 700}}>{data.score}</Typography>
            <Rating name="size-small" sx={{p:0, mt: 1,}} value={data.score} readOnly  precision={0.5} size="small" />
            <Typography display="block" variant="body2" sx={{pl: 1}}>Avaliações do curso</Typography>
          </Box>
          <Box>
            <List dense={true}>
              <ListItem >
                <RattingComponent stars={5.0} rating={57}></RattingComponent>
              </ListItem>        
              <ListItem >
                <RattingComponent stars={4.0} rating={29}></RattingComponent>
              </ListItem>                     
              <ListItem >
                <RattingComponent stars={3} rating={10}></RattingComponent>
              </ListItem>     
              <ListItem >
                <RattingComponent stars={2} rating={2}></RattingComponent>
              </ListItem>
              <ListItem >
                <RattingComponent stars={1} rating={2}></RattingComponent>
              </ListItem>              
            </List>           
          </Box>
        </Box>                 
    </Box>
  );
}

export default StudentFeedback