import Body from "./Components/Body"
import Header from "./Components/Header"
import { Provider } from "react-redux"
import { appStore } from "./Redux/appStore"


function App() {
  

  return (
  <Provider store={appStore}>
     <div className=" w-screen pt-[60px] sm:h-[60px] h-[50px]">
     <Header/>
     <Body/>

   
   </div>
    </Provider>
  )
}

export default App
