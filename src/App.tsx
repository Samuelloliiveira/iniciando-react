import { useState } from "react"
import { Tweet } from "./components/Tweet"

import './App.css' //aqui estamos usando css de forma normal
import { AppRoutes } from "./Routes"

function App() {
  /**useState cria uma variável que é monitorada
   * pelo componente
   */
  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3',
  //   'Tweet 4',
  // ]) 

  // function createTweet() {
  //   setTweets([...tweets, 'Tweet 5'])
  // }

  return (

    <AppRoutes />

    // <div>
    //   {tweets.map(tweet => {
    //     return <Tweet text={tweet} />
    //   })}

    //   {/* aqui estamos usando css dentro do javascript */}
    //   <button 
    //     onClick={createTweet}
    //     style={{
    //       backgroundColor: '#8257e5',
    //       border: 0,
    //       padding: '6px 12px',
    //       color: '#FFF'
    //     }}
    //   >Adicionar Tweet</button>

    // </div>
  )
}

export default App
