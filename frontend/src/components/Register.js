import React from 'react'

function Register() {
  return (
    <div className="tab-pane fade active show" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
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
        <input placeholder='Name...' type="text" id="registerName" className="form-control" />
        
      </div>

      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input placeholder='Email....' type="email" id="registerEmail" className="form-control" />
      
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input placeholder='Password...' type="password" id="registerPassword" className="form-control" />
        
      </div>


      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
    </form>
  </div>
  )
}

export default Register
