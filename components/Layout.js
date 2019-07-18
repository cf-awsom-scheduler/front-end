import React from 'react';
import Nav from './nav';

export default function Layout(props) {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
      <style jsx global>
        {`
          main {
            margin-left: 16px;
            margin-right: 16px;
          }
        `}
      </style>
    </>
  );
}
