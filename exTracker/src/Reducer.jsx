import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case "incre":
            return {count: state.count+1}
        case "decre":
            return {count: state.count-1}
        default: return state
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <div>
      <button onClick={() => dispatch({ type: "incre" })}>
        Incre:{state.count}
      </button>
      <button onClick={() => dispatch({ type: "decre" })}>
        Decre:{state.count}
      </button>
    </div>
  );
}

export default Reducer
