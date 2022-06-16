import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiInsomnia,
} from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFilezilla,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FiFigma />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFilezilla />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNpm />
      </Col>
    </Row>
  );
}

export default Toolstack;
