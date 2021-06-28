import React from 'react';
import { useState } from 'react';
import { Typography, AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco'; // Leaf icon.
import Box from '@material-ui/core/Box'; // Used for spacing.
import Button from '@material-ui/core/Button'; // For menu button.
import Menu from '@material-ui/core/Menu'; // For menu button.
import MenuItem from '@material-ui/core/MenuItem'; // For menu button.
import { Link } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles'; // Kyle showed me this. It does not seem to be needed right now but I am saving it for future reference.
// const useStyles = makeStyles({
//   box: {
//     color: 'white',
//   },
// });

function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem('token');
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* Leaf icon & 'Water My Plants' text in navbar */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            width="100%">
            <EcoIcon />
            <Box p={1}>
              <Typography variant="h6">Water My Plants</Typography>
            </Box>
          </Box>

          {/* Menu button: */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{ color: 'white' }} // This changes the MENU text color to white. It was black.
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              justifyContent="center" // Kyle added this. Not sure what it does.
            >
              <MenuItem onClick={handleClose}>
                <Link to="/">Home</Link>
              </MenuItem>

              {localStorage.getItem('token') && (
                <MenuItem onClick={handleClose}>
                  <Link to="/profile">View plants</Link>
                </MenuItem>
              )}

              {localStorage.getItem('token') && (
                <MenuItem onClick={handleClose}>
                  <Link to="create-plant">Create plant</Link>
                </MenuItem>
              )}

              <MenuItem onClick={handleClose}>
                <Link to="/login">Log in</Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link to="/sign-up">Sign up</Link>
              </MenuItem>

              {localStorage.getItem('token') && (
                <MenuItem onClick={handleClose}>
                  <Link to="/" onClick={logOut}>
                    Log Out
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navigation;
