import React from 'react';
import store from "../../redux/store"


const Counter = () => {
    const { useCounterReducer } = store()
    const [counterState, counterDispatch] = useCounterReducer();
    return (
        <React.Fragment>
            <p>{counterState.count}</p>
            <button onClick={() => counterDispatch({type: 'increment'})}>add + 1</button>
        </React.Fragment>
    )
}

export default Counter;