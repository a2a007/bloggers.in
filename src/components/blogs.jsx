import {data, login} from './bb';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Avatar} from '@mui/material';
import { useParams } from 'react-router-dom';
import 'animate.css';import { Button } from "@mui/material";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
const fot={
  fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'normal',
    marginLeft: '20px',
    marginRight: '20px',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  justifyContent:'center'
}
const ft={
  fontFamily: 'Ubuntu, sans-serif',
    fontStyle: 'italic',
    marginLeft: '20px',
    marginBottom: '20px',fontWeight:'normal',
    color: '#555',
}
const img={
  marginTop: '20px',
    width: '100%',
    height: '700px',
    borderRadius: '8px',
}
const topic={
  fontFamily:'Ubuntu',
  marginLeft:'30px',
  fontSize:'33px',
  marginTop:'40px',
  fontWeight:'bold'
}
const heading={
    textAlign: 'center', 
  fontFamily:'"Merriweather", serif',
}
const avarter={
  marginLeft:'30px',
  marginBottom:'10px',
  marginTop:'10px'
}
const css={
  padding: '20px',
  borderRadius: '8px',
  backgroundColor:'#F2EFE7'
}
const fill={
  margin:'5px',
  size:'6px'
}
const icon={
  marginLeft:'20px',
  marginTop:'5px',
  display:'flex',
  gap:'10px'
}
let count=0;
export function Blogs() {
  let {i}=useParams();
  const blog = data.find(blog => blog.id === parseInt(i));
  let u= login.filter(name=>name.name===blog.author)
  const [like,increacelike]=useState(blog.like);
  let handleclick=()=>{
    if(count==0)
    {increacelike(like+1)
    blog.like=like
    count++;}
  }
  return (
    <> 
    <div>
    <Grid style={heading} >
    <h1 >TIME TO HUNT</h1>
</Grid>
    <Paper style={css}>
        <Box >
          <div className='animate__animated animate__backInLeft'>
          <h1 style={topic} className='topic'>{blog.topic}</h1>
        <Avatar className='avatar' style={avarter} alt="Cindy Baker" src={blog.avatar} />
        <h4 style={ft}>~By {u[0]?.username}</h4>
      <div style={icon} >
      <FacebookShareButton url={window.location.href} className='icon'>
                        <FacebookIcon style={fill} size={40} />
                      </FacebookShareButton>
                      <TwitterShareButton url={window.location.href} className='icon'>
                        <TwitterIcon style={fill} size={40} />
                      </TwitterShareButton>
                      <WhatsappShareButton url={window.location.href} className='icon'>
                        <WhatsappIcon style={fill} size={40} />
                      </WhatsappShareButton>
                      <Button onClick={handleclick} color='#555' className='icon'>
        <FavoriteBorderSharpIcon/> {like}
        </Button>
        </div>
        </div>
        <div className='animate__animated  animate__backInUp'>
        <p style={fot}>{blog.content}</p>
        <img  style={img} src={blog.img} alt='Pic'/>
        <p style={fot}>{blog.content2}</p>
        </div></Box>
    </Paper>
    <style>
        {`
          .avatar:hover {
            transform: scale(1.1);
            border: 2px solid #000;
             transition: transform 0.3s ease, border 0.3s ease;
          }
          .icon:hover {
            transform: scale(1.2);
            color: #0073e6;
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .topic:hover{
          text-decoration:underline}
          h4:hover{
          text-decoration:underline}
        `}
      </style>
      </div>
    </>
  )
}
