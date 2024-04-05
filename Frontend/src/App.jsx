import './App.css'
import Introduction from './Component/IntroductionComponent/Introduction'
import SignUp from './Component/SignUpComponent/SignUp'
import Login from './Component/LoginPage/Login'
import Home from './Component/HomeComponent/Home'
import CreateQun from './Component/Qun/CreateQun/Create'
import {Routes , Route } from "react-router-dom";
function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Introduction/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home/:id" element={<Home/>}/>
          <Route path="/createQun/:id" element={<CreateQun/>}/>
        </Routes>
      </>
  )
}

export default App
