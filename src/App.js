import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import NewsPage from "./component/NewsPage";
import { Routes, Route, Link, BrowserRouter, Router, AbortedDeferredError } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./component/About";


const App = (props) => {
  const [mode , setMode] = useState("light")
  const [text , setText] = useState("dark")
  
  const handleOnClick = ()=>{
    if (mode === "light"){
      setMode("dark")
      setText("light")
    }
    else {setMode("light") 
  setText("dark")}
      } 
  
  const [progress,setProgress] = useState(0);


  return (
    <div className={`App bg-${mode} text-${text}`} >
      <BrowserRouter>
        <Navbar handleOnClick = {handleOnClick} />
        <LoadingBar color="#f11946" height = {4} progress= {progress}
   />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route
            path="/"
            element={
              <NewsPage  setProgress = {setProgress}
                key="Home"
                className="flex-container"
                pageSize={6}
                country="in"
                category="general"
                mode = {mode}
                text = {text}
              />
            }
          />
          <Route
            path="/home"
            element={
              <NewsPage  setProgress = {setProgress}
                key="Home"
                className="flex-container"
                pageSize={6}
                country="in"
                category="general"
                mode = {mode}
                text = {text}
              />
            }
          />
          <Route
            path="/Business"
            element={
              <NewsPage  setProgress = {setProgress}
                key="Business"
                className="flex-container"
                pageSize={6}
                country="in"
                category="business"
                mode = {mode}
                text = {text}
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <NewsPage  setProgress = {setProgress}
                key="Entertainment"
                className="flex-container"
                pageSize={6}
                country="in"
                category="entertainment"
                mode = {mode}
                text = {text}
              />
            }
          />
          <Route
            path="/Health"
            element={
              <NewsPage  setProgress = {setProgress}
                key="Health"
                className="flex-container"
                pageSize={6}
                country="in"
                category="health"
                mode = {mode}
                text = {text}
              />
            }
          />
          <Route
            path="/Science"
            element={
              <NewsPage  setProgress = {setProgress}
                key="Science"
                className="flex-container"
                pageSize={6}
                country="in"
                category="science"
                mode = {mode}
                text = {text}
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <NewsPage  setProgress = {setProgress}
                key="Sports"
                className="flex-container"
                pageSize={6}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <NewsPage  setProgress = {setProgress}
                key="Technology"
                className="flex-container"
                pageSize={6}
                country="in"
                category="technology"
                mode = {mode}
                text = {text}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
