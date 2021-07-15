import React, {useEffect, useState}  from 'react';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/skills';
import Experience from './Experience/Experience';
import Myprojects from './Myprojects/project';
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';
import ClimbingBoxLoader
 from "react-spinners/ClimbingBoxLoader";
import './App.css'

function App() {
  const[loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    }, 8000)
  },[]);
  return (
    <div>
      {
        loading ?
        <div className="App">
          <ClimbingBoxLoader
        className="loader"
        style={{marginTop:"250px"}}
        color={"#00D4FF"}
         loading={loading}
         size={30} 
           />
       </div>
        :
       <div>
        <Header/>
        <About/>
        <Skills/>
        <Experience/>
        <Myprojects/>
        <Contact/>
        <Footer/>
         </div>
       
      }
     
    
     
    </div>
  );
}


export default App;
