import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
const paperstyle={
    height: "auto",
    width: 800,
    padding: "30px 20px",
    margin: "auto",
    marginTop: "10vh",
    display:"flex",
    marginBottom:"10vh",
    gap:20,
    borderRadius:'20px',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box", 
    FontFamily:"Alex Brush",
    backgroundColor:'#F2EFE7',
    color:'rgb(55 60 57)'
  };
  var id=1;
  const input=()=>{
      id=id+1;
      var t=document.getElementById('Topic');
      var d=document.getElementById('description')
      var cat=document.getElementById('catogory')
      var con=document.getElementById('content')
      if(t && d && cat && con){
        console.log("sent")
      }
      else{
        alert("enter the required");
      }
  }
export function Newblog() {
    return(
        <>
        <Grid align='center' xs='12' >
           <Paper elevation={2} style={paperstyle} >
            <h1 style={{fontFamily:'Alex Brush'}}>New blog</h1>
           <TextField
            id="Topic"
            label="Topic"
            variant='outlined'
            style={{
              width: "100%" ,
                fontSize: "16px", 
                padding: "10px",
                 color:'rgb(55 60 57)'
              }}
              placeholder='Topic'
              required/>
            <TextField
            id="catogory"
            label="Catogary"
            variant='outlined'
            style={{
              width: "100%",
                fontSize: "16px", 
                padding: "10px", 
                 color:'rgb(55 60 57)'
              }}
              placeholder='Catogery'  required/>
              <Textarea 
              minRows={3}
              id="description"
              placeholder='Description'
              style={{
                backgroundColor:'#F2EFE7',
                width: "100%", 
                fontSize: "16px", 
                padding: "10px",
              }}  required/>
            <Textarea id="content"
            placeholder="Give the content"
            minRows={6}
            style={{
              backgroundColor:'#F2EFE7',
                width: "100%", 
                fontSize: "16px", 
                padding: "10px",
                 color:'rgb(55 60 57)'
              }}
              />
               <TextField 
            type="file"
            id="standard-basic"
            variant="standard"
            />
      <Button variant="contained" endIcon={<SendIcon />} onClick={input} sx={{backgroundColor:'rgb(55 60 57)'}}>
        Send
      </Button>
           </Paper>
        </Grid>
        </>
    )
}
