import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import VisibilityIcon from '@mui/icons-material/Visibility';
import MenuItem from "@mui/material/MenuItem";
import LogoPagando from "../../assets/png/pagandoIsotipo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.scss";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Menu from "@mui/material/Menu";


const options = ['100.00 ', '50.00', '20.00'];

export default function MenuAppBar() {
  //   const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    // setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ background: "#ffff", height: "80px"}}>
          <img className="logo-pagando" src={LogoPagando} alt="" sx={{}} />
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="#404040"
          >
            <VisibilityIcon 
            sx={{ color: "#404040" }}
            />
          </IconButton>

      {/* <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Button 
          onClick={handleClick}
          sx = {{ backgroundColor: 'transparent', color: '#404040', border: 'red'}}
        >{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{ backgroundColor: 'transparent'}}
        >
          <ArrowDropDownIcon sx= {{ color: 'red', backgroundColor: 'transparent'}} />
        </Button>
      </ButtonGroup> */}
      {/* <Popper
        sx={{
          zIndex: 1, backgroundColor: 'transparent'
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
            sx={{}}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose} sx={{backgroundColor: 'transparent'}}>
                <MenuList id="split-button-menu" autoFocusItem sx={{backgroundColor: 'transparent'}}>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      sx={{backgroundColor: 'transparent'}}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#404040" }}
          >
            100.00 BUSD

          </Typography>

          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "#CC195A" }}
            >
              <NotificationsIcon sx={{}} />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ mr: 2, color: "#CC195A" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
