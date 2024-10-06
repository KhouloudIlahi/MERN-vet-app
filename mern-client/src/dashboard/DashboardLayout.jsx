import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomSidebar from './CustomSidebar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <CustomSidebar /> 
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
