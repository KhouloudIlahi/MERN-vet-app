import { useState } from 'react';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from 'flowbite-react';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  const hideNavbarRoutes = ['/Medecin/Dashboard', '/Medecin/Dashboard/UploadRapport','/Medecin/Dashboard/ManageRapport','/Medecin/Dashboard/EditRapport','/Medecin/Dashboard/EditRapport/:id','/Medecin/Dashboard/DeleteRapport'];

  return (
    
    <>
      {/* Affiche la navbar seulement si la route actuelle ne correspond pas à celles spécifiées */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
