import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import "./css1.css";
import { Autocomplete } from "@mui/material";
import { Button } from "@mui/material";
import { login } from "./bb.js";
import { useState } from "react";
import TextField from "@mui/material/TextField";
//import { Box } from "@mui/material";
import { data } from "./bb.js";
import { useNavigate } from "react-router-dom";
const but={
    backgroundColor:'#727D73',
    color:'black',
    margin:'10px 20px 10px 20px',
   marginLeft: 'auto',
    borderRadius:'20px'
}
export function Nav() {
  let navigate = useNavigate();
  const [sign, setsign] = useState(login.status);

  let handlesign = () => {
    if (sign) {
      localStorage.removeItem("name");
      localStorage.removeItem("role");
      setsign(false);
      navigate("/", { replace: true });
    } else {
      setsign(true);
    }
};
  let name = localStorage.getItem("name");
 // let role = localStorage.getItem("role");
  let handlesearch = (e, newevent) => {
    navigate(`/allblogs/${newevent}`);
  };
  let v = login.filter(i=>i.name===name)
  return (<>
    <div className="navbar">
      <div className="logo">
        <a href="/about">
          <img alt="Img" src={logo} />
        </a>
      </div>
      <div className="nag">
      <Link to="/" style={{textDecoration:'none',color:'white',margin:'10px'}}>
         <h1  className="tex"> Home</h1>
        </Link>
        <Autocomplete
          disablePortal
          color="white"
          options={[...new Set(data.map((item) => item.catogery))]}
          sx={{
            fontFamily: "Ubuntu",
            height: "35px",
            marginLeft:'10px',
            backgroundColor: "white",
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
                width:"30vw",
              padding: "1px",
              fontSize: "12px !important",
              color: "black",
              "& fieldset": { border: "none" },
            },
          }}
          onChange={handlesearch}
          renderInput={(params) => <TextField {...params} label="Search"/>}
          className="tex" />
       <h1 style={{margin:'10px 20px 10px 20px',color:'white'}} className="tex">{sign ? <p>Hi,  {v[0]?.username}</p> : ""}</h1>
        {/* <h1 style={{margin:'10px',color:'white'}} className="tex">{role === "Blogger" ? <Link to="/blogger" style={{textDecoration:'none',color:'white'}}>Edit Post</Link> : ""}</h1> */}
        {/* <h1 style={{margin:'10px',color:'white'}} className="tex">{role === "Blogger" ? <Link to="/newpost" style={{textDecoration:'none',color:'white'}}>New Post</Link> : ""}</h1> */}
        <Link to="/sign"><Button onClick={handlesign} style={but} className="tex">
            {sign ? "Logout" : "Sign In"}</Button></Link>
      </div>
      </div>
      <style>
        {
          `
          .tex:hover{
          transform: scale(1.1);
          transition: transform 0.3s ease;
           text-decoration:underline
          }
          `
        }
      </style>
      </>
  );
}
