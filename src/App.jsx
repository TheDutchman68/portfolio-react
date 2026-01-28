import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";

function App() {

  return (
      <>
        <Navbar></Navbar>
        <Home />
      </>
  )
}

export default App
