import { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Editor from './components/Editor'
import  './styles/main.css'
function App() {
  const[theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  useEffect(()=>{
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);

  },[theme]);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return(
    <>
 
      <Editor theme={theme} toggleTheme={toggleTheme}/>
    </>
   
  )
 
 
}
export default App
