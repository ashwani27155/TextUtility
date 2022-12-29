
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light');
  const [text,setText]=useState("Enable Dark");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setAlert(null)
   }, 2000);
  }
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    setText('Enable Light')
    document.body.style.backgroundColor='#212529'
    showAlert(" Dark Mode has been Enabled","success")
  }
  else{
    setMode('light');
    setText('Enable Dark')
    document.body.style.backgroundColor='white'
    showAlert(" Light Mode has been Enabled","success")
  }
 }
  return (
    <Router>
       <Navbar title="TextUtils" home="Home" about="About Us" mode={mode} toggleMode={toggleMode} text={text}/>
        <Alert  alert={alert}/>
       <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Write your text to analyze" mode={mode}/>}/>
          </Routes>
       </div>
    </Router>
  );
}

export default App;
