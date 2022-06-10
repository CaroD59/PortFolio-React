import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>Designed and Developed by Caroline Dorchies</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} CD</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='https://github.com/CaroD59'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/dorchies-c/'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
