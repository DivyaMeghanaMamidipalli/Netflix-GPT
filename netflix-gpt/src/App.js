import {useState, useEffect} from 'react';
import Body from "./components/Body";
import {getTest} from "./functions/test";

function App() {

  const [data,setData]=useState(["Hello World!"]);
  // useEffect(()=>{
  //   getTest().then((res)=>{
  //     setData(res.message);
  //   });
  // },[]);
  return (
    <div className="App">
      <h1>{data}</h1>
      <Body/>
    </div>
  );
}

export default App;
