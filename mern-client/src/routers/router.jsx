import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Sinscrire from "../components/Sinscrire";
import Home from "../home/home";
import Client from "../client/client";
import Se_Connecter from "../components/Se_Connecter";

import ConseilsSection from "../components/ConseilsSection";
import Dashboard from "../dashboard/Dashboard";
import Conseils from "../components/Conseils";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadRapport from "../dashboard/UploadRapport";
import ManageRapport from "../dashboard/ManageRapport";
import EditRapport from "../dashboard/EditRapport";
import DeleteRapport from "../dashboard/DeleteRapport";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [   {
            
        path:"/",
        element:<Home/>
     },
    
    
     {
        path: "/client",
        element: <Client/>
    },
    {
        path:"/Sinscrire",
        element:<Sinscrire/>
    
    },
    {
        path:"/ConseilsSection",
        element:<ConseilsSection/>
    },
    {
      path:"/Conseils",
      element:<Conseils/>
  },
  {
    path:"/Se_Connecter",
    element:<Se_Connecter/>
},
{
  path:"/Medecin/Dashboard",
  element:<DashboardLayout/>,
  children: [
    {
    path:"",
    element:<Dashboard/>
    
  },
  
  {
    path:"ManageRapport",
    element:<ManageRapport/>,
  },{
      
        path:"UploadRapport",
    element:<UploadRapport/>
      },
      {
        path:"EditRapport",
        element:<EditRapport/>
      },
      {
        path:"DeleteRapport",
        element:<DeleteRapport/>
      },

    
  
  
  ]
},
]
}, 
]);

  export default router;