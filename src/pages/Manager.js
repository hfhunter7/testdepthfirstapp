import React, { Component } from 'react';
import { Container, Row } from "../style-js/Grid.style";
import Header from "../components/Header";

class Manager extends Component {
    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <h1>Manage Page</h1>

                </Row>
            </Container>
        );
    }
}

Manager.defaultProps = {};

export default Manager;
