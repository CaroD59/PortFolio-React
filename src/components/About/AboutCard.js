import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Caroline Dorchies </span>
            from <span className='purple'> Douai, France.</span>
            <br />I am a Junior Web and App Developper. I speak French and
            English.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Video Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Reading some books
            </li>
            <li className='about-activity'>
              <ImPointRight /> Coding !
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className='blockquote-footer'>Caroline</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
