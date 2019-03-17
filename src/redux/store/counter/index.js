import React from 'react'; 

const useCounterReducer = () => {
    const initialState = {
        count: 0
    };

    function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return {count: state.count + 1};
          case 'decrement':
            return {count: state.count - 1};
          default:
            throw new Error();
        }
    }

    const [counterState, counterDispatch] = React.useReducer(reducer, initialState);
    /* 
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    */

    return [counterState, counterDispatch];
};

export default useCounterReducer;