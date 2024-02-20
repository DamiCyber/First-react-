import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/CounterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter : {count} </h1>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrease
      </button>
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;