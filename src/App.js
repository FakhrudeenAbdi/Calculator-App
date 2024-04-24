// // import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';

// function App() {
  // const [value, setValue] = useState ('');
//   return (
//     <div className='calculator-grid'>
//       <div className='output'>
//         <div className='previous-oprerand'>
//         <div className='current-oprerand'>



//         </div>
//         </div>
        
//       </div>

//         <button className='span-two' >AC</button>
//         <button className='button'>DEL</button>
//         <button>/</button>
//         <button>1</button> 
//         <button>2</button>
//         <button>3</button>
//         <button>*</button>
//         <button>4</button>
//         <button>5</button>
//         <button>6</button>
//         <button>+</button>
//         <button>7</button>
//         <button>8</button>
//         <button>9</button>
//         <button>-</button>
//         <button>.</button>
//         <button>0</button>
//         <button className='span-two'>=</button>
//     </div>
    
//   );
// }

// export default App;



import { useState } from 'react';
import './App.css';
function App() {
  const [value, setValue] = useState ('');
  return (
    <div class="body">
      <div class="container">
        <div class="calculator">
          <form>
            <div class="disp">
              <input type='text' value={value}/>
            </div>
            <div>
              <input type='button' value='AC' onClick={e => setValue("")}/>
              <input type='button' value='DE' onClick={e => setValue(value.slice(0, -1))}/>
              <input type='button' value='.' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='/' onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type='button' value='7' onClick={e  => setValue(value + e.target.value)}/>
              <input type='button' value='8' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='9' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='*' onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type='button' value='4' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='5' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='6' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='+' onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type='button' value='1' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='2' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='3' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='-' onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type='button' value='00' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='0' onClick={e => setValue(value + e.target.value)}/>
              <input type='button' value='=' className='equal' onClick={e => setValue(eval(value))}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;





