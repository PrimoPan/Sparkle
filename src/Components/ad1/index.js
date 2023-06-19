import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "_react-router-dom@6.13.0@react-router-dom";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Flu from "./differenct.png"
function Adone()
{
    console.log("render")
    return (
        <Container className="vh-100"  fluid style={{background:"linear-gradient(180deg, #B8FFFD 0%, #FFFFFF 100%)"}}>

            <Row>
                <Col style={{height:"5vh"}}>

                </Col>
            </Row>
            <Row style={{top:"20%"}}>
                <Col xs={2}>

                </Col>
                <Col xs={8}>
                    <div style={{

                        height: "70vh",
                        top:"20%",
                        borderRadius: "42px",
                        backgroundColor: 'white'
                    }}>
                        <Row>
                            <Col xs={2}>

                            </Col>
                            <Col>
                                <p style={{fontFamily: 'Arial',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '36px',
                                    lineHeight: '41px',
                                    textAlign: 'center',

                                    color:' #4AABFE'}}>
                                    Motion Driven
                                </p>
                            </Col>
                            <Col xs={2}>

                            </Col>

                        </Row>
                        <Row>
                            <Col xs={1}>

                            </Col>
                            <Col xs={4}>
                                <br/>
                                <br/>
                                <Form.Select size='lg' aria-label="Default select example">
                                    <option>Action Type</option>
                                    <option value="1">Fist</option>
                                    <option value="2">Victory</option>
                                    <option value="3">One Finger Point Up</option>
                                    <option value="4">Thumb Up</option>
                                    <option value="5">Thumb Down</option>
                                    <option value="6">Wave Palm</option>
                                    <option value="7">Horned Hand</option>
                                </Form.Select>
                                <br/>
                                <br/>
                                <br/>
                                <Form.Select size='lg' aria-label="Default select example">
                                    <option>Choose Position</option>
                                    <option value="1">Follow Your Right Hand</option>
                                    <option value="2">Follow Your Left Hand</option>
                                    <option value="3">Fix On Your Right Hand</option>
                                    <option value="4">Fix on Your Left Hand</option>
                                    <option value="5">Upon Your Head</option>
                                    <option value="6">On The Left Part Of Canvas</option>
                                    <option value="7">On The Right Part of Canvas</option>
                                </Form.Select>
                                <p style={{textAlign:"center"}}>Or</p>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="PositionX(px)"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="PositionX(px)" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="PositionY(px)"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="PositionY(px)" />
                                </FloatingLabel>
                            </Col>
                            <Col xs={1}>

                            </Col>
                            <Col xs={4}>
                                <Card style={{ width: '18rem' ,textAlign:"center"}}>
                                    <Row>
                                        <Col xs={2}></Col>
                                        <Col>
                                            <br/>
                                            <img src={Flu}
                                                 style={{textAlign:"center",height:"100px",width:"100px",border:"2px solid gray"}}/>
                                        </Col>
                                        <Col xs={2}></Col>
                                    </Row>
                                    <Card.Body>
                                        <Card.Title>Upload Asset</Card.Title>

                                        <Card.Text>
                                            You can upload Asset, such as pictures, videos or 3d-models from your own laptop
                                        </Card.Text>

                                        <Button variant="primary">Upload</Button>
                                    </Card.Body>
                                </Card>
                                <br/>
                                <Form.Select size='lg' aria-label="Default select example">
                                    <option>When To Destory</option>
                                    <option value="1">Fist</option>
                                    <option value="2">Victory</option>
                                    <option value="3">One Finger Point Up</option>
                                    <option value="4">Thumb Up</option>
                                    <option value="5">Thumb Down</option>
                                    <option value="6">Wave Palm</option>
                                    <option value="7">Horned Hand</option>
                                </Form.Select>
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
                            <Link to="/build">
                                <button type="button" className="btn btn-primary btn-lg">Add It</button>
                            </Link>
                        </Col>
                        <Col xs={3}>
                            <Link to="/build">
                                <button type="button" className="btn btn-info btn-lg" style={{opacity:"50%"}}>Remove it</button>
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
    )
}

export default Adone