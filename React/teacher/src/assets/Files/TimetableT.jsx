import React from "react";

function TTT()
{
    return(<div style={{margin:"10px"}}>
        <section className="TTwithTopBar">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" id="TeacherName">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-1">Schedule</span>
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
</div>
    )
}

export default TTT