// import react ,useState , Martial Ui,axios
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
// 1) set up route in app.js
// form state and an intial state to set form
// functions
// 1. handlechange function
// assign object state header and value
//will control the page load, useHistory to
// 2. onSubmit function
//  create newUser object
// axios get request to create new user
//pass new user object through to api

const initialFormValues = {
  username: "",
  phone_number: "",
  password: "",
};

function Registration() {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    setFormValues({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      username: formValues.username,
      phone_number: formValues.phone_number,
      password: formValues.password,
    };

    axios
      .post(
        "https://water-my-plants-61621.herokuapp.com/api/auth/register",
        newUser
      )
      .then((res) => {
        if (res.data.username) {
          history.replace("/sign-up");
        }
      });
  };

  const classes = useStyles();

  return (
    <div>
      {/* create registration input forms */}
      <div>Sign Up</div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          name="username"
          label="Username"
          variant="outlined"
          value={formValues.username}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="phone_number"
          label="Phone Number"
          variant="outlined"
          value={formValues.phone_number}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="password"
          label="Password"
          variant="outlined"
          value={formValues.password}
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" type="submit">
          Sign Up!
        </Button>
      </form>
    </div>
  );
}

export default Registration;
