import React from 'react';
import { useState } from 'react';
import axios from 'axios';

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
    axios
      .post('https://reqres.in/', this.state.credentials)
      .then((res) => {
        localStorage.setItem('token', res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to Water My Plants!</h1>
      <div data-testid="loginForm" className="login-form">
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
