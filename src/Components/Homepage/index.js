import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../../img/logo.png"
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


function Homepage()
{
    return (
        <Container className="vh-100"  fluid style={{background:"linear-gradient(180deg, #B8FFFD 0%, #FFFFFF 100%)"}}>
            <Row>
                <Col xs={7}>
                    <p style={{ position:"relative",
                                top:"20%",
                                left:"24%",
                                fontWeight:"700",
                                fontSize:"8vh"}}>

                        A Revolution
                        <br/>
                        For Online
                        <br/>
                         Presentation
                        <br/>
                        <p style={{fontSize:"3vh"}}>
                            AR based online presentation
                        </p>
                        <Link to="/st">
                        <Button variant="primary" size="lg"
                                style={
                                    {
                                        position:"absolute", fontFamily: 'Arial',
                                        fontStyle:'normal',
                                        fontWeight:'700',
                                        fontSize:'3vh',
                                        lineHeight:'41px',
                                    }
                                }>

                                    Start a Speech!
                        </Button>
                        </Link>
                    </p>

                </Col>
                 <Col>
                      <img src={logo} style={
                          { height:"60vh",
                            position:"relative",
                            top:'20vh',
                              left:"25%"
                            } }
                           alt="logo" />
                 </Col>
                <Col>

                </Col>
            </Row>
        </Container>
)
}
export default Homepage