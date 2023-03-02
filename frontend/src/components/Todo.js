import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Active from './Active';
import AllTodo from './AllTodo';
import Completed from './Completed';
function Todo() {
    const [key, setKey] = useState('all');
  return (
    <>



<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card">
          <div className="card-body p-5">

            <form className="d-flex justify-content-center align-items-center mb-4">
              <div className="form-outline flex-fill">
                <input type="text" id="form2" placeholder='Title' className="form-control my-3" />
                <input type="text" id="form3" placeholder='Descriptiuon' className="form-control my-3" />
                <select className="form-control my-3">
                    <option>Normal</option>
                    <option>fjjs</option>
                    <option>fjjs</option>
                    <option>fjjs</option>
                </select>
                <button type="submit" className="btn btn-info ">Add todo item</button>
              </div>
            </form>

     
            <div className="tab-content" id="ex1-content">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                >
                <Tab eventKey="all" title="All">
                    <AllTodo />
                </Tab>
                <Tab eventKey="active" title="Active">
                    <Active />
                </Tab>
                <Tab eventKey="completed" title="Completed" >
                    <Completed />
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
