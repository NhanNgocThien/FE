import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    increment, 
    decrement, 
    increaseByAmount, 
    selectCount
} from '../features/counterSlice';

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <div style={{marginTop: '50px'}}>
                <input 
                    style={{width: '50px'}}
                    type="text" 
                    value = {amount}
                    onChange={handleChange}/>
                <button onClick={() => dispatch(increaseByAmount(Number(amount) || 0))}>
                    Add amount
                </button>
            </div>
        </div>
    )
}
