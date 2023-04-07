//import logo from './logo.svg';
import './App.css';
//import Sound from './sound';
//import MultiPlayer from './MultiPlayer';
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' ;
import 'font-awesome/css/font-awesome.css';
//import { Row, Container, Form, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { useState } from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import MultiPlayer from './MultiPlayer';

function App() {
  const [key, setKey] = useState('current');

  const currentUrls = [
    {url:'http://soundbible.com/grab.php?id=1312&type=mp3', name:'brrt'},
    {url:'http://soundbible.com/grab.php?id=1079&type=mp3', name:'squish'},
    {url:'http://soundbible.com/grab.php?id=2088&type=mp3', name:'long'},
    {url:'http://soundbible.com/grab.php?id=286&type=mp3', name:'Forced'},
    {url:'https://cdn.pixabay.com/download/audio/2021/08/09/audio_e00c3caecf.mp3?filename=bruh-sound-effect-1-6970.mp3', name:'Bruh!'},
    {url:'https://www.myinstants.com/media/sounds/vine-boom.mp3', name: 'Vine Boom'}
  ];

  const newUrls = [
    {url:'http://soundbible.com/grab.php?id=1964&type=mp3', name:'Small Crowd Applause'},
    {url:'http://soundbible.com/grab.php?id=716&type=mp3', name:'Drum Roll'},
    {url:'https://www.myinstants.com/media/sounds/url_dj_don_demarco_sound_without_the_horngrabfrom.mp3', name:'Don Demarco'},
    {url:'https://cdn.pixabay.com/download/audio/2022/03/15/audio_b2ffca7e0f.mp3?filename=taperewind-93168.mp3', name:'Rewind'},
    {url:'http://soundbible.com/grab.php?id=2216&type=mp3', name:'alert'},
    {url:'http://soundbible.com/grab.php?id=2215&type=mp3', name:'emergency'}
  ];

  return (
    <div className="App">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <Row className="align-items-start">
          <Col>
            <h1>
              <i className="fas fa-spin"><i className="fa-solid fa-yin-yang"></i></i>
              <i className="fa-solid"> Soundboard </i>
              <i className="fas fa-spin"><i className="fa-solid fa-yin-yang"></i></i>
            </h1>
          </Col>
        </Row>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="current" title="Fart Board">
            <Container className="d-flex flex-column align-items-center justify-content-center">
              <h2>Fart Sounds</h2>
              <Row className="align-items-center">
                <MultiPlayer
                  className='fas fa-solid'
                  urls={currentUrls}
                />
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="new" title="Live Stream Board">
            <Container className="d-flex flex-column align-items-center justify-content-center">
              <h2>Live Stream Sounds</h2>
              <Row className="align-items-center">
                <MultiPlayer
                  className='fas fa-solid'
                  urls={newUrls}
                />
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
