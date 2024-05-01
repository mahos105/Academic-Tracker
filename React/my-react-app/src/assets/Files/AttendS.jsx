import React from "react";
import ReactDOM from "react-dom"
import { SidebarStd,AttendanceCard,PieChart } from "../Props";

import '../Props.css'
function AttendS()
{
    return (<div style={{}}>
                <AttendanceCard perc="83" subject="Total"/>
                <PieChart />
                <div className="LowerCards" style={{}}>
                    <AttendanceCard perc="79" subject='Maths'/>
                    <AttendanceCard perc="86" subject='DBMS'/>
                    <AttendanceCard perc="84" subject='MP'/>
                    <AttendanceCard perc="90" subject='AOA'/>
                    <AttendanceCard perc="79" subject='Maths'/>
                </div>
            </div>
    )
}
export default AttendS;