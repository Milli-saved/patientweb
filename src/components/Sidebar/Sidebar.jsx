import React, { useContext, useEffect, useMemo, useState } from "react";
import { RoleBasedViews } from "../../pages/view";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Menu,
  Button,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import MenuIcon from "@mui/icons-material/Menu";
import { Person } from "@mui/icons-material";

const SidebarItem = ({ label, Icon, to, isActive }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      color: isActive ? "#1565c0" : "inherit",
    }}
  >
    <ListItem
      button
      selected={isActive}
      sx={{
        borderRadius: "8px",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#f1f1f1",
        },
      }}
    >
      {Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={label} />
    </ListItem>
  </Link>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();

  console.log("the user: ", user);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  //   let userDetails;
  //   if (typeof user === "string") {
  //     userDetails = JSON.parse(user);
  //   } else {
  //     userDetails = user;
  //   }

  const rolesMenu = useMemo(() => {
    return Object.keys(RoleBasedViews[user?.role]?.routes).map((key) => {
      const { icons, label, bool } = RoleBasedViews[user.role].routes[key];
      return { Icon: icons, label, to: key, bool };
    });
  }, [user?.role]);

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setUser } = useContext(AuthContext);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const logoutHandler = () => {
    navigate("/");
    // setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar className="">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PIMS
            </Typography>
            <Button color="inherit">
              <Person onClick={toggleDropdown} className="text-lime-50" />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", mt: 2, p: 2 }}>
          <List sx={{ p: 0 }}>
            {rolesMenu.map((eachSideBarItem, index) => {
              return (
                (eachSideBarItem.bool === undefined ||
                  eachSideBarItem.bool === true) && (
                  <SidebarItem
                    key={index}
                    label={eachSideBarItem.label}
                    Icon={eachSideBarItem.Icon}
                    to={eachSideBarItem.to}
                    isActive={location.pathname === eachSideBarItem.to}
                  />
                )
              );
            })}
          </List>
        </Box>
      </Drawer>
      {dropdownOpen && (
        <div
          className="absolute right-1 min-h-10 mt-20 w-48
         bg-white border border-gray-200 rounded shadow-lg z-50"
        >
          <button
            onClick={logoutHandler}
            className="block text-sm pl-7 pt-2 hover:bg-gray-100 w-full text-start z-50"
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
