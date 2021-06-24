import React, { useEffect } from 'react';
import PlantCard from './PlantCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPlants } from '../../actions';

const Home = (props) => {
  useEffect(() => {
    props.fetchPlants();
  }, []);

  return (
    <div>
      <h2>My Plants User Page</h2>
      <Link to="/create-plant">
        <button>Add Plants</button>
      </Link>
      {props.plantsArray &&
        props.plantsArray.map((plant) => {
          return <PlantCard details={plant} key={plant.id} />;
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plantsArray: state.plantsArray,
  };
};

export default connect(mapStateToProps, { fetchPlants })(Home);
