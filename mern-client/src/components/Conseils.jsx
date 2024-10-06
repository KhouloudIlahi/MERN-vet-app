import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous que vous avez installé react-router-dom
import './ConseilsPage.css'; // Importez le fichier CSS pour la mise en page

// Images pour chaque conseil (à remplacer avec vos propres images)
import conseil1Image from '../assets/conseil1.jpg';
import conseil2Image from '../assets/conseil2.png';
import conseil3Image from '../assets/conseil3.png';
import conseil4Image from '../assets/conseil4.jpg';
import conseil5Image from '../assets/conseil5.jpg';
import conseil6Image from '../assets/conseil6.jpg';

const conseils = [
  {
    title: "Comment organiser un départ en vacances quand on a des animaux de compagnie ?",
    description: "our partir en vacances avec votre animal, assurez-vous de choisir des lieux « Pet Friendly » et de consulter un vétérinaire pour mettre à jour ses vaccins et obtenir un passeport si nécessaire. En voiture, utilisez une caisse de transport ou un harnais pour assurer la sécurité de votre animal, et faites des pauses régulières pour lui permettre de se détendre. Si vous ne pouvez pas emmener votre compagnon, envisagez de le confier à une pension, à un petsitter à domicile, ou à une personne de confiance pour assurer son bien-être durant votre absence.",
    image: conseil1Image,
  },
  {
    title: "Quelle race de lapin adopter ?",
    description: "Les lapins, classés en races naines, petites, moyennes, grandes et à fourrure, varient considérablement en taille et en besoins spécifiques. Les lapins nains et petits sont généralement robustes mais peuvent avoir des problèmes dentaires, tandis que les grandes races nécessitent beaucoup d'espace et de liberté. Les lapins à fourrure, bien que nécessitant un entretien quotidien de leur pelage, sont souvent très affectueux et s'épanouissent dans un environnement enrichissant.",
    image: conseil2Image,
  },
  {
    title: "Petit guide de l’alimentation pour chat ",
    description: "Pour assurer le bien-être de votre chat, il est essentiel d'adapter son alimentation à chaque étape de sa vie, en offrant du lait maternisé aux chatons et en privilégiant un régime riche en protéines pour les adultes. Évitez les aliments toxiques comme les oignons et le chocolat, et offrez des friandises en modération. Assurez-vous que l’eau est toujours disponible et consultez régulièrement votre vétérinaire pour des conseils adaptés.",
    image: conseil3Image,
  },
  {
    title: "Apprendre la propreté à un chaton",
    description: "Pour apprendre la propreté à un chaton, commencez par le confiner dans une pièce spécifique avec une litière adaptée, en le plaçant régulièrement dedans, surtout après les repas ou les siestes. Assurez-vous que la litière est placée dans un endroit calme et accessible, et évitez les éléments qui pourraient le détourner de son usage. Si un chat adulte commence à faire ses besoins en dehors de la litière, vérifiez la propreté de la litière, considérez les changements dans son environnement, et consultez un vétérinaire si le problème persiste.",
    image: conseil4Image,
  },
  {
    title: "Les bases de l’éducation d’un chien",
    description: "L'éducation d'un chiot commence dès son arrivée et repose sur la patience, la rigueur et le soin. En lui apprenant son nom, à se laisser manipuler, à rester seul, et à marcher en laisse, vous établissez les bases d'un comportement équilibré. Récompensez-le généreusement pour ses bonnes actions et utilisez des méthodes non punitives pour corriger les erreurs, en restant toujours cohérent dans vos réactions pour qu'il comprenne ce qui est attendu.",
    image: conseil5Image,
  },
  {
    title: "Adopter un reptile ? ",
    description: "Adopter un reptile nécessite une préparation rigoureuse, comprenant des connaissances spécifiques et un investissement en temps et budget pour leur habitat et alimentation. Les espèces comme le gecko, la tortue Hermann, et le serpent des blés sont souvent recommandées pour les débutants en raison de leur comportement et de leurs besoins relativement simples. Assurez-vous de bien aménager leur terrarium selon leurs besoins et consultez régulièrement un vétérinaire spécialisé pour garantir leur santé optimale.",
    image: conseil6Image,
  },
  // Ajoutez plus de conseils ici
];

const ConseilsPage = () => {
  return (
    <div className="conseils-page">
      <h1 className="title">Tous nos Conseils</h1>
      <div className="conseils-grid">
        {conseils.map((conseil, index) => (
          <div className="conseil-card" key={index}>
            <img src={conseil.image} alt={conseil.title} />
            <div className="conseil-content">
              <h2>{conseil.title}</h2>
              <p>{conseil.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConseilsPage;
