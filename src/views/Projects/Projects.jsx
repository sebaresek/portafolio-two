import projImg2 from "../../Assets/pokemon.png";
import projImg3 from "../../Assets/prestamos.png";
import projImg1 from "../../Assets/rickandmorty.png";
import React from 'react';
import './Projects.css'
import Project from './Project';

export const Projects = () => {
  const projects = [
    {
      title: 'Proyecto Universitario',
      description: 'Desarrollo & Diseño',
      imgUrl: projImg1,
      link: 'https://rick-and-morty-tau-ten.vercel.app/',
    },
    {
      title: 'Proyecto Universitario',
      description: 'Desarrollo & Diseño',
      imgUrl: projImg2,
      link: 'https://pokemons-rose.vercel.app/',
    },
    {
      title: 'Inicio de Negocio',
      description: 'Desarrollo & Diseño',
      imgUrl: projImg3,
      link: 'https://www.pretamos.online/',
    },
  ];

  return (
    <section className="container-projects" id="proyectos">
      <h2>Proyectos</h2>
      <br />
      <h5>En esta sección, encontrarás una selección de proyectos en los que he trabajado. Cada proyecto representa una combinación de diseño y desarrollo, y he puesto mi pasión y habilidades en ellos. Explora los diferentes proyectos en las pestañas a continuación y descubre más sobre mi trabajo. </h5>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

