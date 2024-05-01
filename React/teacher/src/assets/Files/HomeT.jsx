import React from "react";
import { Cards } from "../PropsT";
import "/src/assets/PropsT.css"
function HomeT()
{
    return (
        <div style={{display:'flex',flexDirection:'row',marginLeft:'5px'}}>
            <Cards src="" alt="" btn1="Lectures" btn2="Exams"/>
            <Cards src="" alt="" btn1="Percentage" btn2="Total Exams"/>
            <Cards src="" alt="" btn1="Active" btn2="All"/>
        </div>
    )
}

export default HomeT