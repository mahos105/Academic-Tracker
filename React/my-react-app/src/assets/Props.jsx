import React from "react";
import "./Props.css"
import { RouterProvider,BrowserRouter,Routes,Route } from 'react-router-dom';
import { Link ,Outlet} from 'react-router-dom';
import AttendS from "./Files/AttendS";
import January from "./Files/Months/Jan";

function Button(props)
{ return (
        <li>
            <a href="" className="nav-link link-body-emphasis btn">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            <a href={props.link} className="btn btn-warning" id="trialOne">{props.writing}</a>
            </a>
        </li>
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

function SlidingText(props)
{
  return (<div className='marquee'> 
    <marquee direction="left" behavior="slide">{props.message}</marquee>
  </div>)
}

function Card(props)
{
    return (
        <div className="card" style={{ width: '18rem', height:'300px'}}>
          <img src={props.src} className="card-img-top" alt={props.alt} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <a href="#" className="btn btn-primary">{props.btn1}</a>
            <a href="#" className="btn btn-danger">{props.btn2}</a>
          </div>
        </div>
      );
    
}

function PieChart()
{
  return (
    <div id="pieblock">
      <div className="piechart"></div> 
    </div>
  )
}

function New(){
  return (<div className="feature col">
  <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-calendar-date" viewBox="0 0 16 16">
      <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"></path>
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
    </svg>
  </div>
  <h3 className="fs-2 text-body-emphasis">Alumni scholarship notice</h3>
  <p>Please fill the attached notice from alumni regarding award of scholarship to economically backward students </p>
  <a href="https://fragnel.edu.in/attachments/article/535/Notice_Alumni%20Scholarship.pdf" className="icon-link">
    Click here
    <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
  </a>
</div>)
}

function MarksTable()
{
  return (<div>
    <div className="ResultTabS1S">
  <h1 className="result">Results</h1>
  <div className="S1SMainPage">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="./S1S.html">Sem 1</a>
            <a className="nav-link" href="./S2S.html">Sem 2</a>
            {/*<a className="nav-link" href="./S3S.html">Sem 3</a>*/}
          </div>
          <div className="dropdown py-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="testselect">
              Select test
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="./S1U1.html">Unit test 1</a></li>
              <li><a className="dropdown-item" href="./S1U2.html">Unit test 2</a></li>
              <li><a className="dropdown-item" href="./S1S.html">Semester exam</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div id="marks">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Subject</th>
            <th scope="col">Marks obtained</th>
            <th scope="col">Max Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Physics</td>
            <td className="phy">80</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Chemistry</td>
            <td className="chem">80</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td className="math">Maths</td>
            <td>80</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td className="bee">BEE</td>
            <td>80</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td className="mech">Mechanics</td>
            <td>80</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  </div>)
}


 // Assuming LogOut component is defined in another file

function SidebarStd() {
  return (<div>
    <aside className="left-side sidebar-offcanvas">
      <div className="d-flexone flex-column flex-shrink-0 p-3 bg-body-" style={{ width: '280px', height:'750px'}}>
        < a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" />
          <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
            <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
          </svg></a>
          <span className="fs-3">Academic Tracker</span>
      
        <ul className="nav nav-pills flex-column mb-auto">
            <Button writing="Attendance" link="/attends"/>
            <Button writing="Assignments" link="/assgn"/>
            <Button writing="Result" link="/result"/>
            <Button writing="Timetable" link="/timetable"/>
            <Button writing="Notice" link="/notice"/>
            <Button  writing="Completed Syllabus" link="/syl"/>
            <LogOut />
        </ul>
      </div>
    </aside>
    </div>
  );
}


function Timetable() {
  return (
    <div className="TABLE">
      <table border="5" cellspacing="0" align="center">
        <tbody>
          <tr>
            <td align="center" height="50" width="100">
              <br />
              <b>Day/Period</b>
              <br />
            </td>
            <td align="center" height="50" width="100">
              <b>I<br />8:45-9:45</b>
            </td>
            <td align="center" height="50" width="100">
              <b>II<br />9:45-10:45</b>
            </td>
            <td align="center" height="50" width="100">
              <b>III<br />11:00-12:00</b>
            </td>
            <td align="center" height="50" width="100">
              <b>12:00-1:00</b>
            </td>
            <td align="center" height="50" width="100">
              <b>IV<br />1:00-1:30</b>
            </td>
            <td align="center" height="50" width="100">
              <b>V<br />1:30-2:30</b>
            </td>
            <td align="center" height="50" width="100">
              <b>VI<br />2:20-3:30</b>
            </td>
            <td align="center" height="50" width="100">
              <b>VII<br />3:30-4:30</b>
            </td>
          </tr>
          <tr>
            <td align="center" height="50">
              <b>Monday</b>
            </td>
            <td align="center" height="50">DS</td>
            <td align="center" height="50">Mat</td>
            <td align="center" height="50">DLCOA</td>
            <td rowspan="6" align="center" height="50">
              <h2>L<br />U<br />N<br />C<br />H</h2>
            </td>
            <td colspan="3" align="center" height="50">LAB</td>
            <td align="center" height="50">DSGT</td>
          </tr>
          <tr>
            <td align="center" height="50">
              <b>Tuesday</b>
            </td>
            <td colspan="3" align="center" height="50">LAB</td>
            <td align="center" height="50">DS</td>
            <td align="center" height="50">DLCOA</td>
            <td align="center" height="50">Mat</td>
            <td align="center" height="50">LAB</td>
          </tr>
          <tr>
            <td align="center" height="50">
              <b>Wednesday</b>
            </td>
            <td align="center" height="50">Mat</td>
            <td align="center" height="50">DSGT</td>
            <td align="center" height="50">DS</td>
            <td align="center" height="50">DLCOA</td>
            <td colspan="3" align="center" height="50">LIBRARY</td>
          </tr>
          <tr>
            <td align="center" height="50">
              <b>Thursday</b>
            </td>
            <td align="center" height="50">DSGT</td>
            <td align="center" height="50">DS</td>
            <td align="center" height="50">DLCOA</td>
            <td colspan="3" align="center" height="50">LAB</td>
            <td align="center" height="50">Mat</td>
          </tr>
          <tr>
            <td align="center" height="50">
              <b>Friday</b>
            </td>
            <td colspan="3" align="center" height="50">LAB</td>
            <td align="center" height="50">Mat</td>
            <td align="center" height="50">DLCOA</td>
            <td align="center" height="50">DS</td>
            <td align="center" height="50">DSGT</td>
          </tr>
          <tr>
            <td align="center" height="50">
              <b>Saturday</b>
            </td>
            <td align="center" height="50">DS</td>
            <td align="center" height="50">DLCOA</td>
            <td align="center" height="50">Mat</td>
            <td colspan="3" align="center" height="50">LAB</td>
            <td align="center" height="50">TUTORIAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



function AssignedComponent(props) {
  return (
    <div style={{ minHeight: '120px', border:'1px solid black', minWidth:'50px'}}>
      <div className="collapse collapse-vertical" id="collapseAssigned">
        <div className="card card-body" style={{ width: '200px', height: '200px' }}>
          <h2>{props.title}: 3</h2>
        </div>
      </div>
    </div>
  );
}


function AttendanceCard(props)
{
  return(
    <div className="card bg-primary bg-gradient text-white mx-3" style={{ width: '10rem' }}>
    <div className="p-2">
      <p className="card-text">
        <h1 style={{ fontSize: '2rem' }}>{props.perc}%</h1>
        <h2 style={{ fontSize: '1rem' }}>{props.subject}</h2>
      </p>
    </div>
  </div>
  )
}

function Topping() {
  return (
    <div id="Topping" className="d-flex flex-wrap justify-content-center px-0 mb-4 border-bottom bg- text-white" >
      <a href="notice.html" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-1">Notice board</span>
      </a>
      <ul className="nav nav-pills">
        <Link to='January'><li className="nav-item fs-4"><a href="./january.html" className="nav-link">January</a></li></Link>
        <Link to='February'><li className="nav-item fs-4"><a href="./february.html" className="nav-link">February</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./march.html" className="nav-link">March</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./april.html" className="nav-link">April</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./may.html" className="nav-link">May</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./june.html" className="nav-link">June</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./july.html" className="nav-link">July</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./august.html" className="nav-link">August</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./september.html" className="nav-link">September</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./october.html" className="nav-link">October</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./november.html" className="nav-link">November</a></li></Link>
        <Link ><li className="nav-item fs-4"><a href="./december.html" className="nav-link">December</a></li></Link>
        <Outlet/>
      </ul>
    </div>
  );
}

function Notices(props)
{
  return(
    <div>
      <div className="feature col">
  <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-calendar-date" viewBox="0 0 16 16">
      <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"></path>
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
    </svg>
  </div>
  <h3 className="fs-2 text-body-emphasis">{props.noticeTitle}</h3>
  <p>{props.noticeName}</p>
  <a href="#" className="icon-link">
    Click here
    <svg className="bi">
      <use xlinkHref="#chevron-right"></use>
    </svg>
  </a>
</div>

    </div>
  )
}
function MonthNameTitle(props)
{
  return(
      <h1 className="pb-2 border-bottom">Important notices({props.name})</h1>
  )
}



function RadioButtonWithLabel(props) {
  return (
    <div className="position-relative" style={{border:'1px solid black', background:'white', width:'500px' ,marginTop:'10px'}}>
      <input 
        className="form-check-input position-absolute top-50 end-0 me-3 fs-5" 
        type="radio" 
        name="listGroupRadioGrid" 
        id="listGroupRadioGrid2" 
        value=""
      />
      <label className="list-group-item py-3 pe-5" htmlFor="listGroupRadioGrid2">
        <strong className="fw-semibold">{props.subject}</strong>
        <button id="btnimp" type="button" className="btn btn-primary btn-md" style={{marginLeft:'250px',position:'fixed'}}>
          <a href={props.downlink} style={{color: 'white'}}>Download</a>
        </button>
      </label>
    </div>
  );
}


export {MonthNameTitle,Notices,SidebarStd ,Card,RadioButtonWithLabel, PieChart,AssignedComponent,SlidingText,AttendanceCard,MarksTable,Timetable,Topping};

