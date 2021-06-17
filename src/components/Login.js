import React from 'react';
import { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    phonenumber: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('auth/login', form)
      .then((res) => {
        // localStorage.setItem('token', res.data.payload); Probably need this later, this is just a small fix
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to Water My Plants!</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name: </label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <label htmlFor="phonenumber">Phone Number: </label>
          <input
            name="phonenumber"
            value={form.phonenumber}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
