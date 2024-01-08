import { useState } from 'react';
import { Counter } from './Counter';

function Example1() {
    const [status, setStatus] = useState();
    return (
      <>
        {/* { status ? <Counter color="green"/> : <div><Counter color="red"/></div>} */}
  
        { status ? <Counter color="green" key="G"/> : <Counter color="red" key="R"/>}
  
        {/* { status && <Counter color="green"/>}
        { !status && <Counter color="red"/>} */}
  
        <input type='checkbox' onChange={(e) => setStatus(e.target.checked)} /> 
        {status ? 'Green' : 'Red'}
      </>
    );
  }
  
  export default Example1;