import React from "react"
import { SidebarT } from "./assets/PropsT"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomeT from "./assets/Files/HomeT";
import AssgnT from "./assets/Files/AssignT";
import TTT from "./assets/Files/TimetableT";
import Syllabus from "./assets/Files/Syllabus";
import AttendanceT from "./assets/Files/AttendOverview";
import Attend from "./assets/Files/Attend";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<HomeT/>
      },
      {
        path:"/assgnT",
        element:<AssgnT/>
      },
      {
        path:"/timetableT",
        element:<TTT/>
      },
      {
        path:"/sylT",
        element:<Syllabus/>
      },
      {
        path:"/AttOveT",
        element:<AttendanceT/>
      },
      {
        path:"/Attend",
        element:<Attend/>
      }
    ]
  )
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <SidebarT/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
