import React from 'react';
import './Se_Connecter.css';

const Se_Connecter = () => {
  return (
    <div className="se-connecter-container">
      <h2 className="title">Se Connecter</h2>
      <form className="se-connecter-form">
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" placeholder="Entrez votre e-mail" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" placeholder="Entrez votre mot de passe" />
        </div>
        <button type="submit" className="btn">Connexion</button>
        <p className="forgot-password">Mot de passe oublié ?</p>
      </form>
    </div>
  );
};

export default Se_Connecter;
