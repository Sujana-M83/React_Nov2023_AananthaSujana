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
import Badge from '@mui/material-next/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from "@mui/material";
import { useContext } from 'react';
import { Context } from '../App';




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
  const hello=useContext(Context);
  return (
    <div>
    <AppBar position="static" color='warning'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <p style={{position:"absolute",left:90, top:0}}>Call us for Ordering   <button onClick={linkedinHandle} className='aler'><b>{hello}</b></button></p>
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

    <Badge badgeContent={4} color="primary">
      <MailIcon color="#42a5f5" />
    </Badge>
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
                <MenuItem onClick={handleClose} component={RouterLink} to="/pro">Profile</MenuItem>
                <MenuItem onClick={handleClose} component={RouterLink} to="/login">Log out</MenuItem>
              </Menu>
            </div>
                </Toolbar>
    </AppBar>

    <div className='image'>
        <ul className='grid' style={{listStyle:"none"}}>
        <li><Button color="inherit">Home</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/about">About Us</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/con">Contact</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/help">Help</Button></li>
        </ul>

    </div>
    <div className='back'>
        <div style={{marginLeft: "-50%", justifyContent: "center", textAlign:"center", color: "white", fontSize:"50px"}} className='txt'>
        <p style={{ position: "absolute", bottom: 280,left: 450,}}>ORDER FOOD DELIVERY</p>
        <div className='txt1'>
        <p style={{ position: "absolute", bottom: 270,left: 580,}}><b>From Your Favourite Restaurant</b></p>
        </div>
        </div>
        <Button variant="contained" color="warning" style={{justifyContent: "bottom", textAlign: "center", marginLeft: "-50%"}} className='btn1' component={RouterLink} to="/menu">
  Must Try!!!
</Button>
    </div>
    <div>
        <p style={{fontSize: "40px"}}><pre>MORE THAN <b className='bold'>20,000 DISHES</b> TO ORDER! </pre></p>
        <p style={{fontSize: "17px"}}><pre>Welcome to the Biggest Network of Food Ordering & Delivery</pre></p>
    </div>
    <div>
    <Container maxWidth="md" sx={{ mt: 20 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 190,
              height: 200,
            },
          }}
        >
          <Paper elevation={8}>
            <div className='sushi'>
                <p style={{ position: "absolute", bottom: -460,left: 390}}>SUSHI</p>

            </div>
            </Paper>
          <Paper elevation={8}>
            <div className='biryani'>
            <p style={{ position: "absolute", bottom: -460,left: 590}}>BIRYANI</p>

            </div>
            </Paper>
          <Paper elevation={8}>
            <div className='burger'>
            <p style={{ position: "absolute", bottom: -460,left: 790}}>BURGER</p>

            </div>
            </Paper>
          <Paper elevation={8}>
            <div className='dessert'>
            <p style={{ position: "absolute", bottom: -460,left: 999}}>DESSERT</p>

            </div>
            </Paper>
        </Box>
      </Container>
    </div>
    <div className='gridoff'>
    <div>
    <>
      <Container maxWidth="md" sx={{ mt: 20 }}>
        <Stack direction="row" spacing={4}>
        <Box
            sx={{
              boxShadow: 2,
              width: "6rem",
              height: "2rem",
              px: 4,
              py: 2,
              borderRadius: 2,
              textAlign: "center",
            }}
          >

            Offers

          </Box>
          </Stack>
      </Container>
    </>
    </div>
    <div>
    <>
      <Container maxWidth="md" sx={{ mt: 20 }}>
        <Stack direction="row" spacing={4}>
        <Box
            sx={{
              boxShadow: 2,
              width: "6rem",
              height: "2rem",
              px: 4,
              py: 2,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            Top 10
          </Box>
          </Stack>
      </Container>
    </>
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