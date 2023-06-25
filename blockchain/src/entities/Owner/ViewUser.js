import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loader from "../../components/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ViewUser(props) {
  console.log(props);
  console.log(props.account);

  const classes = useStyles();
  const [account] = useState(props.account);
  const [web3, setWeb3] = useState(props.web3);
  const [address, setAddress] = useState("");
  const [supplyChain] = useState(props.supplyChain);
  const [loading, isLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  console.log([account]);
  console.log("Check view SupplyChain");
  console.log([supplyChain]);
  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  async function handleSubmit() {
    var test = await supplyChain.methods.getUserInfo(address).call();
    setName(test.name);
    setRole(test.role);

    console.log(test);
    isLoading(true);
  }

  if (loading) {
    console.log(web3.utils.toAscii(name));
    return (
      <div>
        <p>{address}</p>
        <p>{web3.utils.hexToUtf8(name).trim()}</p>
        <p>{role}</p>
      </div>
    );
  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{
        backgroundColor: "white",
        display: "center",
        alignItems: "center",
        maxWidth: 300,
        justify: "center",
        marginTop: "2%",
        marginLeft: "30%",
        backgroundColor: "#FCF6F5",
      }}
    >
      <TextField
        id="address"
        label="Account"
        variant="outlined"
        onChange={handleInputChange}
      />
      <br></br>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ backgroundColor: "#97BC62" }}
      >
        Afficher utilisateur
      </Button>
    </form>
  );
}
