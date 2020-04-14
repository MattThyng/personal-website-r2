import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Image from '../images/work.jpg'

const h1Styles: React.CSSProperties = {
    fontSize:'5vw',
    color: 'white'
}

const cardStyles: React.CSSProperties = {
    marginTop: 'calc(5vh + 48px)',
    marginBottom:'5vh',
    width: '40vw'
}

const titleAvatarStyles: React.CSSProperties = {
    minWidth: '64px'
}

const titleStyles: React.CSSProperties = {
    height: '70px'
}

const titleTextStyles: React.CSSProperties = {
    textAlign: 'left',
    marginTop: '14px'
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


const title = (companyName: string) => {
    return (
        <div style={titleStyles}>
            <Row>
                <Col span={2} style={{minWidth: '64px'}}>
                    <Avatar size={64} icon={<UserOutlined/>} style={titleAvatarStyles}/>
                </Col>
                <Col span={2} style = {{paddingLeft: '5px'}}>
                    <div style={titleTextStyles}>{companyName}</div>
                </Col>
            </Row>
        </div>
    )
}
const Experience = () => {
    return (
        <div style={containerStyles}>
            <div style={name}>
            <h1 style={h1Styles}>Experience</h1>
            </div>
            <div style={contentStyles}>
                <Card title={title('Kayak')} bordered={false} style={cardStyles}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title={title('RIT')} bordered={false} style={cardStyles}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title={title('BAE Systems')} bordered={false} style={cardStyles}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        </div>
    );
}

export default Experience;