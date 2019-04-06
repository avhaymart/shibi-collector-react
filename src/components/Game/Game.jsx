import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import './Game.css'

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pointsLeft:Math.floor(Math.random() * (120 - 19) + 19),
            shibeValues:Array.from({length: 4}, () => Math.floor(Math.random() * (12 - 1) + 1))
            
        }
    }

    handleInstructionsClick = e => {
        this.props.handleView(0);
    }


    handleShibiClick = e => {
        console.log(e.target.getAttribute("value"))
    }

    regenPoints = () => {
        this.setState({pointsLeft:Math.floor(Math.random() * (120 - 19) + 19)})
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center mt-3 mb-5">Collect just the right amount of shibies</h2>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <h4>Shibi points left:</h4>
                        <p id="pointsLeft">{this.state.pointsLeft}</p>
                    </Col>
                    <Col>
                        <p id="wins">Wins: 0</p>
                        <p id="losses">Losses: 0</p>
                    </Col>
                    <Col>
                        <h4>Your points:</h4>
                        <p id="yourPoints">0</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    {this.props.images.map((x, index) => (
                        <Col xs="12" sm="6" md="3" className="hover-tip p-0 text-center mb-5 pb-1">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip>
                                        {x.name} shibi
                                    </Tooltip>
                                }>
                                <img onClick={(e) => this.handleShibiClick(e)} data-value={this.state.shibeValues[index]} className="shibe rounded-circle img-fluid" id={x.name} src={x.url} alt={x.name} />
                            </OverlayTrigger>
                        </Col>
                    ))}
                </Row>

                <footer className="page-footer p-4 mt-4 sticky">
                    <Button variant="primary" id="restart" className="mr-2">Restart</Button>
                    <Button variant="primary" onClick={this.handleInstructionsClick}>Instructions</Button>
                </footer>
            </Container>
            )
    }
}

export default Game;