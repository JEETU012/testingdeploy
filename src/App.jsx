import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [data , setdata] = useState([])

    useEffect(()=>{
      fetchfunc()
    } , [])

    function fetchfunc(params) {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then( deta => setdata(deta))
    }
    
    let style = {
      margin: '15px 0',
      border: '1px solid white',
    }

  return (
    <>
      {data && data.map( (e , i)=>{
        return <div key={i} style={style}>
          {e.title}
        </div>
      })}
    </>
  )
}

export default App
