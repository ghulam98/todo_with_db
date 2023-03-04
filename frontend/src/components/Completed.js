import React from 'react'

function Completed({allTodo, checkboxUpdate}) {
    allTodo = allTodo.filter((todo)=>todo.status!==false)
    const change = (data,status)=>{
        const updatedData = {...data,status:status}
        checkboxUpdate(updatedData)


    }
  return (
<div className="tab-pane fade show active" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                <ul className="list-group mb-0">
                {!allTodo.length?"No any completed task yet! Please Complete list and chill bebo.":""}
        {
            allTodo.map((todo)=>{
                
                return (
                
                <li  key={todo._id} className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                style={{"backgroundColor": "#f4f6f7"}}>
                <div >
                <input className="form-check-input me-2" type="checkbox" onChange={(e)=>change(todo,e.target.checked)} checked={!todo.status?false:true} value="" aria-label="..."  />
                {todo.status?
                <>
                <h6><s>{todo.title}</s></h6>
                <p><s>{todo.desc} </s> </p>
                </> :
                <>
                <h6>{todo.title}</h6>
                <p>{todo.desc}  </p>
                </>
                }
                <button className='btn btn-sm btn-danger'>Delete</button>
                </div>
                </li>
                )
            })
        }
    
          
                </ul>
              </div>
  )
}

export default Completed
