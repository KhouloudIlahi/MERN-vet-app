import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ManageRapport.css';

const ManageRapport = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="rapport-page">
      

      <h1 className="title">Gestion des Rapports</h1>
      
      <div className="rapport-grid">
        <div className="rapport-card">
          <p>Rapport 1</p>
          <div className="actions">
            <button className="btn edit" onClick={() => navigate('../EditRapport')}>Modifier</button>
            <button className="btn delete" onClick={() => navigate('../DeleteRapport')}>Supprimer</button>
          </div>
        </div>

        <div className="rapport-card">
          <p>Rapport 2</p>
          <div className="actions">
            <button className="btn edit" onClick={() => navigate('../EditRapport')}>Modifier</button>
            <button className="btn delete" onClick={() => navigate('../DeleteRapport')}>Supprimer</button>
          </div>
        </div>

        {/* Ajouter plus de rapports ici */}
      </div>

      <button className="btn add" onClick={() => navigate('../UploadRapport')}>Ajouter un rapport</button>
    </div>
  );
};

export default ManageRapport;
