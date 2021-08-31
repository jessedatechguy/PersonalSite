import React from "react";
import './HomePage.css';
import jesse from './assets/jesse.jpg';

const HomePage = () => {
  return (
    <div>
      <img className='ImageSize' src={jesse} alt="this is what i look like" />
      <h1> Jesse Garcia</h1>
      <p>
        {" "}
        <em>Recent college Graduate </em>{" "}
      </p>
      <p>
        {" "}
        I Recently graduated college. I like to play warzone I am ok at it. I
        also enjoy helping people people PCs. I built 2 pc for myself. I built
        one with the following{" "}
        <a href="https://pcpartpicker.com/list/Jxwkp2" target="_blank" rel="noreferrer">
          specs
        </a>
        . I then resued these parts and built another pc with a mix. I use one
        for streaming when i play warzone or super smash and then I use the
        other to stream.
      </p>
      <p>
        I also enjoy riding my motorcycle. It is a very small bike but i enjoy
        working on it, cleaning it and just fixing it up. I am not a very good
        mechanic but I do work on it on my own. I am learning how to take care
        of it. I also want to start doing wheelies it is difficult I am too
        afraid of falling. I need to protect my bike with stunt bars and then I
        will start wheelies.
      </p>

      <hr />

      <h3>Education history</h3>
      <ul>
        <li> Humboldt State Univeristy </li>
      </ul>
    </div>
  );
};

export default HomePage;
