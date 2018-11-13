import React, { Component } from 'react';
import { Container, Row } from "../style-js/Grid.style";
import Header from "../components/Header";
import styled from "styled-components";
import ManagerList from "../components/ManagerList";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getManagers } from "../action/actionCreators";
import { HeaderText } from "../style-js/shared.style";

const DivMngList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
`;

class Manager extends Component {
    constructor(props){
        super(props);

        this.state = {
            showLoading: true,
        }
    }

    componentDidMount() {
        this.props.getManagers();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.managers !== prevState.managers) {
            return {
                showLoading: false,
            };
        }

        return null;
    }

    render() {
        if(this.state.showLoading) return <h1>Loading...</h1>

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <DivMngList>
                        <HeaderText>รายชื่อผู้จัดการ</HeaderText>
                        <ManagerList managers={this.props.managers.manager}/>
                    </DivMngList>

                </Row>
            </Container>
        );
    }
}

Manager.defaultProps = {};

Manager.propTypes = {
    getManagers: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        managers: state.managers
    }
}

const mapDispatchToProps = {
    getManagers: getManagers
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Manager));