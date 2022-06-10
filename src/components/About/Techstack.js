import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiJavascript1, DiReact, DiNodejs, DiGit } from 'react-icons/di';
import { FaLaravel, FaPhp } from 'react-icons/fa';
import { SiMysql, SiExpress, SiPhpmyadmin } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPhpmyadmin />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
