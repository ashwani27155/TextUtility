
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  const [mode, setMode]=useState('light');
  const [text,setText]=useState("Enable Dark")
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    setText('Enable Light')
    document.body.style.backgroundColor='#212529'
  }
  else{
    setMode('light');
    setText('Enable Dark')
    document.body.style.backgroundColor='white'
    

  }
 }
  return (
    <div>
    <Navbar title="TextUtils" home="Home" about="About Us" mode={mode} toggleMode={toggleMode} text={text}/>
  <div className="container">
  <TextForm heading="Write your text to analyze" mode={mode}/>
  <About/>
  </div>
    </div>
  );
}

export default App;
