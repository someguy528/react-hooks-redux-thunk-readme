import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAstronauts } from "./astronautsSlice";

function Astronauts() {
  const dispatch = useDispatch();

  const astronauts = useSelector((state) => state.astronauts.entities);
  const status = useSelector((state) => state.astronauts.status)
  console.log(status)

  function handleClick() {
    // dispatch the action creator (see below!)
    dispatch(fetchAstronauts());
  }

  const astronautsList = astronauts.map((astro) => (
    <li key={astro.id}>{astro.name}</li>
  ));

  return (
    <div>
      {status === "loading"? <h1>Loading</h1> : null}
      <button onClick={handleClick}>Get Astronauts</button>
      {astronautsList}
    </div>
  );
}

export default Astronauts;
