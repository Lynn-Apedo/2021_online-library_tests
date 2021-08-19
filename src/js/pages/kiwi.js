import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import kiwi from '../../../public/kiwi.jpg';

const Kiwi = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);

  console.log('APP global state:', appState);

  const getFruity = () => dispatch({ type: 'APP_FRUITY' });
  console.log('coucou ça marche');

  //  const addFruit=() => dispatch({type: "ADD_FRUIT"});
  //  console.log("plus de fruits");

  // const fruits = [0, 0, 0, 0, 0];
  return (
    <div>
      <h1>Yo les kiwiiiiiiis</h1>

      <button onClick={getFruity}>Get fruity</button>

      {appState.fruity ? <img src={kiwi} /> : ''}

      {/* <button onClick={addFruit}>add fruit</button>
{fruits.map((fruit) => <img src={kiwi}/>).slice(5) } */}
    </div>
  );
};

export default Kiwi;
