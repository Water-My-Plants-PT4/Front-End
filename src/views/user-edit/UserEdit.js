import React,{useState} from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const initialFormValues = {
  username: '',
  phone_number: '',
  password: '',
};

function UserEdit() {
  
  const history = useHistory();
  const [editValues, setEditValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit=(e)=> {
    e.preventDefault();
    
    const userAfterEdit = {
      username: editValues.username,
      phone_number: editValues.phone_number,
      password: editValues.password,
    }


  axios.post('https://water-my-plants-61621.herokuapp.com/api/auth/userEdit',
  userAfterEdit
  )
  .then((res)=> {
    console.log(res);
  });

};

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit ={handleChange}>
        <TextField
          id="outlined-basic"
          name="username"
          label="Username"
          variant="outlined"
          value={editValues.username}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="phone_number"
          label="Phone Number"
          variant="outlined"
          value={editValues.phone_number}
          onChange={handleChange}
        />
        <TextField
          type="password"
          id="outlined-basic"
          name="password"
          label="Password"
          variant="outlined"
          value={editValues.password}
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UserEdit;
