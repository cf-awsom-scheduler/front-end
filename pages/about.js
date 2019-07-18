import React from 'react';

const About = () => (
  <>
    <div className="devsContainer">
      <div>
        <div className="devContainer">
          <h1>Joé Jemmely</h1>
          <img src="https://via.placeholder.com/150" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            augue mauris augue neque gravida in fermentum et sollicitudin. Sit
            amet cursus sit amet dictum sit amet.
          </p>
        </div>
        <div className="devContainer">
          <h1>Morgana Spake</h1>
          <img src="https://via.placeholder.com/150" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            augue mauris augue neque gravida in fermentum et sollicitudin. Sit
            amet cursus sit amet dictum sit amet.
          </p>
        </div>
      </div>
      <div>
        <div className="devContainer">
          <h1>Jesse Van Volkingburg</h1>
          <img src="https://via.placeholder.com/150" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            augue mauris augue neque gravida in fermentum et sollicitudin. Sit
            amet cursus sit amet dictum sit amet.
          </p>
        </div>
        <div className="devContainer">
          <h1>Bonnie Wang</h1>
          <img src="https://via.placeholder.com/150" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            augue mauris augue neque gravida in fermentum et sollicitudin. Sit
            amet cursus sit amet dictum sit amet.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .devsContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .devContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 4em;
      }
      p {
        width: 60%;
      }
      h1 {
        margin-bottom: 2em;
      }
      img {
        margin-bottom: 2em;
        border-radius: 1em;
      }
    `}</style>
  </>
);

export default About;
