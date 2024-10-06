import { Sidebar as FlowbiteSidebar } from 'flowbite-react'; 
import React from 'react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmLeft, HiArrowSmRight, HiChartPie, HiInbox, HiOutlineAdjustments, HiOutlineCloud, HiOutlineCloudUpload, HiPaperAirplane, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import './CustomSidebar.css'; // Assurez-vous d'importer le fichier CSS

const CustomSidebar = () => { 
  return (
    <FlowbiteSidebar aria-label="Simple and minimal sidebar" className="custom-sidebar"> 
      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="/Medecin/Dashboard" icon={HiChartPie}>
            Dashboard
          </FlowbiteSidebar.Item><br></br>
          <FlowbiteSidebar.Item href="/Medecin/Dashboard/ManageRapport" icon={HiOutlineCloudUpload}>
             gestion des rapports 
          </FlowbiteSidebar.Item><br></br>
          <FlowbiteSidebar.Item href="#" icon={HiInbox}>
            gestion des rendez-vous
          </FlowbiteSidebar.Item><br></br>
          <FlowbiteSidebar.Item href="#" icon={HiUser}>
            gestion des utilisateurs
          </FlowbiteSidebar.Item><br></br>
          <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
           
            Login
          </FlowbiteSidebar.Item><br></br>
          <FlowbiteSidebar.Item href="#" icon={HiArrowSmLeft}>
            Logout 
          </FlowbiteSidebar.Item><br></br>
        </FlowbiteSidebar.ItemGroup>
        <FlowbiteSidebar.ItemGroup>
          
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};

export default CustomSidebar;
