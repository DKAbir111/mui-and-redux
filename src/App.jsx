import { CssBaseline } from "@mui/material"
import Dividers from "./components/Dividers"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  return (

    <div >
      <CssBaseline />
      <Navbar />
      <Hero />
      <Dividers />
      <Dividers />
      <Main />
      <Dividers />
      <Dividers />
    </div>

  )
}

export default App
