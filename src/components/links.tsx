import React from 'react';
import { Card } from 'antd';
import Image from '../images/skills.jpg'
import linkedin from '../images/linkedin-logo.png'
import gmail from '../images/gmail-logo.png'
import github from '../images/GitHub-logo.png'
import Meta from 'antd/lib/card/Meta';

const h1Styles: React.CSSProperties = {
    fontSize:'5vw',
    color: 'white'
}

const cardStyles: React.CSSProperties = {
    width: 'calc((12vw + 12vh)/2)',
    marginLeft: '2vw',
    marginRight: '2vw'
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
    flexDirection: 'row',
    flexBasis: '50vw',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
}

const Links = () => {
    return (
        <div style={containerStyles}>
            <div style={name}>
                <h1 style={h1Styles}>Links</h1>
            </div>
            <div style={contentStyles}>
                <a href='https://www.linkedin.com/in/matthew-thyng/'>
                <Card
                    hoverable
                    style={cardStyles}
                    cover={<img alt="example" src={linkedin} />}
                >
                    <Meta title="Linkedin" description="https://www.linkedin.com/in/matthew-thyng/" />
                </Card>
                </a>
                <a href="mailto: mattthyng@gmail.com">
                <Card
                    hoverable
                    style={cardStyles}
                    cover={<img alt="example" src={gmail} />}
                >
                    <Meta title="Email" description="mattthyng@gmail.com" />
                </Card>
                </a>
                <a href='https://github.com/MattThyng'>
                <Card
                    hoverable
                    style={cardStyles}
                    cover={<img alt="example" src={github} />}
                >
                    <Meta title="GitHub" description="https://github.com/MattThyng" />
                </Card>
                </a>
            </div>
        </div>
    )
}

export default Links