// src/components/Glossaire.js
import React from 'react';

const troubles = [
  { nom: 'Dyspraxie', description: 'Trouble affectant la coordination des mouvements.' },
  { nom: 'Dysgraphie', description: 'Difficulté à écrire de manière fluide et lisible.' },
  { nom: 'Dyslexie', description: 'Trouble spécifique de l\'apprentissage de la lecture.' },
  { nom: 'Dysorthographie', description: 'Trouble affectant l\'orthographe et l\'écriture.' },
  { nom: 'Dyscalculie', description: 'Trouble de l\'apprentissage des mathématiques et des chiffres.' },
  { nom: 'TDAH', description: 'Trouble du déficit de l\'attention avec ou sans hyperactivité.' },
  { nom: 'Trouble du spectre autistique (TSA)', description: 'Trouble affectant la communication et les interactions sociales.' },
  { nom: 'Trouble anxieux', description: 'Anxiété excessive et incontrôlable affectant la vie quotidienne.' },
  { nom: 'Trouble oppositionnel avec provocation (TOP)', description: 'Comportement de défiance et d\'opposition aux figures d\'autorité.' },
  { nom: 'Trouble de la régulation sensorielle', description: 'Difficulté à traiter les stimuli sensoriels de manière adéquate.' },
  { nom: 'Trouble du langage', description: 'Difficulté à comprendre ou à produire un langage approprié.' },
  { nom: 'Retard psychomoteur', description: 'Développement plus lent des compétences motrices et cognitives.' },
  { nom: 'Tics', description: 'Mouvements ou sons involontaires et répétitifs.' },
  { nom: 'Hypotonie', description: 'Diminution du tonus musculaire, affectant la posture et la coordination.' },
];

const Glossaire = () => {
  return (
    <div className="p-6 bg-dark-700 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">Glossaire des troubles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {troubles.map((trouble, index) => (
          <div key={index} className="bg-slate-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-200">{trouble.nom}</h2>
            <p className="mt-4 text-gray-400">{trouble.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossaire;
