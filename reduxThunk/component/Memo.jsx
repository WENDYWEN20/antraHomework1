import {useMemo, useState} from "react";
  function getFib(num){
    if (num<=1){return num}
    return getFib(num-1)+getFib(num-2)
  }
  export default function Memo() {
    const [theme, setTheme]=useState('pink')
    const [n, setN]=useState(35)
    const fib=useMemo(()=>{console.log('Calculating fibonacci number')
        return getFib(n)}, [n])
    const toggleTheme=()=>setTheme((prev)=>prev==='pink'? 'green':'pink')

    return (
      <div className={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div>Memo Fibonacci Number: {fib}</div>
        <button onClick={()=>setN((prev)=>prev+1)}> Add N</button> 
        <div>{n}</div>
      </div>
    );
  }
  
  