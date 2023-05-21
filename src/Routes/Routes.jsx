import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration ";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UpdateCar from "../Pages/MyToys/UpdateCar";
import AllToys from "../Pages/AllToys/AllToys";
import ViewDetails from "../Pages/Details/ViewDetails";
import SectionOne from "../Pages/Home/Section/SectionOne";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"registration",
            element:<Registration></Registration>
        },
        {
          path:"alltoys",
          element:<AllToys></AllToys>,
          loader:()=>fetch('https://my-toys-server.vercel.app/adding')
        },
        {
            path:"addtoys",
            element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path:"mytoys",
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:"update/:id",
          element:<UpdateCar></UpdateCar>,
          loader:({params}) => fetch(`https://my-toys-server.vercel.app/adding/${params.id}`)
          
        },
        {
          path:"/details/:id",
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) =>fetch(`http://localhost:5000/adding/${params.id}`)
          
        },
        {
          path:"sectionOne",
          element:<SectionOne></SectionOne>
        }
      ]
    },
  ]);

  export default router;