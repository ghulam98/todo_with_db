import User from './components/User';
import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';
// import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let [status, setStatus] = useState(true)
  return (
    <Router>
    <>
      <Routes>
        <Route exact path='/' element={<User setStatus={setStatus} status={status}/>}></Route>
        <Route exact path='/todo' element={<Todo/>}></Route>
      </Routes>
    
    {/* <Todo/> */}
    </>
    </Router>
  );
}

export default App;
