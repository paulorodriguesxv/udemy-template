import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CheckIcon from '@mui/icons-material/Check'
import {useStyles}  from "../../theme/bottomContainerStyle"

const CourseWhatWillLearn = ({data}) => {
  const classes = useStyles();

  const gridLeft = data.slice(0, 3)
  const gridRight = data.slice(3, 6)

  return (

      <Paper variant="outlined" sx={{m: 1}}>
        <Typography display="block" variant="h6" className={classes.titleContainer}>
        What you'll learn
        </Typography>

        <Grid container item spacing={2} >
            <Grid container item  xs={12} md={6} direction="column" >
              <List dense={true}>
              {gridLeft.map( (item, i) => (
                    <ListItem key={i}>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                    />        
                    </ListItem>            
                  ))
                  }               
              </List>
            </Grid>
            <Grid container item xs={12} md={6} direction="column" >
              <List dense={true}>                                  
              {gridRight.map( (item, i) => (
                  <ListItem key={i}>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                  />        
                  </ListItem>            
                ))
                }                                       
              </List>
            </Grid>

        </Grid>          
      </Paper>    
  )
}

export default CourseWhatWillLearn