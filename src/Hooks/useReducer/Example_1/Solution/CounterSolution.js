import React, {useReducer, useState} from 'react';

const ACTIONS = {
    INCREMENT: 'INCREASE'
}

function reducer(state,action){
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1}
        default:
            return state
    }
}

export const CounterSolution = () => {
    const [state, dispatch] = useReducer(reducer,{count: 0})
    return (
        <div>
            counter: {state.count}
            <br/>
            <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>increase</button>
        </div>
    )
};
