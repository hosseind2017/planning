import React from 'react';
import useCounterReducer from "../store/counter";

const store = () => {
    const store = {
        useCounterReducer,
    };

    return store;
};

export default store;