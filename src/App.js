import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
BrowserRouter as Router,
//   RouterProvider,
Route,
Routes,
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title ="TextUtils - Dark Mode";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title ="TextUtils - Light Mode";
    }
  }
  return(
    <>
    <Router>
      <Navbar title="Navbar" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/"element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode} toggleMode={toggleMode}/>}>
        </Route>
        <Route path="/about" element={<About mode={mode}/>}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
