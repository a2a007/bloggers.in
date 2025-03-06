
import {data} from './bb';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { Button } from '@mui/material';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareCount,
} from "react-share";
import { useState } from 'react';
const paperstyle={
  fontFamily:'Ubuntu',
  width:'auto',
  height:'240px', 
  //backgroundColor:'#F2EFE7',
  backgroundColor:'#727D73',
  //color:'#697565',
  padding:"20px",
  fontSize:'10px',
  color:'aliceblue',
  borderRadius:'10px',
  marginLeft:'10px',
  border:3
};
const but={
  backgroundColor:'#ECCE6D',
  textDecoration: 'none',
  width:'100px',
  height:'40px',
  color:'#1B4B4D',
  borderRadius:'8px',
  fontSize:'10px', 
}
const css={
  padding:'10px 10px 10px 10px',
   backgroundColor:'#F2EFE7',
  //backgroundColor:'#F0F0D7'
}
const boxcss={
  fontFamily:'Ubuntu',
  display: 'flex', 
  flexDirection: 'column',
  alignItems:'center',
  justifyContent: 'center',
  height: '300px',
  width: 'auto',
  borderRadius:'20px',
  backgroundImage:'Url(back.jpg)',
  fontSize: "25px",
  backgroundSize: "cover",
  backgroundPosition:'center',
  color:'aliceblue',
}
const d={
    padding: '10px',
    borderRadius: '8px',
    marginLeft:'20px',
    marginTop:'20px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginBottom:'15px',
    fontSize:'23px'
  }
const im={
  width: '100%',
  height: '220px', 
  objectFit: 'cover', 
  borderRadius: '14px',
  marginBottom:'6px',
  marginTop:'10px',
  marginLeft:'4px'
}
// let likecount=[
//   {id:1,
//   count:2}
// ]
const spacing={
  margin:'10px 0px',
  fontSize:'25px',
}
const spacing2={
  margin:'10px 0px',
  fontSize:'18px',
}
const fill={
  margin:'5px',
  size:'6px'
}
const button={
  display:'flex',
  flexDirection:'row',
  marginTop:'10px'
}
export function Home() {
  let [like,likecount]  = useState();
  return (
    <>
    <div style={css}>
    <Box sx={boxcss}>
        <div style={d}>
        <h1 style={{fontFamily:'Great Vibes'}}>Blogs</h1>
        <p>
          Your first blog posts won`t be perfect, but you just have to do it. You
          have to start somewhere - Shane Barker
        </p>
        <Button textAlgin='center' size="sm" style={but} component={Link} to={'/createuser'} className='button'>
         Get started
        </Button>
        </div>
      </Box>
    </div>
    <div>
      <Paper >
        {data.map((blog)=>(
          like=blog.like,
          <div key={blog.id} >
            <Grid  container style={css}>
              <Grid item xs={4} align='center' borderRadius={'2px'}>
             <Box style={paperstyle}><img src={blog.img} style={im} alt='img' /></Box>
              </Grid>
           <Grid item xs={8}>
            <Box style={paperstyle}>
              <h1 style={spacing}  className='topic'>{blog.topic}</h1>
              <p style={spacing2} >{blog.catogery}</p>
              <div style={button}>
              <Button component={Link}  to={`/blog/${blog.id}`}style={but} className='button'>Read more</Button>
              <Button  sx={{color:'white'}} style={fill} className='icon' onClick={()=>{likecount(blog.like++)}}><FavoriteBorderSharpIcon/>{like}</Button>
              <FacebookShareButton networkName="Facebook" url={window.location.href} className='icon'>
                <FacebookIcon  style={fill} size={40} />
                
              </FacebookShareButton>
              <FacebookShareCount url={window.location.href}>
  {(shareCount) => <span className="myShareCountWrapper">{shareCount}</span>}
</FacebookShareCount>
              <TwitterShareButton networkName="Twitter" url={window.location.href} className='icon'>
                <TwitterIcon style={fill} size={40} />
              </TwitterShareButton>
              <WhatsappShareButton networkname="Whatsapp" url={window.location.href} className='icon'>
                <WhatsappIcon style={fill} size={40} />
              </WhatsappShareButton>
              </div>
            </Box>
          </Grid>
          </Grid>
          </div>
        ))}
        </Paper>
    </div>
    <style>
      {
        `
        .icon:hover{
        transform: scale(1.2);
        color:rgb(238, 240, 243);
        transition: transform 0.3s ease;
        }
        .button:hover{
         transform: scale(1.2);
        transition: transform 0.3s ease;
        }
        .topic:hover{
        text-decoration:underline;
        }
        `
      }
    </style>
    </>
  )
}