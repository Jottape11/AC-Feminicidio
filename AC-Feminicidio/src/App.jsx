import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
 </Routes>
 </BrowserRouter>
      </div>
    </>
  )
}

export default App
