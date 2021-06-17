import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <h2>Plants Watering App</h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <button>Logout</button>
      <button>Profile</button>
    </div>
  );
}

export default Navigation;
