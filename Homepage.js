import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Page from './Page';
import Secondpage from './Secondpage';
import Thirdpage from './Thirdpage';


const Homepage = () => {
  return (
    <div>
        <Container fluid>
        <Row>
                    <Col style={{ marginTop: "70px", marginLeft:"70px" }} sm={2}><Page/></Col>
                    <Col sm={6}><Thirdpage/></Col>
                    <Col style={{ marginTop: "70px" }}  ><Secondpage/></Col>
                    </Row>

        </Container>
    </div>
  )
}

export default Homepage

