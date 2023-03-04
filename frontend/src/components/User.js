import React, { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';

function User() {
    let navigate = useNavigate()
    let [key, setKey] = useState('login')

useEffect(()=>{
    if(localStorage.getItem('token'))
    {
        navigate('/todo')   
    }
},[])
  return (
    
    <div className='container '>
        
        <div className='text-justify text-center my-3'><h3>First Authenticate yourself</h3></div>
      <hr/>

<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
<li className="nav-item" role="presentation">
<Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3"
    >
    <Tab eventKey="login" title="Login">
        <Login />
    </Tab>
    <Tab eventKey="active" title="Register">
        <Register />
    </Tab>
</Tabs>
            </li>
</ul>
{/* <!-- Pills navs -->

<!-- Pills content --> */}
<div className="tab-content">


</div>
{/* <!-- Pills content --> */}
    </div>
  )
}

export default User
