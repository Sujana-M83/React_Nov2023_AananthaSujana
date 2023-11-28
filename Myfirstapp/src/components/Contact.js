import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Paper, Container, FormControl} from '@mui/material';
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
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Regarding Slot Booking',
  'Regarding Fooddy deals',
  'Issue with Delivery order',
  'Regarding Payment',
  'Issue with Delivery Partner',
  'Regarding Cancellation',
  'Other query',
];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

function linkedinHandle()
{
  window.alert("This site does not support dialing. Please open another app.");
}
function submitHandle()
{
  window.alert("Submitted successfully!!!");
}
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
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
        <li><Button color="inherit" component={RouterLink} to="/about">About Us</Button></li>
        <li><Button color="inherit">Contact</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/help">Help</Button></li>
        </ul>

    </div>
    


    <div className='gridd'>
        <div>
        <p style={{fontSize:"50px", fontFamily:"Imprint MT Shadow"}}>Contact Us</p>
        <form>
            <FormControl defaultValue="" required>
            <p style={{textAlign:"left"}}><label>Name:* </label></p>
            <input type='text' placeholder='Your name' size={30} style={{height:"40px"}} required></input>
            </FormControl><br></br>
            <FormControl defaultValue="" required>
            <p style={{textAlign:"left"}}><label>Work Email:* </label></p>
            <input type='text' placeholder='Your email' size={30} style={{height:"40px"}} required></input>
            </FormControl><br></br>
            <FormControl defaultValue="" required>
            <p style={{textAlign:"left"}}><label>Subject:* </label></p>
            <div>
      <FormControl sx={{ m: 1, width: 240 }}>
        
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
            </FormControl><br></br>
            <FormControl defaultValue="" required>
            <p style={{textAlign:"left"}}><label>Description:* </label></p>
            <textarea placeholder='Message' style={{height:"100px", width:"235px"}} required></textarea>
            </FormControl><br></br><br></br>
            <Button variant="contained" onClick={submitHandle}>Submit</Button>
        </form>
        </div>
        <div>
            <p style={{fontStyle:"italic",fontFamily:"Rage Italic",fontSize:"30px", position:"absolute", bottom:"50%", left:"62%"}}><b>Get in touch with us!</b><br></br></p>
            <p style={{position:"absolute", left:"58%", bottom:"40%"}}>We'd love to hear from you.<br></br>If you have any query, please feel free to drop us a line.<br></br> We'll get back to you as soon as possible
            </p>
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