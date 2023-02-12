import { useState } from 'react';
import './App.css';

//имортировали компонент Button из того места, где он лежит, чтобы у нас была возможность использовать его в коде ниже
import Button from './Button';

//компоненты в React это функции, которые возвращают HTML
function App() {

  const [count, setCount] = useState(0)
  //useState создает переменную и функцию, которая может обновлять эту переменную
  //setCount обновляет значение переменной. теперь нельзя написать const count = 3. Надо писать setCount(3)
  

  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-24'>Счетчик</h1>
      <p className='text-8xl font-bold text-center mt-12'>{count}</p>
      <div className='flex justify-center mt-12'>
        <Button title={"Отнять -1"} changeCount={() => setCount(count - 1)} /> 
        <Button title={"Прибавить +1"} changeCount={() => setCount(count + 1)} /> 
      </div>
      

    </div>
  );
}


export default App;

// function App() {

//   const [count, setCount] = useState(0)

//   //useState создает переменную и функцию, которая может обновлять эту переменную
//   //setCount обновляет значение переменной. теперь нельзя написать const count = 3. Надо писать setCount(3)

//   const plus = () => {
//     setCount(count + 1)
//   }

//   const minus = () => {
//     setCount(count - 1)
//   }

//   return (
//     <div>
//       <h1 className='text-3xl font-bold text-center mt-24'>Счетчик</h1>
//       <p className='text-8xl font-bold text-center mt-12'>{count}</p>
//       <div className='flex justify-center mt-12'>
//         <Button title={"Отнять -1"} changeCount={minus} /> 
//         <Button title={"Прибавить +1"} changeCount={plus} /> 
//       </div>

//     </div>
//   );
// }