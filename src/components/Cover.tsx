import React, { Key, Component } from 'react';
import { url } from 'inspector';
import Image from '../images/home.jpg'

const showcaseStyles: React.CSSProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
    backgroundImage: `url(${Image})`,
    height: '100vh',
    margin: '0'
  };

const h1Styles: React.CSSProperties = {
    fontSize:'5vw',
    color: 'white'
}

const pStyles: React.CSSProperties = {
    fontSize:'2vw',
    color: 'white'
}

const Cover = () => {
    return (
        <div style={showcaseStyles}>
            <h1 style={h1Styles}>Matthew Thyng</h1>
            <p style={pStyles}>B.S. Software Engineering, Rochester Institute of Technology 2020</p>
        </div>
    );
  }
  
export default Cover;
  