// AppointmentSection.jsx

import React from 'react';
import './AppointmentSection.css'; 

const AppointmentSection = () => {
  return (
    <section className="appointment-section">
      <h2>Planifiez Votre Rendez-vous</h2>
      <p>Choisissez un créneau pour réserver votre rendez-vous en ligne en toute simplicité.</p>
      <a href="/sinscrire" className="appointment-button">Réservez Maintenant</a>
      </section>
  );
};

export default AppointmentSection;
