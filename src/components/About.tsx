import React from 'react';
import { Card } from 'antd';
import Image from '../images/about.jpg'

const h1Styles: React.CSSProperties = {
    fontSize:'5vw',
    color: 'white'
}

const cardStyles: React.CSSProperties = {
    marginTop: 'calc(5vh + 48px)',
    marginBottom:'5vh',
    width: '40vw'
}

const innerCardStyles: React.CSSProperties = {
    marginTop: '1vh'
}

const containerStyles: React.CSSProperties = {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    height: "calc(100vh - 48px)"
}

const name: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.4)',
    flexBasis: '50vw',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0',
    padding: '0'
}

const contentStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '50vw',
    justifyContent: 'center',
    alignItems: 'center'
}

const About = () => {
    return (
        <div style={containerStyles}>
            <div style={name}>
            <h1 style={h1Styles}>About</h1>
            </div>
            <div style={contentStyles}>
                <Card title={'Matthew Thyng'} bordered={false} style={cardStyles}>
                    <Card type="inner" title="Education" style={innerCardStyles}>
                        Inner Card content
                    </Card>
                    <Card type="inner" title="Acheivements" style={innerCardStyles}>
                        Inner Card content
                    </Card>
                    <Card type="inner" title="Mission" style={innerCardStyles}>
                        Inner Card content
                    </Card>
                </Card>
            </div>
        </div>
    );
  }
  
export default About;
  