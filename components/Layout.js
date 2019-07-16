import React from 'react';
import Nav from './nav';

export default function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
      <style jsx>{``}</style>
    </>
  );
}
