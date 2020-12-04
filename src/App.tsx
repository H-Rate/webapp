import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import io from 'socket.io-client'

function App() {

  const socket = useRef<null | SocketIOClient.Socket>(null)
  const [bpm, setBpm] = useState("-")

  useEffect(() => {
    socket.current = io("http://localhost:3001/")
    
    socket.current.on("connect", () => {
      console.log("connected")
    })

    socket.current.on("disconnect", () => {
      console.log("Disconnected")
    })

    socket.current.on("testevent", (data: number) => {
      let bpm = Math.round(data * 100)
      setBpm(bpm.toString())
    })

    socket.current.connect()

    console.log("socket")

    return () => {}
  }, [])

  return (
    <div className="App">
      <div className="Header">
        <h1>HRate</h1>
        <p>Connect your Apple Watch</p>
      </div>
      <div className="Content">
        <p className="BPM-field">{bpm}<span className="BPM-units">BPM</span></p>
      </div>
    </div>
  );
}

export default App;