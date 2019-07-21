import React from 'react';
import Container from '../components/container';

const About = () => (
  <Container>
    <div class="flex">
      <div class=" mr-12 flex flex-col items-center mb-10">
        <div>
          <h1 class="font-mono text-3xl tracking-wider mb-8">Joé Jemmely</h1>
        </div>
        <div>
          <img
            src="static/assets/images/joe.png"
            class="mb-8 rounded-full w-3/4 mx-auto"
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            augue mauris augue neque gravida in fermentum et sollicitudin. Sit
            amet cursus sit amet dictum sit amet.
          </p>
        </div>
      </div>
      <div class="mr-10 flex flex-col items-center">
        <h1 class="font-mono text-3xl tracking-wider mb-8">Morgana Spake</h1>
        <img
          src="static/assets/images/morgana.png"
          class="mb-8 rounded-full w-3/4 mx-auto"
        />
        <p>
          Morgana is a full-stack software developer with a background in
          Theatrical Costuming. From costumes to code, she is motivated by the
          pursuit of excellence and the desire to create and build interesting
          things.
        </p>
      </div>
    </div>
    <div class="flex mb-12">
      <div class="mr-12 flex flex-col items-center">
        <h1 class="font-mono text-3xl tracking-wider mb-8">
          Jesse Van Volkingburg
        </h1>
        <img
          src="static/assets/images/jesse.jpg"
          class="mb-8 rounded-full w-3/4 mx-auto"
        />
        <p c>
          Jesse is a back-end software developer with a background in
          manufacturing, engineering, customer service, and sales. He enjoys
          learning new things and exploring technologies and programming
          languages.
        </p>
      </div>
      <div class="mr-10 flex flex-col items-center">
        <h1 class="font-mono text-3xl tracking-wider mb-8">Bonnie Wang</h1>
        <img
          src="static/assets/images/bonnie.png "
          class="mb-8 rounded-full w-3/4 mx-auto"
        />
        <p>
          Software developer and pianist who loves creating and problem solving.
          Currently a piano teacher at AWSOM. Excited to design innovative and
          fun applications to solve real-world problems.
        </p>
      </div>
    </div>
  </Container>
);

export default About;
