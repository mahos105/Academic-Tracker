import React from "react";
import ReactDOM from "react-dom";
import { Card,SlidingText} from "../Props";
import Aplus from './Images/Aplus.png'
import Studious from './Images/Studious.png'
import Tickmarks from './Images/Tickmarks.png'
import Redpin from './Images/Redpin.png'
function Home()
{
    return (
        <div> 
        <SlidingText message='College to go autonomous since next semester'/>
        <div style={{display:'flex',flexDirection:'row',marginLeft:'5px'}}>
        <Card btn1="Lecture/s" btn2="Exam/s" src={Redpin}/>
        <Card btn1="Percentage" btn2="Total Exam" src={Aplus} />
        <Card btn1="Lectures" btn2="Exams" src={Tickmarks}/>
        <Card btn1="Active" btn2="All" src={Studious}/>
      </div>
      </div>
    )
}
export default Home;