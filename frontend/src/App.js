import User from './components/User';
import './App.css';
import Todo from './components/Todo';
import { useEffect, useState } from 'react';
// import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
function App() {
  let [status, setStatus] = useState(true)
  // let navigate = useNavigate()
  let [allTodo, setAllTodo] = useState([])
  const getAllTodo = async()=>{
    try{

      const response = await fetch(`${process.env.REACT_APP_API_URI}/api/todo/fetchalltodo`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'auth-token':localStorage.getItem('token')
          },
          // body: JSON.stringify({title:data.title ,desc:data.desc,category:data.category})
          
        });
        const resp_data = await response.json();
          setAllTodo([...resp_data])
      
    }catch(e){
        console.log("connectionm refused server down", e.message)
    }
  }



  const addTask = async(data)=>{
    try{

      const response = await fetch(`${process.env.REACT_APP_API_URI}/api/todo/addtodo`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'auth-token':localStorage.getItem('token')
          },
          body: JSON.stringify({title:data.title ,desc:data.desc,category:data.category})
          
        });
         const resp_data = await response.json();
         if( resp_data.success){
          alert("Task added successfully!")
          getAllTodo()
         }
         else{
          alert("Task addition failed")
         }
  }catch(e){
      console.log("connectionm refused server down", e.message)
  }


  }

  const checkboxUpdate = async(data)=>{
    try{

      const response = await fetch(`${process.env.REACT_APP_API_URI}/api/todo/updatetodo/${data._id}`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'auth-token':localStorage.getItem('token')
          },
          body: JSON.stringify({title:data.title, desc:data.desc, status:data.status})
          
        });
      getAllTodo()// for fetching all todos so that we can see wether todo is deletd or not
  }catch(e){
      console.log("connectionm refused server down", e.message)
  }

  }
  useEffect(()=>{
    getAllTodo()
  },[])
  return (
    <Router>
    <>
      <Routes>
        <Route exact path='/' element={<User setStatus={setStatus} status={status}/>}></Route>
        <Route exact path='/todo' element={<Todo addTask={addTask} allTodo={allTodo} checkboxUpdate={checkboxUpdate}/>}></Route>
        <Route exact path='*' element={<NotFound/>}></Route>
      </Routes>
    
    {/* <Todo/> */}
    </>
    </Router>
  );
}

export default App;
