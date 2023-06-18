import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import logo from "../../img/logo.png";
import CloseButton from 'react-bootstrap/CloseButton';

let cards=[];
function Build()
{
    return (
        <div>

            <Container className="vh-100"  fluid style={{background:"linear-gradient(180deg, #B8FFFD 0%, #FFFFFF 100%)"}}>

        <Row>
            <Col xs={4}>
            </Col>
            <Col xs={4}>
                <p style={{fontSize:"5vh",fontWeight:"700",textAlign:"center"}}>
                    Story Board
                </p>
            </Col>
            <Col xs={4}>
            </Col>
        </Row>
        <Row style={{}}>
            <Col xs={2}>
            </Col>
            <Col className="mx-auto">
                <div className="rounded p-5 bg-info  bg-opacity-10"
                     style={{height:"60vh",

                            }}
                >
                    <Row>
                        <Col xs={1}>

                        </Col>
                           <button type="button" className="btn btn-primary btn-block">

                               Gesture <br/> Driven#1</button>
                        <Col xs={1}>

                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <button type="button" className="btn btn-primary btn-block">Gesture <br/> Driven#2</button>
                        <Col xs={1}>

                        </Col>
                    </Row>
                    <br/>
                        <Row>
                            <Col xs={1}>

                            </Col>
                            <button type="button" className="btn btn-primary btn-block">Gesture <br/> Driven#3</button>
                            <Col xs={1}>

                            </Col>
                        </Row>
                </div>

            </Col>
            <Col xs={2}>
            </Col>
        </Row>
        <Row>
            <Col xs={3}>
            </Col>
            <Col style={{textAlign:"center",padding:"5vh"}}>
                <Row>
                    <Col xs={3}>
                    </Col>
                    <Col xs={3}>
                        <Link to="/choose">
                <button type="button" className="btn btn-primary btn-lg">Add Events</button>
                        </Link>
                    </Col>
                    <Col xs={3}>
                        <Link to="/about">
                          <button type="button" className="btn btn-info btn-lg" style={{opacity:"50%"}}>Start Presentation</button>
                        </Link>
                    </Col>
                    <Col xs={3}>
                    </Col>
                </Row>
            </Col>
            <Col xs={3}>
            </Col>
        </Row>
    </Container>
        </div>
    )
}

export default Build;