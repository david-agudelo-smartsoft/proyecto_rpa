import { useAuth } from "../context/authContext";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";


const lightColor = "rgba(255, 255, 255, 0.7)";
export function Home(props) {
//   const { onDrawerToggle } = props;
  const { user, logout, loading } = useAuth();
  console.log(user);

  const handleLogOut = async () => {
    await logout();
  };
  if (loading) return <h1>loading</h1>;

  const categories = [
    {
      id: "Build",
      children: [
        {
          id: "Authentication",
          icon: <PeopleIcon />,
          active: true,
        },
        { id: "Database", icon: <DnsRoundedIcon /> },
        { id: "Storage", icon: <PermMediaOutlinedIcon /> },
        { id: "Hosting", icon: <PublicIcon /> },
        { id: "Functions", icon: <SettingsEthernetIcon /> },
        {
          id: "Machine learning",
          icon: <SettingsInputComponentIcon />,
        },
      ],
    },
    {
      id: "Quality",
      children: [
        { id: "Analytics", icon: <SettingsIcon /> },
        { id: "Performance", icon: <TimerIcon /> },
        { id: "Test Lab", icon: <PhonelinkSetupIcon /> },
      ],
    },
  ];

  const item = {
    py: "2px",
    px: 3,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
      bgcolor: "rgba(255, 255, 255, 0.08)",
    },
  };

  const itemCategory = {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
    py: 1.5,
    px: 3,
  };

  const { ...other } = props;

  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/6">
        <Drawer variant="permanent" {...other}>
          <List disablePadding>
            <ListItem sx={{ ...item, ...itemCategory }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ ...item, ...itemCategory, fontSize: 22, color: "#000" }}>Project Overview</ListItemText>
            </ListItem>
            {categories.map(({ id, children }) => (
              <Box key={id} sx={{ bgcolor: "#fff" }}>
                <ListItem sx={{ py: 2, px: 3 }}>
                  <ListItemText sx={{ color: "#000" }}>{id}</ListItemText>
                </ListItem>
                {children.map(({ id: childId, icon, active }) => (
                  <ListItem disablePadding key={childId}>
                    <ListItemButton selected={active} sx={item}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText sx={{ color: "#000" }}>{childId}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}

                <Divider sx={{ mt: 2 }} />
              </Box>
            ))}
          </List>
        </Drawer>
      </div>
      <div className="lg:w-full h-full items-center justify-center bg-gray-200">
        <div className="">
          <React.Fragment className="w-full items-center justify-center">
            <AppBar color="primary" position="sticky" elevation={0}>
              
            </AppBar>
            <AppBar
              component="div"
              color="primary"
              position="static"
              elevation={0}
              sx={{ zIndex: 0 }}
            >
              <Toolbar>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item xs>
                    <Typography color="inherit" variant="h5" component="h1">
                      <h1 className="ml-12 mt-4"> Bienvenido {user.email}</h1>
                    </Typography>
                  </Grid>
                  <Grid item>
                      <Button
                        className="w-20 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold"
                        type="submit"
                        variant="contained"
                        color="warning"
                        sx={{ borderColor: lightColor }}
                        onClick={handleLogOut}
                      >
                        Logout
                      </Button>
                  </Grid>
                  <Grid item>
                    <IconButton color="inherit" sx={{ p: 0.5 }}>
                      <Avatar
                        src="/static/images/avatar/1.jpg"
                        alt="My Avatar"
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <AppBar
              component="div"
              position="static"
              elevation={0}
              sx={{ zIndex: 0 }}
            >
              <Tabs className="ml-12 mt-4" value={0} textColor="inherit">
                <Tab label="Users" />
                <Tab label="Sign-in method" />
                <Tab label="Templates" />
                <Tab label="Usage" />
              </Tabs>
            </AppBar>
          </React.Fragment>
        </div>
        <div>
          <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: "block" }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Search by email address, phone number, or user UID"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: "default" },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Add user
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon
                          color="inherit"
                          sx={{ display: "block" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <Typography
              sx={{ my: 5, mx: 2 }}
              color="text.secondary"
              align="center"
            >
              No users for this project yet
            </Typography>
          </Paper>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://smartsoft.com.co/">
              SmartSoft Solutions S.A.S.
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Home;
