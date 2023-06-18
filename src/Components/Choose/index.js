import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Choose()
{
    return (

        <Container className="vh-100"  fluid style={{background:"linear-gradient(180deg, #B8FFFD 0%, #FFFFFF 100%)"}}>
                <Row>
                    <Col xs={4}>
                    </Col>
                    <Col xs={4}>
                        <p style={{fontSize:"5vh",fontWeight:"700",textAlign:"center"}}>
                           Add Events
                        </p>
                    </Col>
                    <Col xs={4}>
                    </Col>
                </Row>
            </Container>
    )

}

export default Choose;