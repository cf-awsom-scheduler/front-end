import React from 'react';
import Head from '../components/head';

const Submission = () => (
  <div>
    <Head title="Submission" />

    <div className="hero">
      <h1 className="title">Thank you for your submission!</h1>
      <h2>
        You will receive an email on a trial lesson date within a few days
      </h2>
      <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/65598150_2367580613479765_8111553811652280320_o.jpg?_nc_cat=107&_nc_oc=AQkVaQ_xujIeCmVZxfIo7KDyuQhdpCUP1g4fOnLi71hgSPzvbdp9ZLhUbEWCvWLWCHg&_nc_ht=scontent-sea1-1.xx&oh=fe6afec775a6c5ecaea67e8db179fa7d&oe=5DED3582" />
    </div>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|PT+Sans&display=swap');
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Open Sans Condensed', sans-serif;

      img {
        width: 32%;
      }

      h2 {
        color: gray;
        margin-bottom: 2em;
      }
    `}</style>
  </div>
);

export default Submission;
