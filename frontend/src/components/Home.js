// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="p-8">

      {/* Grand Titre */}
      <h1 className="text-5xl font-bold text-center text-blue-400 mb-10">Cyberpsychomot</h1>

      {/* Paragraphe d'introduction sur le site */}
      <section className="mb-16">
        <p className="text-base text-gray-200 mb-6 leading-relaxed">
          Bienvenue sur notre site dédié à la psychomotricité. Ici, vous découvrirez en détail ce qu'est la psychomotricité, 
          une discipline qui aide à harmoniser les fonctions corporelles et psychologiques. Ce site a été conçu pour vous 
          permettre d'approfondir vos connaissances sur les multiples troubles psychomoteurs que cette pratique peut traiter, 
          tels que les troubles de l'attention, les troubles du comportement, les retards de développement, et bien d'autres.
        </p>
        <p className="text-base text-gray-200 mb-6 leading-relaxed">
          Vous trouverez également des informations sur les différents types de séances disponibles, qu'il s'agisse d'un suivi 
          individuel, de séances de groupe, ou d'accompagnement spécifique pour les enfants, les adultes, ou les personnes âgées. 
          Nos psychomotriciennes diplômées élaborent des programmes adaptés à chaque situation, en fonction des besoins et des objectifs thérapeutiques de chacun.
        </p>
        <p className="text-base text-gray-200 mb-6 leading-relaxed">
          Si vous souhaitez passer à l’action, ce site vous offre la possibilité de réserver une séance en ligne, directement avec l'un 
          de nos professionnels. Vous pouvez consulter nos disponibilités, les tarifs des séances, et obtenir des conseils personnalisés 
          en fonction de vos besoins spécifiques. N'hésitez pas à explorer notre glossaire pour en savoir plus sur chaque trouble pris en charge. 
        </p>
        <p className="text-base text-gray-200 mb-6 leading-relaxed">
          Que vous cherchiez à en savoir plus, à réserver une consultation, ou à mieux comprendre les bienfaits de la psychomotricité, 
          ce site est conçu pour vous guider à chaque étape.
        </p>
      </section>

      {/* Explication sur la psychomotricité */}
      <section className="border-t border-gray-600 pt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Qu'est-ce que la psychomotricité ?</h2>
        <p className="text-base text-gray-200 leading-relaxed">
          La psychomotricité est une discipline qui étudie les interactions entre les fonctions motrices et
          psychologiques. Elle se concentre sur la manière dont le corps et l’esprit sont liés, en traitant
          des troubles qui peuvent affecter le développement, le comportement, ou le bien-être émotionnel.
        </p>
      </section>

      {/* Cible de la psychomotricité */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">À qui s'adresse la psychomotricité ?</h2>
        <p className="text-base text-gray-200 leading-relaxed">
          La psychomotricité s’adresse aux enfants, aux adolescents, aux adultes, et même aux personnes âgées
          qui peuvent rencontrer des difficultés dans leur développement moteur, cognitif ou émotionnel. Elle
          est particulièrement utile pour les personnes souffrant de troubles tels que l’autisme, le TDAH, les
          troubles d’apprentissage, et bien d'autres.
        </p>
      </section>

      {/* Pourquoi utiliser la psychomotricité */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Pourquoi utiliser la psychomotricité ?</h2>
        <p className="text-base text-gray-200 leading-relaxed">
          La psychomotricité permet de mieux comprendre comment les actions et les émotions sont liées, et aide
          à restaurer un équilibre global. Elle propose des thérapies personnalisées pour améliorer la qualité
          de vie, en favorisant une meilleure gestion des émotions et une coordination corporelle plus harmonieuse.
        </p>
      </section>
    </div>
  );
};

export default Home;
