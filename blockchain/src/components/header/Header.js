import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../images/LogoOff.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" style={{ background: "#022031" }}>
          <Toolbar>
            <Typography
              variant="h5"
              className={classes.title}
              style={{ textAlign: "center" }}
            >
              SNT<span style={{ color: "#4fabe4" }}>Pharma</span>
            </Typography>
            <img
              src={Logo}
              style={{ width: "6%", float: "right", borderRadius: "5px" }}
            ></img>
          </Toolbar>
        </AppBar>
      </div>
      {/* <Cards /> */}
    </div>
  );
}
export default Header;
