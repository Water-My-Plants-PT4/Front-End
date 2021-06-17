import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav>
        <h2>Plants Watering App</h2>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button>Logout</button>
        </Link>

        <button>Profile</button>
      </nav>
    </div>
  );
}

export default Navigation;