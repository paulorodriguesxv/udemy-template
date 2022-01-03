import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from "@mui/material/Typography"
import Rating from '@mui/material/Rating';
import SideBarContainer from '../SidebarContainer'
import VideoThumb from "../VideoThumb"
import { useTheme } from '@mui/styles';

const TopContainer = (data) => {
  
  const theme = useTheme();

  const {
    productName,
    productSubtitle,
    classifications,
    students,
    createdBy,
    score,
    updatedAt} = data

  return (
    <>
    <Box sx={{position: "relative", display:{md:"none"}}} >
    <VideoThumb></VideoThumb>
    </Box>     
    <Grid container spacing={0}  sx={[theme.topContainer, { height: "14em", paddingTop: 2 }]}>
      <Grid item xs={12} md={2}>
      </Grid>      
      <Grid item xs={12} md={6} color="primary">        
        <Typography display="block" variant="h1" sx={{m: 1,}}>
              {productName}
         </Typography         >
         <Typography display="block" variant="subtitle2" sx={{m: 1,}}>
              {productSubtitle}
         </Typography>    
         <Box sx={{ display: 'flex', flexDirection: {xs:'column', md:'row'}, m: 1,}}>
           <Chip label="Classificação mais alta"  sx={{p: 1, m: 0}} color="primary"></Chip>
           <Box sx={{ display: 'flex', flexDirection: 'row'}}>
            <Typography  sx={{p:0, m: 1, color: theme.rating.main}}>{score}</Typography>
            <Rating name="size-small" sx={{p:0, mt: 1, marginTop: "0.55em",  color: theme.rating.main}} value={score} readOnly  precision={0.5} size="small"/>
            <Typography  sx={{p:0, m: 1,}}>{classifications} Classificações - {students} Alunos</Typography>
           </Box>
           
         </Box>     
         <Box sx={{ display: 'flex', flexDirection: 'row', m: 1,}}>           
           <Typography sx={{p:0, m: 0,}} variant="body2">Criado por {createdBy}</Typography>
         </Box>              
         <Box sx={{ display: 'flex', flexDirection: 'row', m: 1,}}>           
           <Typography  sx={{p:0, m: 0,}} variant="body2">Última atualização em {updatedAt} Português</Typography>
          </Box>                       
      </Grid>
      <Grid item xs={0} md={4} sx={{pl: 3, display: { xs: "none", md: "block" }}}>
        <SideBarContainer data={data}></SideBarContainer>      
      </Grid>
    </Grid>   
    </>    
  )
  
}

export default TopContainer