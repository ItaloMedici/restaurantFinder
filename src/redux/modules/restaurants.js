export const Types = {
  SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
  SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
}

const initialState = {
  restaurants: [],
  restaurantsSelected: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case Types.SET_RESTAURANTS:
      return { ...state, restautants: action.payload }; 
    case Types.SET_RESTAURANT:
      return { ...state, restautant: action.payload };
    default:
      return state;
  }
};

export function setRestaurants(restautants) {
  return {
    type: '',
    payload:  restautants,
  }
}

export function setRestaurant(restautant) {
  return {
    type: '',
    payload:  restautant,
  }
}