import React from 'react';
import { useState } from 'react';


const Login = () => {
    const [form, setForm] = useState({ username: '', password: '', phonenumber: '' });

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        
      };

    return (
        <div>
        <h1>Welcome to Water My Plants!</h1>
        <div data-testid="loginForm" className="login-form">
          <form onSubmit={handleSubmit}>
            <label>User Name: </label>
            <input data-testid="username" name="username" value={form.username} onChange={handleChange} />
            <label>Password: </label>
            <input data-testid="pasword" name="password" value={form.password} onChange={handleChange} />
            <label>Phone Number: </label>
            <input data-testid="phonenumber" name="phonenumber" value={form.phonenumber} onChange={handleChange} />
            <button>Submit</button>
          </form>
        </div>
  
        
      </div>
    )
}

export default Login