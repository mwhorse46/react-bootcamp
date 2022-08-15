import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link, Outlet } from 'react-router-dom';




const About = ({company}) => {
    return (
        <Container className='mt-5'>
            <Row >
                <Col md='4'>
                    <ListGroup>
                        <ListGroup.Item>
                            <Link to='company'>Company</Link>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <Link to='founder'>Founder</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md='8'>
                    <h2>About Component</h2>
                    <h3>Company name: {company}</h3>

                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default About;