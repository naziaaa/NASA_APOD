import React, {useState,useEffect} from "react"
import HttpClient from "./HttpClient"
import './style.css'

const App=()=>{
  const [apod,setApod]=useState({})

  useEffect(()=>{
    HttpClient.getApod().then(apodData =>{
      setApod(apodData.data)
    })
  },
  [])

  return (
    <div className="App" >
      <h1>NASA API</h1>
      <h2>Astronomy Picture Of Day</h2>
      {apod &&(
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width="800" height="500"/>
          <p>{apod.explanation}</p>                                      
        </article>
      )}
      <p>"A project by Nazia ❤️."</p>
    </div>
  )
}
export default App;