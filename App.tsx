import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './componentss/counter';
import { Todos } from './componentss/Todos';

function App() {
  return (
    <>
    {/* <Counter init={0}> */}
{/*       */}
    {/* <button>Child</button> */}
    {/* <button>Child</button> */}
    {/* <button>Child</button> */}
    {/* <button>Child</button> */}
    {/* </Counter> */}
    <Todos/>
    </>
  );
}

export default App;
