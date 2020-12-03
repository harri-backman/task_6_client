import React from "react"
import { Routing } from "./routes/routing.js"
import { NavigationBar } from "./components/navigationbar/navigationbar.js"
import { UserProvider } from "./shared/global/provider/userprovider.js"
import "./shared/global/css/global.css"


function App() {
  
  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  )  
}


export default App
