import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import vault from '../../Assets/Projects/vault.png';
import bioshock from '../../Assets/Projects/bioshock.png';
import compass from '../../Assets/Projects/compass.png';
import farm from '../../Assets/Projects/farm.png';
import poke from '../../Assets/Projects/poke.png';
import usg from '../../Assets/Projects/usg.png';
import wishlist from '../../Assets/Projects/wishlist.png';
import adopte from '../../Assets/Projects/adopte.png';
import react from '../../Assets/Projects/react.png';
import pip from '../../Assets/Projects/pip.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title='ReactJS Quiz'
              description='I have created a ReactJS Quiz made with ReactJS. I used hooks.'
              link='https://github.com/CaroD59/ReactJS-Quiz'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={pip}
              isBlog={false}
              title='FallOut Pip-Boy'
              description='I have created a CSS project, it is a Pip-Boy, a famous item from FallOut game.'
              link='https://github.com/CaroD59/Pip-Boy'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={vault}
              isBlog={false}
              title='Vault-Tec'
              description='Personal and fictional project based on the FallOut universe. This is a Laravel project for my App Developer Training in order to learn this framework. There will be an authentication system, a contact form, a shop, and a selection of anti-nuclear shelters.'
              link='https://github.com/NicoP59/fallout'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bioshock}
              isBlog={false}
              title='Bioshock'
              description='Personal and fictitious project on the Bioshock universe, made in PHP, with a contact form, an authentication system and a blog.'
              link='https://github.com/CaroD59/Bioshock'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={compass}
              isBlog={false}
              title='Compass Education Limited'
              description='Professional PHP project for Compass Education Limited with an authentication and user management system, a blog and a contact form. Compass is a company based in Hong-Kong which offers online foreign language courses. A next version will be made in Laravel.'
              link='https://comedultd.com/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={poke}
              isBlog={false}
              title='Poke-Book'
              description='Poke-Book is a small project made in ReactJS for managing note taking.'
              link='https://github.com/CaroD59/Poke-Book'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={usg}
              isBlog={false}
              title='Ultimate-Superheros-Game'
              description='
              USG is a ReactJS project made during my training as a Web Developer at the Wild Code School. It is a card game with the theme of superheroes.'
              link='https://github.com/CaroD59/Ultimate-Superheros-Game'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={wishlist}
              isBlog={false}
              title='React Whislist'
              description="It's a small ReactJS and ExpressJS project to work on the React CRUD. It's a wishlist with a dynamic add, modify and delete system."
              link='https://github.com/CaroD59/WishList'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={farm}
              isBlog={false}
              title='Farm Connect'
              description='This is a project made in ReactJS and ExpressJS for the company Farm-Connect, a project I did at the Wild Code School. The website makes it possible to group agricultural applications in order to facilitate the monitoring of the work of farmers.'
              link='https://github.com/CaroD59/FarmConnect_Front'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={adopte}
              isBlog={false}
              title="Adopte un Dev'"
              description='Adopt a Dev is the first Wild Code School project that I did as a Web Developer. Made in HTML, CSS, Javascript, it allows recruiters to view profiles of web developers and to be able to contact them for possible hiring.'
              link='https://carod59.github.io/adopte-un-dev/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
