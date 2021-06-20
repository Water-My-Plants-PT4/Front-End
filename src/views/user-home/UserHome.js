import axios from "axios";
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

export default function Home() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    axios
      .get("https://water-my-plants-61621.herokuapp.com/api/plants")
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>My Plants User Page</h2>
      <button>Add Plants</button>
      {plants &&
        plants.map((plant) => {
          return <PlantCard details={plant} key={plant.id} />;
        })}
    </div>
  );
}
