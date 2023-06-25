import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  NavLink,
  withRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RequestProductWholesaler(props) {
  const [account] = useState(props.account);
  const [web3, setWeb3] = useState(props.web3);
  const [supplyChain] = useState(props.supplyChain);
  const [loading, isLoading] = useState(false);
  const [medicineAddress, setmedicineAddress] = useState("");
  const [manufacturerAddress, setmanufacturerAddress] = useState("");
  const [signature, setSignature] = useState("");

  const classes = useStyles();

  const handleInputChange = (e) => {
    if (e.target.id === "medicineAddress") {
      setmedicineAddress(e.target.value);
    } else if (e.target.id === "manufacturerAddress") {
      setmanufacturerAddress(e.target.value);
    } else if (e.target.id === "signature") {
      setSignature(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoading(true);
    supplyChain.methods
      .requestProduct(account, manufacturerAddress, medicineAddress, signature)
      .send({ from: account })
      .once("receipt", async (receipt) => {
        alert("Request Made to Manufacturer!");
        console.log(receipt);
        isLoading(false);
      });
  };

  return (
    <Grid
      container
      style={{
        display: "center",
        alignItems: "center",
        maxWidth: 400,
        justify: "center",
        marginTop: "2%",
        marginLeft: "30%",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "#FCF6F5",
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Entrer médicaments à demander{" "}
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="medicineAddress"
                  label="Address médicaments"
                  name="medicineAddress"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="manufacturerAddress"
                  label="Address fabricant"
                  name="manufacturerAddress"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="signature"
                  label="Signature"
                  name="signature"
                />
              </Grid>
            </Grid>
            <Button
              manufacturerAddress="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              style={{ backgroundColor: "#97BC62" }}
            >
              Demander médicaments
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
}
