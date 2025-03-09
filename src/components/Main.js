import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Main.css';

function Main() {
  return (
    <div className='main-container'>
      <video src="/videos/homevideo.mp4" autoPlay loop muted/>
      <h1 className="uppercase-text">Transform Your Space with Timeless Furniture!</h1>
      <br></br>
      <div className='main-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
        GET STARTED
        </Button>

        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
        GET STARTED
        </Button>

      </div>
    </div>
  )
}

export default Main;
