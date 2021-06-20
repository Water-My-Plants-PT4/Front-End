
import React from 'react';
import { useState } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco'; // Leaf icon.
import Box from '@material-ui/core/Box'; // Used for spacing. 
import Button from "@material-ui/core/Button"; // For menu button.
import Menu from "@material-ui/core/Menu"; // For menu button.
import MenuItem from "@material-ui/core/MenuItem"; // For menu button.
import { flexbox } from '@material-ui/system';
import { Link } from 'react-router-dom';




function Navigation() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <>
      <CssBaseline />
      <AppBar position="relative">
      <Toolbar>
        {/* Leaf icon & 'Water My Plants' text in navbar */}
        <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
          <EcoIcon />
          <Box p={1}>
            <Typography varient="h6" >
              Water My Plants
            </Typography>
          </Box>
        </Box>

          {/* Menu button: */}
        <Box display="flex" alignItems="center" justifyContent="flex-end" width="100%">
        
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            >
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
              <Link to="/login">
                View plants
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link to="/">
                Edit profile
              </Link>  
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/">
                Logout
              </Link>  
              </MenuItem>
          </Menu>
      </Box>
      </Toolbar>
      </AppBar>
    </>

  );
}
export default Navigation;

// Someone else wrote this code. Not sure why I am saving it. 

    //   <nav>
    //     <h2>Plants Watering App</h2>
    //     <Link to="/login">
    //       <button>Login</button>
    //     </Link>
    //     <Link to="/">
    //       <button>Logout</button>
    //     </Link>

    //     <button>Profile</button>
    //   </nav>
    // </div>




