import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
        const [cred, setCred] = useState({email:"", password:""})
    let nevigate = useNavigate()

    const submit = async (e)=>{
        e.preventDefault()
        try{
            console.log(cred, "data",process.env.REACT_APP_API_URI)

            const response = await fetch(`${process.env.REACT_APP_API_URI}/api/auth/login`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json',
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                //   'auth-token':token
                },
                body: JSON.stringify({email:cred.email, password:cred.password})
                
              });
               const data = await response.json();
               if(data.success){
                //save token in local 
                localStorage.setItem('token', data.token)
                localStorage.setItem('user_id', data.user_id)
                nevigate("/todo")
            }
            else{
                alert("Login failed as credantial is not correct!")
               }
        }catch(e){
            console.log("connectionm refused server down"+e.message, "danger")
        }

    }

    const onChange = (e)=>{
        setCred({...cred, [e.target.name]:e.target.value})
    }
  return (
    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form onSubmit={submit}>
      <div className="text-center mb-3">
        <p>Sign in with:</p>
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

      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input type="email" name='email'  onChange={onChange} className="form-control" />
        <label className="form-label" htmlFor="loginName">Email or username</label>
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" name='password'  onChange={onChange} className="form-control" />
        <label className="form-label" htmlFor="loginPassword">Password</label>
      </div>

      {/* <!-- 2 column grid layout --> */}
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
      
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          {/* <!-- Simple link --> */}
          <Link to="/">Forgot password?</Link>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

      {/* <!-- Register buttons --> */}
      <div className="text-center">
        <p>Not a member? <Link to="/">Register</Link></p>
      </div>
    </form>
  </div>
  )
}

export default Login
