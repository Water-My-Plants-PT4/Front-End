// import React from 'react';
// import { useState } from 'react';
// import {
//   Typography,
//   AppBar,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   CssBaseline,
//   Grid,
//   Toolbar,
//   Container,
// } from '@material-ui/core';
// import EcoIcon from '@material-ui/icons/Eco'; // Leaf icon.
// import Box from '@material-ui/core/Box'; // Used for spacing.
// import Button from '@material-ui/core/Button'; // For menu button.
// import Menu from '@material-ui/core/Menu'; // For menu button.
// import MenuItem from '@material-ui/core/MenuItem'; // For menu button.
// import { flexbox } from '@material-ui/system';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   box: {
//     color: 'white',
//   },
// });
// function Navigation() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <>
//       <CssBaseline />
//       <AppBar position='relative'>
//         <Toolbar>
//           {/* Leaf icon & 'Water My Plants' text in navbar */}
//           <Box
//             display='flex'
//             alignItems='center'
//             justifyContent='center'
//             width='100%'>
//             <EcoIcon />
//             <Box p={1}>
//               <Typography varient='h6'>Water My Plants</Typography>
//             </Box>
//           </Box>
//           {/* Menu button: */}
//           <Box
//             display='flex'
//             alignItems='center'
//             justifyContent='center'
//             width='100%'>
//             <Button
//               style={{ color: 'white' }}
//               aria-controls='simple-menu'
//               aria-haspopup='true'
//               onClick={handleClick}>
//               Open Menu
//             </Button>
//             <Menu
//               id='simple-menu'
//               color='white'
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//               justifyContent='center'>
//               <MenuItem onClick={handleClose}>
//                 <Link to='/login'>View plants</Link>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <Link to='/'>Edit profile</Link>
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <Link to='/'>Logout</Link>
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// }
// export default Navigation;