import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SidebarStd,Card,SlidingText } from './assets/Props';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AttendS from './assets/Files/AttendS';
import Home from './assets/Files/Home';
import Result from './assets/Files/Result';
import TimeTable from './assets/Files/Timetable';
import Assignments from './assets/Files/Assgn';
import Syl from './assets/Files/CompSyl';
import NotMain from './assets/Files/Notice';
import January from './assets/Files/Months/Jan';
import Februrary from './assets/Files/Months/Feb';
import './App.css'

function App(){
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/attends",
      element:<AttendS/>
    },
    {
      path:"/result",
      element:<Result/>
    },
    {
      path:"/timetable",
      element:<TimeTable/>
    },
    {
      path:"/assgn",
      element:<Assignments/>
    },
    {
      path:"/syl",
      element:<Syl/>
    },
    {
      path:"/notice",
      element:<NotMain/>,
      children:[{
        path:"/notice/January",
        element:<January/>
      },
      {
        path:"/notice/February",
        element:<Februrary/>
      }]
    }
  ])
  return ( <div>
  <div style={{display:'flex', flexDirection:'row'}}>
      <SidebarStd/>
      <RouterProvider router={router}/>
    </div>
    </div>
  )
}

export {App};