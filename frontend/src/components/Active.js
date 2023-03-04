import React from 'react'

function Active({allTodo,checkboxUpdate}) {
    allTodo = allTodo.filter((todo)=>todo.status!==true)
    const change = (data,status)=>{
        const updatedData = {...data,status:status}
        checkboxUpdate(updatedData)


    }
  return (
    <>

    <div className="tab-pane fade show active" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
    <ul className="list-group mb-0">
    {!allTodo.length?"No any Active task yet! Please add new one":""}
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
                
                </div>
                </li>
                )
            })
        }
    
    </ul>
  </div>
  </>
  )
}

export default Active
