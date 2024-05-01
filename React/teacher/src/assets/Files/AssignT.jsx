import React from "react";

function AssgnT()
{
    return(
        <div>
            <div className="Page" style={{display:"flex", flexDirection:"row"}}>
  <div className="card" style={{ width: "510px"}}>
    <div className="card-body"  style={{display:"flex",flexDirection:"column"}}>
      <h5 className="card-title">Assign</h5>
      <hr />
      {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
      <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
      {/* <a href="./assign.html" className="card-link">Card link</a> */}
      <div className="greenButtons">
        <input type="url" name="txt" id="" />
        {/* <a href="./assign.html"><button type="button" className="btn btn-outline-success" style={{ width: "465px" }}>Assign</button></a> */}
        <button href="#" type="button" className="btn btn-outline-success">Assign</button>
        {/* <a href="#" type="button" className="btn btn-outline-success">Another link</a> */}
      </div>
    </div>
  </div>
  <div className="card" style={{ width: "510px" }}>
    <div className="card-body">
      <h5 className="card-title">Check</h5>
      <hr />
      {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
      {/* <a href="#" className="card-link">Card link</a> */}
      <div className="greenButtons">
        <button href="#" type="button" id="checkButton" className="btn btn-outline-success">Check</button>
        {/* <a href="#" className="card-link">Another link</a> */}
        {/* <button href="#" type="button" className="btn btn-outline-success">Success</button> */}
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default AssgnT