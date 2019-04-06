import React from 'react';
import { Jumbotron, Container, Row, Col,Button } from 'react-bootstrap';
import './Splash.css'

class Splash extends React.Component {

    handleClick = e => {
        this.props.handleView(1);
    }

    render() {
        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-5 text-center mb-4">Shibe Collector</h1>
                            <p className="lead"> You will be given a random number at the start of the game. There are four shibis below. By clicking
                                                    on a shibi you will add a specific amount of points to your total score.
                        <br></br>
                                <br></br> You win the game by matching your total score to random number, you lose the game if your total
                                score goes above the random number.
                        <br></br>
                                <br></br> The value of each shibi in hidden from you until you click on it.
                        <br></br>
                                <br></br> Each time when the game starts, the game will change the values of each shibi.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-4">
                            <Button variant="dark" onClick={this.handleClick} className="align-bottom">Start</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default Splash;