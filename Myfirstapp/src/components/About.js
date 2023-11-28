import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Paper, Container} from '@mui/material';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


function linkedinHandle()
{
  window.alert("This site does not support dialing. Please open another app.");
}
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
    <AppBar position="static" color='warning'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <p style={{position:"absolute",left:90, top:0}}>Call us for Ordering   <button onClick={linkedinHandle} className='aler'><b>094 711 80 97</b></button></p>
        </Typography>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Restaurants"
        inputProps={{ 'aria-label': 'search restaurants' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
      <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose} component={RouterLink} to="/login">Log out</MenuItem>
              </Menu>
            </div>
                </Toolbar>
    </AppBar>

    <div className='image'>
        <ul className='grid' style={{listStyle:"none"}}>
        <li><Button color="inherit" component={RouterLink} to="/m">Home</Button></li>
        <li><Button color="inherit">About Us</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/con">Contact</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/help">Help</Button></li>
        </ul>

    </div>
    
    <div class="grid1">
          <div className='aboutus'></div>

        <div style={{marginLeft:"60%"}}>
          <p className='heading'>About Us</p>
<p style={{fontSize:"20px"}}>Our chefs offer you perfect cooking, best served dishes with fresh
ingredients and old recipes. We have only carefully sourced and seasonal
ingredients in our disposal to make rustic dishes. We provide you with
daily self-made bread, sourdough pizza, roasted fish-meat-vegetables and<br></br>
many more.<br></br>
Thank You!!!</p>
          </div>
        
    </div>

    <div className='gr'>
      <b style={{marginTop:"-13%"}}>Three easy steps</b>
       </div>

    <div style={{marginTop:"-10%"}}className='grid2'>
      <div className='order'><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <p>Make an order</p>
      </div>
      <div>
      <div className='wait'><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <p>Wait a while</p>
      </div>

      </div>
      <div>
      <div className='get'><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <p>Get your food</p>
      </div>

      </div>

    </div>



    <div>
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Fooddy company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anna Nagar , Chennai
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: fooddyatyourservice@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: 094 711 80 97
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Fooddy
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </div>
    </div>
  );
};

export default Navbar;