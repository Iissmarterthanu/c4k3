import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
// Re-export with a default theme
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles( (theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));


const Header = (props) => {
  const { history } = props;
  console.log(history);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      key: "1",
      menuTitle: "Shop",
      pageURL: "/shop"
    },
    {
      key: "2",
      menuTitle: "About",
      pageURL: "/about"
    },
    {
      key: "3",
      menuTitle: "Login",
      pageURL: "/login"
    },
    {
      key: "4",
      menuTitle: "Giving Back",
      pageURL: "/giving"
    },
    {
      key: "5",
      menuTitle: "Cart",
      pageURL: "/cart"
    }
  ];


  return (  
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}
          onClick={() => handleButtonClick("/")}>
          Collars for Kings
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}>
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={() => setAnchorEl(null)}>

              {menuItems.map( (menuItem) => {
                const { menuTitle, pageURL, key } = menuItem;
                return (
                  <MenuItem key={key} onClick={() => handleMenuClick(pageURL)}>
                    {menuTitle}
                  </MenuItem>
                );
              })}

            </Menu>

          </>  
        ): (
          <>
            {menuItems.map((menuItem) => {
              const { menuTitle, pageURL, key } = menuItem;
              return (
                <Button key={key} color="inherit" 
                  onClick={() => handleButtonClick(pageURL)}>
                  {menuTitle}
                </Button>
              );
            })}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);

