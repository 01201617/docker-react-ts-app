import React, {useState} from 'react';

const App = () => {
  // console.log("見える？")
  const [count, setCount] = useState(0)
  const countUp = () =>{setCount(count+1)}
  const countDown = () =>{setCount(preCount=>preCount-1)}
  const reset = () => setCount(0)
  const dividedBy3 = () => setCount(preCount =>{
    return preCount%3 ===0 ? preCount/3 : preCount
  })
  return (
    <>
      <p>count: {count}</p>
      <button onClick={countUp}>+1</button>
      <button onClick={countDown}>-1</button>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={dividedBy3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
}

export default App;
