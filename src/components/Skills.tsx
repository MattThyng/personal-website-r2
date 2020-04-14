import React from 'react';
import { Card } from 'antd';
import Image from '../images/skills.jpg'
// pull from linkedin?

const h1Styles: React.CSSProperties = {
    fontSize:'5vw',
    color: 'white'
}

const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
}

const cardStyles: React.CSSProperties = {
    width: '40vw',
    marginTop: '5vh',
    marginBottom: '5vh'
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

const skillsData = [
    {
        title: 'Languages',
        content: ['Java', 'SQL', 'JavaScript']
    },
    {
        title: 'Frameworks',
        content: ['React']
    },
    {
        title: 'Tools',
        content: ['AWS']
    },
    {
        title: 'Other',
        content: ['Node.js']
    }
]

const Skills = () => {
    return (
        <div style={containerStyles}>
            <div style={name}>
            <h1 style={h1Styles}>Skills</h1>
            </div>
            <div style={contentStyles}>
            {skillsData.map(item => (
                <Card title={item.title} style={cardStyles}>
                    {item.content.map(name => (
                        <Card.Grid style={gridStyle}>{name}</Card.Grid>
                    ))}
                </Card>

            ))}
            </div>
        </div>
    )
}

export default Skills