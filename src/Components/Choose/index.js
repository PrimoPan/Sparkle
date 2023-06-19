import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "_react-router-dom@6.13.0@react-router-dom";

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
            <Row>
                <Col xs={3}>
                </Col>
                <Col style={{textAlign:"center",padding:"5vh"}}>
                    <Row>

                        <Col xs={4}>
                            <Link to="/addgesture">
                                <button type="button" className="btn btn-primary btn-lg">Motion Driven</button>
                            </Link>
                        </Col>
                        <Col xs={4}>
                            <Link to="/choose">
                                <button type="button" className="btn btn-info btn-lg" style={{opacity:"50%"}}>Audio Driven</button>
                            </Link>
                        </Col>
                        <Col xs={4}>
                            <Link to="/choose">
                                <button type="button" className="btn btn-primary btn-lg">Event Driven</button>
                            </Link>
                        </Col>

                    </Row>
                </Col>
                <Col xs={3}>
                </Col>
            </Row>
            </Container>
    )

}

export default Choose;