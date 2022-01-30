import React from 'react'
import './Footer.css'
import TextField from '@material-ui/core/TextField';
import {
    withStyles,
  } from '@material-ui/core/styles';

  import Aos from "aos"
  import "aos/dist/aos.css"


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);



const Footer = () => {
  React.useEffect(()=>{
    Aos.init({duration:800})
      },[])
    
    const [name, setName] = React.useState("")
    const [companyname, setCompanyName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("")
    // React.useEffect(() => {
    //     return () => {
    //       console.log(name,companyname,email,message)
    //     };
    //   }, [name])
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(name,companyname,email,message)
    }
    return (
        <footer class="footer" >
        <h3 class="headingfooter">Get in Touch</h3>
        <form onSubmit={handleSubmit}>
            <div class="row">
                <div class="col-xs-12 col-md-12 col-lg-4 col-xl-4 fielddiv" data-aos="fade-right">
                <CssTextField id="custom-css-standard-input" label="Name" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>

                <div class="col-xs-12 col-md-12 col-lg-4 col-xl-4 fielddiv" data-aos="zoom-in">
                <CssTextField id="custom-css-standard-input" label="Company Name" onChange={(e)=>setCompanyName(e.target.value)} value={companyname} />
                </div>

                <div class="col-xs-12 col-md-12 col-lg-4 col-xl-4 fielddiv" data-aos="fade-left">
                <CssTextField id="custom-css-standard-input" label="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>

                <div class="col-xs-12 col-md-12 col-lg-4 col-xl-4 fielddiv" data-aos="fade-right">
                <CssTextField id="custom-css-standard-input" label="Message" onChange={(e)=>setMessage(e.target.value)} value={message}  />
                </div>
            </div>
            <button data-aos="flip-left" class="btn btn-outline-success col-2 submitbutton" type="submit">Submit</button>

        </form>
        <h3 class="headingfooter2" data-aos="fade-right">Contact Us</h3>
        <p>+919860581297, +919373680996</p>
        <p>info@toobapharma.in</p>
        <p>Plot No:A-117, A-118 & A-119, Paithan Industrial Area, Aurangabad-431148 (M.S)</p>
        
        
        
        </footer>
    );
}

export default Footer;