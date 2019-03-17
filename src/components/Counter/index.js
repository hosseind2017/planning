import React from 'react';
import useCounterReducer from "../../redux/store/counter"


const Counter = () => {
    const [counterState, counterDispatch] = useCounterReducer();
    return (
        <React.Fragment>
            <p>{counterState.count}</p>
            <button onClick={() => counterDispatch({type: 'increment'})}>add + 1</button>
        </React.Fragment>
    )
}

export default Counter;