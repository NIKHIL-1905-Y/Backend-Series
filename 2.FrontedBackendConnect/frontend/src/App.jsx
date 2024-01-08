import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
   
  const [jokes,setJokes] = useState([])

    // const dataDownload = async () =>{
    //     const data = await axios.get('http://localhost:3000/hindiJokes')
    //      setJokes(data);
    //      console.log(data)
    // }

  useEffect(()=>{
     axios.get('/api/hindiJokes')
     .then((response) =>{
      setJokes(response.data)
      console.log(response.data)
     })
     .catch((error) =>{
      console.log(error)
     })

    
  },[])

  return (
    <>
      <h1>Hello Nikhil ,You are doing Wonders </h1>
      <p>This is the list of jokes for you</p>
      <p>Total no of JOKES: {jokes.length}</p>
       
       {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
          </div>
        ))
       }
    </>
  )
}

export default App
