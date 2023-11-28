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
        <li><Button color="inherit" component={RouterLink} to="/con">Contact</Button></li>
        <li><Button color="inherit">Help</Button></li>
        </ul>

    </div>

    
    <div>
        <h1>FAQ's</h1>
        <b>How do I make a payment using Fooddy?</b>
        <p>To pay your dining bill at partner restaurants, you can use the 'pay bill' option on restaurant page itself(or scan the Fooddy QR code if it's available at the restaurant)
        </p>

        <b>Where do I find the bank offers?</b>
        <p>Our partner restaurants will also show the applicable bank offers under the 'offers' section on its page.</p>

        <b>Can I pay for my takeaway bill using Fooddy?</b>
        <p>Payment of bills using Fooddy can be used to pay your dine-in bills only. It cannot be used to pay for takeaways.
        For food delivery orders, you can place an order on the app from the 'delivery' section.</p>

        <b>Can I split the payment?</b>
        <p>Yes, you can split the payment with your friends and family. Each person can pay for their respective share using their own app.</p>

        <b>How can I reach out for support?</b>
        <p>You can contact our chat support team by using the 'Bill payment help' option under the profile section of the Fooddy app for any immediate 
        assistance. If you need any help while making a payment at the restaurant, tap on the 'message' icon on the top-right corner of the payment screen.
         Alternatively, you may write to us at dining@fooddy.com and our team will get back to you within the next 24 - 48 hours.</p>

         <b>What should I do in case of a payment failure?</b>
<p>If you've paid an incorrect amount, simply contact the restaurant staff for a refund and pay the correct amount after that. If you've made a payment towards an incorrect restaurant, please contact our chat support team and we would help you out right there.</p>

<b>What should I do if I make an incorrect payment?</b>
<p>If you've paid an incorrect amount, simply contact the restaurant staff for a refund and pay the correct amount after that. If you've made a payment towards an incorrect restaurant, please contact our chat support team and we would help you out right there.</p>

<b>What is Fooddy Customer Care Number?</b>
<p>We value our customer's time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly.</p>

<b>I entered the wrong CVV, why did my transaction still go through?</b>
<p>The logic of validations of CVV resides with either payment gateways or banks. It is absolutely the choice of banks to have CVV as a mandatory input field or not. As per RBI guidelines, 2-Factor-Authentication is not mandatory for less than Rs 2000
rupees transaction. It is not in control of Swiggy. As an organization, we don't store any card information.</p>

<b>Can I edit my order?</b>
<p>In order to edit your order, please click on "Help" and then "I want to modify items in my order". We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started.</p>

<b>I want to cancel my order</b>
<p>In order to cancel your order, please click on "Help" and then "I want to cancel my order". Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders.</p>

<b>Is there a minimum order value?</b>
<p>We have no minimum order value and you can order for any amount.</p>

<b>What are your delivery hours?</b>
<p>Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.</p>

<b>Is single order from many restaurants possible?</b>
<p>We currently do not support this functionality. However, you can place orders for individual items from different restaurants.</p>
<b>Do you support bulk orders?</b>
<p>In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.</p>
<b>Can I order in advance?</b>
<p>Yes, you can order up to 2 days in advance on our platform. Click on the "NOW" button on the top left corner of the app to select your desired delivery time slot and place an order. This feature is currently available only on Android phones and in select cities.</p>
<br></br>
<h3>For any other queries, go to contact page</h3>
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