import React from "react";
import { Card } from "../../../../my-react-app/src/assets/Props";
import "/src/assets/PropsT.css"
import Redpin from "../../../../my-react-app/src/assets/Files/Images/Redpin.png"
import Aplus from "../../../../my-react-app/src/assets/Files/Images/Aplus.png"
import Studious from "../../../../my-react-app/src/assets/Files/Images/Studious.png"
function HomeT()
{
    return (
        <div style={{display:'flex',flexDirection:'row',marginLeft:'5px'}}>
            <Card src={Redpin} alt="" btn1="Lectures" btn2="Exams"/>
            <Card src={Aplus} alt="" btn1="Percentage" btn2="Total Exams"/>
            <Card src={Studious} alt="" btn1="Active" btn2="All"/>
        </div>
    )
}

export default HomeT