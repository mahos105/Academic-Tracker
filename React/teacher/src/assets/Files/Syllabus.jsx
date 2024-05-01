import React from "react";
import { SylCard } from "../PropsT";

function Syllabus()
{
    return (
        <div style={{display:"flex", flexDirection:"column",margin:"10px"}}>
            <h1>Operating System</h1>
            <SylCard unitName="OS Overview" unitNum="1" statusColour="green"/>
            <SylCard unitName="Process Scheduling" unitNum="2" statusColour="green"/>
            <SylCard unitName="Memory Management" unitNum="3" statusColour="green"/>
            <SylCard unitName="File Management" unitNum="4" statusColour="green"/>
            <SylCard unitName="I/O Management" unitNum="5" statusColour="red"/>
        </div>
    )
}

export default Syllabus