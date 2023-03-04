import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Active from './Active';
import AllTodo from './AllTodo';
import Completed from './Completed';
function Todo({addTask,allTodo,checkboxUpdate}) {
    const [key, setKey] = useState('all');
    const [data, setData] = useState({title:"", desc:"",category:"normal"})
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            navigate('/')   
        }
        
    },[key])
    
    const logout = ()=>{
      localStorage.removeItem('token')
      setKey("active")

      
    }

    const onchange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

const submit = (e)=>{
    e.preventDefault()
    addTask( {title:data.title, desc:data.desc, category:data.category}) 
}

  return (
    <>



<section className="vh-100 gradient-custom">
<Link className="btn btn-primary mx-1" onClick={logout} role="button">Logout: {localStorage.getItem('user_id')}</Link>
        
    {/* <button className='btn btn-primary center mx-3' onClick={logout}>Logout: {localStorage.getItem('user_id')}</button> */}
  <div className="container my-1">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card">
          <div className="card-body p-5">

            <form onSubmit={submit} className="d-flex justify-content-center align-items-center mb-4">
              <div className="form-outline flex-fill">
                <input type="text" required minLength={5} id="form2" placeholder='Title' name='title' onChange={onchange} className="form-control my-3" />
                <input type="text" id="form3" required minLength={5} placeholder='Descriptiuon' name='desc' onChange={onchange}  className="form-control my-3" />
                <select name='category' onChange={onchange} className="form-control my-3">
                    <option value={'normal'}>Normal</option>
                    <option value={'emerg'}>Emergency</option>
                    <option value={'personal'}>Presonal</option>
                    <option value={'other'}>Other</option>
                </select>
                <button type="submit" className="btn btn-info " >Add todo item</button>
              </div>
            </form>

     
            <div className="tab-content" style={{"overflow":"scroll", "height":"300px"}} id="ex1-content">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                >
                <Tab eventKey="all" title="All">
                   
                    <AllTodo allTodo={allTodo} checkboxUpdate={checkboxUpdate}/>
                </Tab>
                <Tab eventKey="active" title="Active">
                    <Active allTodo={allTodo} checkboxUpdate={checkboxUpdate}/>
                </Tab>
                <Tab eventKey="completed" title="Completed" >
                    <Completed allTodo={allTodo} checkboxUpdate={checkboxUpdate}/>
                </Tab>
            </Tabs>
              
            </div>
            {/* <!-- Tabs content --> */}

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Todo
