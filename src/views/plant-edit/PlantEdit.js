import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const intialFormValues = {
  nickname: '',
  species: '',
  h2o_frequency: '',
  image_url: '',
};

function PlantEdit(props) {
  const history = useHistory();
  const { id } = useParams();
  const [formValues, setFormValues] = useState(intialFormValues);

  const onChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const editPlant = {
      nickname: formValues.nickname,
      species: formValues.species,
      h2o_frequency: formValues.h2o_frequency,
      image_url: formValues.image_url,
    };

    axios
      .put(
        `https://water-my-plants-61621.herokuapp.com/api/plants/${id}`,
        editPlant
      )
      .then((res) => {
        if (res.data.nickname) {
          history.replace('/profile');
        }
      });
  };
  useEffect(() => {
    axios
      .get('https://water-my-plants-61621.herokuapp.com/api/plants')
      .then((res) => {
        console.log('ran');
        const plants = res.data;
        const plant = plants.find((plant) => {
          return plant.id === parseInt(id);
        });
        console.log(plant);
        setFormValues({
          nickname: plant.nickname ? plant.nickname : '',
          species: plant.species ? plant.species : '',
          h2o_frequency: plant.h2o_frequency ? plant.h2o_frequency : '',
          image_url: plant.image_url ? plant.image_url : '',
        });
      });
  }, [id]);

  return (
    <div>
      <div id="edit-header">
        <h1>Edit Plant</h1>
      </div>
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
            Edit Plant
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

export default PlantEdit;
