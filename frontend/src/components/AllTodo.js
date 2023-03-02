import React from 'react'

function AllTodo() {
  return (
<div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
    aria-labelledby="ex1-tab-1">
    <ul className="list-group mb-0">
        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
        style={{"backgroundColor": "#f4f6f7"}}>
        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
        <s>Cras justo odio</s>
        </li>
  
        <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded"
        style={{"backgroundColor": "#f4f6f7"}}>
        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
        Vestibulum at eros
        </li>
    </ul>
</div>
  )
}

export default AllTodo
