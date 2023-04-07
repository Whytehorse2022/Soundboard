import React, { useState, useEffect } from 'react';
import { Col, Button, Label, FormGroup, Container } from 'reactstrap';

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url.url),        
      }
    }),
  )

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: false,
      }
    }),
  )

  const toggle = targetIndex => () => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false
      newPlayers[targetIndex].playing = true
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false
    } else {
      newPlayers[targetIndex].playing = true
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause()
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [])

  return [players, toggle]
}

const MultiPlayer = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls)
  //console.log('players');
  //console.log(players);
  return (
    <>      
      {players.map((player, i) => (  
          <Player key={i} player={player} toggle={toggle(i)}/>
      ))}
    </>
  )
}
const Player = ({ player, toggle }) => (  
  <Col xs={12} sm={6} md={4} lg={3}>
    <FormGroup className="d-flex flex-column align-items-center">
      <Label htmlFor={player.url.name} className="pr-2 text-truncate">{player.url.name}</Label>
      <Button  
        onClick={toggle}
        color='primary'
        name={player.url.name}
        className="mr-2"
        style={{ width: '80px' }}
      >
        {player.playing ? 'Pause' : 'Play'}
      </Button>
    </FormGroup>
  </Col>
)


export default MultiPlayer;
