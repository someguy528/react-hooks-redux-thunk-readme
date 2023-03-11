// Action Creators
export function fetchAstronauts() {
  return function(dispatch){
    // dispatch initial action to set up loading state
    dispatch({type: "astronauts/astronautsLoading"});

    // initiate a network request with fetch
    fetch("http://api.open-notify.org/astros.json")
    .then((response)=> response.json())
    .then((astronauts)=>
    // with data from response, dispatch another action to add data to redux store
    dispatch({
      type: "astronauts/astronautsLoaded",
      payload: astronauts.people,
    })
    )
  }
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: "loading",
      };

    default:
      return state;
  }
}
