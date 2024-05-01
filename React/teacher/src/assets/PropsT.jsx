import React from "react";
import './PropsT.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
function Button(props)
{ return (
        
            <a href="" className="nav-link link-body-emphasis btn">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            <a href={props.link} className="btn btn-warning" id="trialOne">{props.writing}</a>
            </a>
    )
}

function Cards(props)
{
  return(
    <div className="card" style={{ width: "18rem" }}>
  <img src={props.src} className="card-img-top" alt={props.alt} />
  <div className="card-body">
    <h5 className="card-title">Academic</h5>
    <a href="#" className="btn btn-primary">{props.btn1}</a>
    <a href="#" className="btn btn-danger">{props.btn2}</a>
  </div>
</div>

  )
}

function LogOut()
{
    return (
        <a href="#" className="nav-link link-body-emphasis">
        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
        <a href="#" className="btn btn-danger" id="trialOne" style={{ textAlign: 'left', width: '150px', height: '50px', marginTop: '15px',backgroundColor:"red"}}>Log-Out</a>
        </a>
    )
}

function SidebarT()
{
    return(
        <div>
<aside className="left-side sidebar-offcanvas">
  <div className="d-flexone flex-column flex-shrink-0 p-3 bg-body-" style={{ width: "280px" }}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
        <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
        <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
      </svg>
      <span className="fs-3">Academic Tracker<h6 id="txt">Teacher</h6></span>
    </a>
    <hr />

        <Button link="/assgnT" writing="Assignments"/>
        <Button link="" writing="Lesson-Plans"/>
        <Button link="/timetableT" writing="Schedule"/>
        <Button link="/sylT" writing="Syllabus"/>
        <Button link="/AttOveT" writing="Attendance-Overview"/>
        <Button link="/Attend" writing="Attendance"/>
        <LogOut/>
    <hr />
  </div>
</aside>
        </div>
    )
}

function TimetableT()
{
    return(
        <section className="TTwithTopBar">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" id="TeacherName">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-1">Schedule</span>
    </a>
    <a href="#" className="nav-link link-body-emphasis">
      <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
      <a href="../../LoginPage.html" className="btn btn-danger" style={{ textAlign: "left", width: "150px", height: "50px", margin: "15px" }}>Log-Out</a>
    </a>
  </header>
  <div>
    <table border="5" cellspacing="0" align="center" id="table1">
      {/* <caption>Timetable</caption> */}
      <tr>
        <td align="center" height="50" width="100"><br /><b></b></td>
        <td align="center" height="50" width="100"><b>8:45-9:45</b></td>
        <td align="center" height="50" width="100"><b>9:45-10:45</b></td>
        <td align="center" height="50" width="100"><b>10:45-11:00</b></td>
        <td align="center" height="50" width="100"><b>11:00-12:00</b></td>
        <td align="center" height="50" width="100"><b>12:00-1:00</b></td>
        <td align="center" height="50" width="100"><b>1:00-1:30</b></td>
        <td align="center" height="50" width="100"><b>1:30-2:30</b></td>
        <td align="center" height="50" width="100"><b>2:20-3:30</b></td>
      </tr>
      <tr>
        <td align="center" height="50"><b>Monday</b></td>
        <td align="center" height="50">DS<br />606</td>
        <td align="center" height="50">AIML<br />701</td>
        <td rowspan="6" align="center" height="50"><h2>B<br />R<br />E<br />A<br />K</h2></td>
        <td align="center" height="50">DBMS<br />611</td>
        <td align="center" height="50">DBMS<br />611</td>
        <td rowspan="6" align="center" height="50"><h2>L<br />U<br />N<br />C<br />H</h2></td>
        <td align="center" height="50">CN<br />801</td>
      </tr>
      <tr>
        <td align="center" height="50"><b>Tuesday</b></td>
        <td colSpan="3" align="center" height="50">LAB</td>
        <td align="center" height="50">DS<br />606</td>
        <td align="center" height="50">DBMS<br />611</td>
        <td align="center" height="50">AIML<br />710</td>
        <td align="center" height="50">LAB</td>
      </tr>
      <tr>
        <td align="center" height="50"><b>Wednesday</b></td>
        <td align="center" height="50">AIML<br />710</td>
        <td align="center" height="50">CN<br />801</td>
        <td align="center" height="50">Lab<br />604</td>
        <td align="center" height="50">DBMS<br />611</td>
        <td colSpan="3" align="center" height="50">LAB</td>
      </tr>
      <tr>
        <td align="center" height="50"><b>Thursday</b></td>
        <td align="center" height="50">CN<br />801</td>
        <td align="center" height="50">Lab<br />604</td>
        <td align="center" height="50">DBMS<br />611</td>
        <td align="center" height="50">DBMS<br />611</td>
        <td align="center" height="50">AIML<br />710</td>
      </tr>
      <tr>
        <td align="center" height="50"><b>Friday</b></td>
        <td colSpan="3" align="center" height="50">LAB</td>
        <td align="center" height="50">AIML<br />710</td>
        <td align="center" height="50">DBMS<br />611</td>
        <td align="center" height="50">Lab<br />604</td>
        <td align="center" height="50">CN<br />801</td>
      </tr>
    </table>
  </div>
</section>

    )
}

