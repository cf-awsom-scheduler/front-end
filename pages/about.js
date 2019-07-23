import React from 'react';
import Container from '../components/container';

const About = () => (
  <Container>
    <div class="flex md:flex-row flex-col">
      <div class=" md:mr-12 flex flex-col items-center mb-10">
        <div>
          <h1 class="font-mono text-3xl tracking-wider mb-8">Joé Jemmely</h1>
        </div>
        <div>
          <img
            src="static/assets/images/joe.png"
            class="mb-8 rounded-full w-3/4 mx-auto w-3/4"
          />
        </div>
        <div>
          <p class="text-center">
            Front-end developer and designer who believes in making things as
            simple as possible but not simpler. Enjoy connecting the dots
            between designers and engineers to see projects come to life.
          </p>
        </div>
      </div>
      <div class="md:mr-10 flex flex-col items-center mb-10">
        <h1 class="font-mono text-3xl tracking-wider mb-8">Morgana Spake</h1>
        <img
          src="static/assets/images/morgana.png"
          class="mb-8 rounded-full w-3/4 mx-auto"
        />
        <p class="text-center">
          Morgana is a full-stack software developer with a background in
          Theatrical Costuming. From costumes to code, she is motivated by the
          pursuit of excellence and the desire to create and build interesting
          things.
        </p>
      </div>
    </div>
    <div class="flex md:flex-row flex-col mb-12">
      <div class="md:mr-12 flex flex-col items-center mb-10">
        <h1 class="font-mono text-3xl tracking-wider mb-8">
          Jesse Van Volkingburg
        </h1>
        <img
          src="static/assets/images/jesse.jpg"
          class="mb-8 rounded-full w-3/4 mx-auto"
        />
        <p class="text-center">
          Jesse is a back-end software developer with a background in
          manufacturing, engineering, customer service, and sales. He enjoys
          learning new things and exploring technologies and programming
          languages.
        </p>
      </div>
      <div class="md:mr-10 flex flex-col items-center">
        <h1 class="font-mono text-3xl tracking-wider mb-8">Bonnie Wang</h1>
        <img
          src="static/assets/images/bonnie.png "
          class="mb-8 rounded-full w-3/4 mx-auto"
        />
        <p class="text-center">
          Software developer and pianist who loves creating and problem solving.
          Currently a piano teacher at AWSOM. Excited to design innovative and
          fun applications to solve real-world problems.
        </p>
      </div>
    </div>
  </Container>
);

export default About;
