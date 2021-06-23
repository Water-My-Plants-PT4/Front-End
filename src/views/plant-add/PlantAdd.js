import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const intialFormValues = {
  nickname: "",
  species: "",
  h2o_frequency: "",
  image_url: "",
};

function PlantAdd() {
  const history = useHistory();
  const [formValues, setFormValues] = useState(intialFormValues);

  const onChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newPlant = {
      nickname: formValues.nickname,
      species: formValues.species,
      h2o_frequency: formValues.h2o_frequency,
      image_url: formValues.image_url,
    };

    axios
      .post("https://water-my-plants-61621.herokuapp.com/api/plants", newPlant)
      .then((res) => {
        if (res.data.nickname) {
          history.replace("/profile");
        }
      });
  };

  const classes = useStyles();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          name="nickname"
          label="Nickname"
          variant="outlined"
          value={formValues.nickname}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          name="species"
          label="Species"
          variant="outlined"
          value={formValues.species}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          name="h2o_frequency"
          label="Thirst Freq"
          variant="outlined"
          value={formValues.h2o_frequency}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          name="image_url"
          label="Image URL"
          variant="outlined"
          value={formValues.image_url}
          onChange={onChange}
        />

        <div>
          <Button variant="contained" color="secondary" type="submit">
            Add Plant
          </Button>
          <Link to="/profile">
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default PlantAdd;