function SylCard(props)
{
    return(
        <div className="card" style={{ width: "70rem" }}>
<div >
  <div className="card-header"style={{paddingLeft:"10px"}}>
    Unit {props.unitNum}
    <svg style={{ backgroundColor: props.statusColour, marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={props.statusColour} className="bi bi-app" viewBox="0 0 16 16">
      <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
    </svg>
    </div>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.unitName}</li>
  </ul>
</div>

    )
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
function Attendance()
{
    return(
<div className="card">
  <div className="card-header">
    <h2>Attendance</h2>
  </div>
  <div className="card-body">
    <p className="card-text">
      <div className="drops">
        {/* <input type="text" name="Year" id=""><h5>Year</h5>
        <input type="text" name="Class" id=""><h5>Class</h5> */}
        <select name="" id="">
          <option value="selected">Select year</option>
          <option value="FE">First Year</option>
          <option value="SE">Second Year</option>
          <option value="TE">Third Year</option>
          <option value="BE">Fourth Year</option>
        </select>
        <select name="" id="">
          <option value="selected">Select class</option>
          <option value="ECS">ECS</option>
          <option value="CmpsA">Comps A</option>
          <option value="CmpsB">Comps B</option>
          <option value="Aids">AIDS</option>
          <option value="Mech">Mech</option>
        </select>
        <input type="date" name="" id="" /><h5>Date</h5>
      </div>
    </p>
    <a href="http://127.0.0.1:5000" className="btn btn-primary">Attendance</a>
  </div>
</div>

)
}

function AttendOver()
{
    return(<div className="border">
        <main className="main">
  <h2 className="border-bottom">Teacher's Dashboard</h2>
  <div className="container mt-5">
    <h3 className="mb-3">Attendance Checker</h3>
    <form id="attendanceForm">
      <div className="mb-3">
        <label htmlFor="percentage" className="form-label">Enter Percentage:</label>
        <input type="number" className="form-control" id="percentage" name="percentage" required />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Select Subject:</label>
        <select className="form-select" id="subject" name="subject">
          <option value="attendance">Total</option>
          <option value="Maths">Maths</option>
          <option value="Phys">Phys</option>
          <option value="Chem">Chem</option>
          <option value="EG">EG</option>
          <option value="CP">CP</option>
          <option value="PCE">PCE</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Check</button>
    </form>
    <div id="results" className="mt-4">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody id="resultsTableBody">
        </tbody>
      </table>
    </div>
  </div>
</main>
</div>
    )
}

export {Cards,SidebarT,TimetableT,SylCard,AttendOver,Attendance}