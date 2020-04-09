import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const infoStyles: React.CSSProperties = {
    marginTop: '5vh',
    marginLeft: '20vw',
    marginRight: '20vw',
    marginBottom: '5vh'
}

const cardStyles: React.CSSProperties = {
    width: '60vw',
    marginTop: '3vh'
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
        <div>
            <div style={infoStyles}>
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