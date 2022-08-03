import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { withStyles } from "@mui/material/styles"
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';
import { PlaylistData } from './PlaylistData';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';




// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
    
//   </Box>
// );
const styles={
  cardcontent:{
    padding:0,
    "$:last-child":{
      paddingBottom:0
    }
  }
};
 function Playlist({header}) {
  return (
    <>
    
    <div className='ml-52 my-5 text-xl font-medium'>{header}</div>
      <div className='ml-52 w-4/5 h-min grid grid-cols-2 gap-2 mb-4 '>
          
          {PlaylistData.map((item,index)=>{
            
              return (
                <Link to='#'>

                  <Card  sx={{width:400}} >
                    
                      
                       
                           {/* <div className=' relative right-0 bg-red-500 '>
                              <MoreVertIcon />

                          </div>  */}
                      
                      
                
                  <CardMedia
                      
                      component="img"
                      
                      image={item.img}
                      alt={item.title}
                  />
                  <CardContent
                    style={{ padding:2 }}
                  >
                      <Typography variant="body1" color="text.secondary">
                      <span style={{fontSize:14}} className='flex justify-center'>{item.title}</span>
                      </Typography>
                  </CardContent>
                 
                  
                  </Card>
                </Link>

                  
                 
              )
          })}
            
      </div>
    
   </>
)}


// const Playlist = () => {
//   return (
//     <div className='ml-52'>
//         <Card />
//     </div>
//   )
// }

export default Playlist;