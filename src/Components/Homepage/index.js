import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from "react-bootstrap";
import logo from "../../img/logo.png"


function Homepage()
{
    return (
        <Container className="vh-100"  fluid style={{background:"linear-gradient(white, black)"}}>
            <Row>
                <Col xs={7}>
                    <p >
                        Sparkle
                    </p>
                </Col>
                 <Col>
                        <br/>
                        <br/>
                        <br/>
                     <br/>
                     <br/>
                     <br/>
                      <img src={logo} alt="logo" />
                 </Col>
                <Col>

                </Col>
            </Row>
        </Container>
)
}
export default Homepage