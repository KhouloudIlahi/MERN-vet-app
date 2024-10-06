import React, { useState } from 'react';
import './UploadRapport.css';

const EditRapport = () => {
  const [formData, setFormData] = useState({
    adresse: '',
    telephone: '',
    email: '',
    date_de_consultation: '',
    nom_de_veterinaire: '',
    modif_de_la_consultation: '',
    examen_clinique: '',
    traitement: '',
    information_sur_l_animal: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter une logique pour envoyer ces données à votre backend ou à votre base MongoDB ici.
    console.log(formData);
  };

  return (
    <div className="upload-rapport-page">
      <h1 className="title">Modifier un Rapport</h1>
      <form onSubmit={handleSubmit} className="rapport-form">
        <label>Adresse</label>
        <input
          type="text"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          required
        />

        <label>Téléphone</label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Date de Consultation</label>
        <input
          type="date"
          name="date_de_consultation"
          value={formData.date_de_consultation}
          onChange={handleChange}
          required
        />

        <label>Nom du Vétérinaire</label>
        <input
          type="text"
          name="nom_de_veterinaire"
          value={formData.nom_de_veterinaire}
          onChange={handleChange}
          required
        />

        <label>Informations sur l'Animal</label>
        <textarea
          name="information_sur_l_animal"
          value={formData.information_sur_l_animal}
          onChange={handleChange}
          required
        ></textarea>

        <label>Modification de la Consultation</label>
        <input
          type="text"
          name="modif_de_la_consultation"
          value={formData.modif_de_la_consultation}
          onChange={handleChange}
          required
        />

        <label>Examen Clinique</label>
        <textarea
          name="examen_clinique"
          value={formData.examen_clinique}
          onChange={handleChange}
          required
        ></textarea>

        <label>Traitement</label>
        <textarea
          name="traitement"
          value={formData.traitement}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn submit">Ajouter le Rapport</button>
      </form>
    </div>
  );
};

export default EditRapport;
