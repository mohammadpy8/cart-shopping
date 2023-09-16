import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increamentByAmount } from '../features/counter/counterSlice';

const Counter = () => {

    const [counterVal, setCounterVal] = useState("");

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    console.log(counter);

    return (
        <div>
            <input type="text" value={counterVal} onChange={e => setCounterVal(e.target.value)} />
            <h2>counter : {counter.counterValue}</h2>
            <button onClick={() => dispatch(increment())}>increase</button>
            <button onClick={() => dispatch(decrement())}>decrease</button>
            <button onClick={() => dispatch(increamentByAmount(+counterVal))}>by Amount</button>
            <button></button>
        </div>
    );
};

export default Counter;