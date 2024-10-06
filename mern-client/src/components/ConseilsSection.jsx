import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import ConseilsCard from '../home/ConseilsCard';
import { Avatar } from 'flowbite-react';
// Images pour chaque conseil (à remplacer avec vos propres images)
import conseil1Image from '../assets/conseil1.jpg';
import conseil2Image from '../assets/conseil2.png';
import conseil3Image from '../assets/conseil3.png';
import './ConseilsSection.css';


const ConseilsSection = () => {
  const conseils = [
    {
      title: "Alimentation saine pour vos animaux",
      description: "Découvrez les meilleures pratiques alimentaires pour garder vos animaux en bonne santé.",
      image: conseil1Image,
    },
    {
      title: "Prévention des maladies courantes",
      description: "Apprenez comment prévenir les maladies courantes chez vos animaux de compagnie.",
      image: conseil2Image, // Ajoutez une image si nécessaire
    },
    {
      title: "Soins réguliers à domicile",
      description: "Des conseils simples pour entretenir la santé de vos animaux à la maison.",
      image: conseil3Image, // Ajoutez une image si nécessaire
    },
  ];

  return (
    <section className="px-4 lg:px-24 py-16 bg-teal-50">
      <h2 className="text-4xl text-gray-800 font-bold text-center mb-12">
        Nos Conseils Vétérinaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {conseils.map((conseil, index) => (
          <ConseilsCard
            key={index}
            title={conseil.title}
            description={conseil.description}
            image={conseil.image}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="./Conseils" 
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-teal-700 transition-colors duration-300"
        >
          Voir plus de conseils
        </Link>
        
      
      
    
      </div>
      
    </section>
  );
};

export default ConseilsSection;
