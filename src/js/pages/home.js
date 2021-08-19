import React from 'react';
import Ban from '../components/ban'


export function sum(a, b) {
  return a + b;
}



const Home = () => {
  return (
    <div>
      <Ban />
      {/* {sum(40, 2)} */}
      <h1>C'est la homepage Librarie!</h1>
    </div>
  );
};

export default Home;
