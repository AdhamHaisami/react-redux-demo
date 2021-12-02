import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

function HooksIceCreamContainer() {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice creams: {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
