import Body from './Home_Comp/Body'
import Header from './Home_Comp/Header'
import './App.css'
import Footer from './Home_Comp/Footer'
import { useState } from "react"

export default function App() {
    const [search, setSearch] = useState("")

  return (
    <div>
      <Header setSearch={setSearch}/>
      <Body search={search}/>
      <Footer/>
    </div>
  )
}
