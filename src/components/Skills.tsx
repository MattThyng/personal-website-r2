import React from 'react';
import { Card } from 'antd';
// pull from linkedin?

const skillsStyles: React.CSSProperties = {
    marginTop: '5vh',
    marginLeft: '20vw',
    marginRight: '20vw'
}

const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
}

const cardStyles: React.CSSProperties = {
    width: '60vw',
    marginTop: '3vh'
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
        <div style={skillsStyles}>
            {skillsData.map(item => (
                <Card title={item.title} style={cardStyles}>
                    {item.content.map(name => (
                        <Card.Grid style={gridStyle}>{name}</Card.Grid>
                    ))}
                </Card>

            ))}
        </div>
    )
}

export default Skills