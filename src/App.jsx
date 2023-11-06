import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [data , setdata] = useState([])

    useEffect(()=>{
      fetchfunc()
    } , [])

    function fetchfunc(params) {
      fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b01f7549482f487ba0b83f5bc98d6b0d')
      .then(res => res.json())
      .then( deta => setdata(deta.articles))
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
