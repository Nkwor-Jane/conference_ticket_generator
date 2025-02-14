import {Routes, Route} from "react-router-dom"
// COMPONENTS
import Header from './components/Header';
import GeneratedTickets from './components/GeneratedTickets';
import Home from "./components/Home";

function App() {
  return (
    <div className='bg-regal-blue flex flex-col items-center  
    w-screen min-h-screen text-white'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ticket-history' element={<GeneratedTickets/>}/>
        </Routes>
    </div>
    
  )
}

export default App
