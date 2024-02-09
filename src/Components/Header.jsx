import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const pages = ["Portfolio", "Contact", "About", "Store"];

function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const routePaths = {
    Portfolio: "/",
    Contact: "/contact",
    About: "/about",
    Store: "/store",
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component={RouterLink}
          to="/"
          sx={{
            mr: 2,
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Jackson Szurley
        </Typography>

        {/* Menu Button for Smaller Screens */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Drawer for Smaller Screens */}
        <Drawer
          anchor="top"
          open={openDrawer}
          onClose={handleCloseDrawer}
          sx={{ "& .MuiDrawer-paper": { top: "64px" } }}
        >
          <List>
            {pages.map((page) => (
              <ListItem
                key={page}
                button
                component={RouterLink}
                to={routePaths[page]}
                onClick={handleCloseDrawer}
              >
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
