import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [cred, setCred] = useState({name:"",email:"", password:""})
    let nevigate = useNavigate()
  
    const submit = async (e)=>{
        e.preventDefault()
        try{

            const response = await fetch(`http://localhost:3000/api/auth/createuser`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json',
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                //   'auth-token':token
                },
                body: JSON.stringify({name:cred.name ,email:cred.email, password:cred.password})
                
              });
               const data = await response.json();
               if(data.success){
                //save token in local 
                // localStorage.setItem('token', token)
                alert("Register success!")
                nevigate("/todo")
               }
               else{
                alert("Use with same email is already exist!")
               }
        }catch(e){
            console.log("connectionm refused server down", e.message)
        }

    }

    const onChange = (e)=>{
        setCred({...cred, [e.target.name]:e.target.value})
    }

  return (
    <div className="tab-pane fade active show" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form onSubmit={submit}>
      <div className="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>

      <p className="text-center">or:</p>

      {/* <!-- Name input --> */}
      <div className="form-outline mb-4">
        <input placeholder='Name...' required type="text" id="registerName" name='name' onChange={onChange} className="form-control" />
        
      </div>

      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input placeholder='Email....' required type="email" name='email' id="registerEmail" onChange={onChange} className="form-control" />
      
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input placeholder='Password...' required type="password" name='password' id="registerPassword" onChange={onChange} className="form-control" />
        
      </div>


      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
    </form>
  </div>
  )
}

export default Register
