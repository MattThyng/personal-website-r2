import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';

const infoStyles: React.CSSProperties = {
    marginTop: '5vh',
    marginLeft: '20vw',
    marginRight: '20vw'
}

const cardStyles: React.CSSProperties = {
    textAlign: 'center'
}

const About = () => {
    return (
        <div style={infoStyles}>
            <Row gutter={50}>
                <Col span={8}>
                    <Card title="About Me" bordered={false} style={cardStyles} >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce vitae pulvinar augue. Nunc auctor, orci venenatis consectetur
                        ultricies, enim mi fermentum dolor, ac bibendum turpis nibh eu est.
                        Vestibulum tristique felis eu blandit molestie. Maecenas odio nibh,
                        consequat sed sem non, convallis sollicitudin lectus. Nullam elementum
                        consequat diam, in vulputate enim mattis ac. Donec gravida turpis libero,
                        sed interdum nulla commodo nec. Mauris vitae purus id mi auctor mattis.
                        Phasellus efficitur justo in nisl finibus pulvinar. Morbi eget pellentesque libero.
                        Mauris pretium nunc sit amet tellus aliquet, in venenatis eros rhoncus.</p>
                        <p>Quisque nec risus risus. Integer sagittis justo id nunc congue fringilla.
                        Donec vitae ipsum eget purus eleifend venenatis vel at purus. Mauris
                        porttitor accumsan sodales. Fusce id lorem eu libero aliquet eleifend.
                        Aliquam tempor purus vitae odio vehicula, eu pharetra est semper. Nullam
                        fringilla mauris vitae turpis finibus auctor. Nullam vel rutrum leo. Donec
                        dapibus vel neque aliquet efficitur.</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Education" bordered={false}>
                    Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Acheivements" bordered={false}>
                    Card content
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
  
export default About;
  