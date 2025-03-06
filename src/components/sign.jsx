import * as React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { login } from './bb';
import { useNavigate } from 'react-router-dom';
const paperStyle={
  height: "auto",
  width: '350px',
  padding: "10px 10px 10px 10px",
  margin: "auto",
  marginTop: "40px",
  marginBottom:'40px',
  display:"flex",
  gap:27,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color:"rgb(55 60 57)"
};
const nw={
  display:'flex',
  flexDirection:'column',
  marginTop:'30px',
  marginBottom:'20px'
}
const button={
  backgroundColor:'rgb(55 60 57)',
  marginLeft:'30px',
  marginRight:'30px',
  marginBottom:'10px',
  textDecoration: 'none'
}
const int={
  marginTop:'30px',
  width:'275px',
}
const lay={
  height:'70%',
  width:'70%',
  maxwidth:'420px',
  borderRadius:'30px',
  margin:'60px 90px 20px 90px'
}
export function Sign() {
  const navigate=useNavigate();
  const [name,setName] =React.useState("");
  const [pass,setpass]=React.useState('');
  const [error,setError]=React.useState('');
  const valid=(e)=>{
    e.preventDefault();
    if(!name || !pass)
  {setError('Enter username and password to contiune')
    return;
  }
  const nam = login.find(login => login.name === name);
  // let p=login.find(login => login.password === pass);
  if(!nam)
  {
    setError('User not found')
    return;
  }
  if((nam.password!==pass))
    setError('Password mismatches')
  else
    {
      nam.status=true;
      localStorage.setItem('name',nam.name);
      localStorage.setItem('role',nam.role);
      if(nam.role==='Reader')
       navigate(`/`); 
      else
      navigate(`/blogger/${nam.name}`)
    }}
  return (
    <>
    <Grid container style={{minHeight:'100vh',padding:2}}>
    <Grid item xs={12} md={6} >
      <img className='animate__animated animate__backInLeft'style={lay} src="1.webp"/>
</Grid>
    <Grid item xs={12} md={6} align='center' className='animate__animated animate__backInUp' >
    <h1 style={{fontFamily:'Great Vibes',}}>SignIn </h1>
      <Paper elevation={2} style={paperStyle} >
        {(error) && <Alert severity="warning">{error}</Alert>}
        <form onSubmit={valid}>
        <TextField id="username" label="Username" placeholder='___@gmail.com' onChange={(e)=>{
        setName(e.target.value)
      }} variant="outlined" style={int} />
      <TextField id="pass" label="Password" type="password" autoComplete="current-password"
        onChange={(e)=>{
        setpass(e.target.value)
      }}  style={int}/>
      <div style={nw}>
       <Button type='submit' variant='contained' style={button} fontFamily='Great Vibes'>Sign</Button>
        <Button type='submit' variant='contained'  style={button}><Link to='/createuser'  style={{ textDecoration: 'none',color:'white'}}>New user</Link></Button>
      </div> </form>
      </Paper>
    </Grid>
   
    </Grid>
    </>
  );
}
