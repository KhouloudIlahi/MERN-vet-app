import React, { useState } from 'react'; // Ajout de useState
import { useNavigate } from 'react-router-dom';
import './Sinscrire.css';
import axios from 'axios';
import { MdNoMeals } from 'react-icons/md';

const Sinscrire = () => {
  // Gestion des états pour les champs du formulaire
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données du formulaire à l'API backend
    axios
      .post('http://localhost:5000/Sinscrire', { nom, email, password })
      .then(result => 
        console.log(result))
       
        
      
      .catch(err => console.log(err))
      navigate('/Se_Connecter');
  }

  const navigate = useNavigate(); // Hook pour la navigation

  return (
    <div className="sinscrire-container">
      <h2 className="sinscrire-title">Créer un compte</h2>
      <form className="sinscrire-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom Complet</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Entrez votre nom complet"
            required
            value={nom} // Liaison avec l'état
            onChange={(e) => setNom(e.target.value)} // Mettre à jour l'état
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrez votre adresse email"
            required
            value={email} // Liaison avec l'état
            onChange={(e) => setEmail(e.target.value)} // Mettre à jour l'état
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Créez un mot de passe"
            required
            value={password} // Liaison avec l'état
            onChange={(e) => setPassword(e.target.value)} // Mettre à jour l'état
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmez le mot de passe</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirmez le mot de passe"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn sinscrire-btn">
            S'inscrire
          </button>
          <button
            type="button"
            className="btn seconnecter-btn"
            onClick={() => navigate('/Se_Connecter')} // Redirection vers la page de connexion
          >
            Se Connecter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sinscrire;
