import React, { Component } from 'react';
import { Container, Row } from "../style-js/Grid.style";
import Header from "../components/Header";
import styled from "styled-components";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getEmployeeByManager } from "../action/actionCreators";
import EmployeeListByManager from "../components/EmployeeListByManager";

const DivMngList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
`;

class ManagerListEmployee extends Component {
    constructor(props){
        super(props);

        this.state = {
            showLoading: true,
        }
    }

    componentDidMount() {
        this.props.getEmployeeByManager(this.props.match.params.id);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.employee_by_manager !== prevState.employee_by_manager) {
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
                        <EmployeeListByManager employees={this.props.employee_by_manager.employees}/>
                    </DivMngList>

                </Row>
            </Container>
        );
    }
}

ManagerListEmployee.defaultProps = {};

ManagerListEmployee.propTypes = {
    getEmployeeByManager: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        employee_by_manager: state.employee_by_manager
    }
}

const mapDispatchToProps = {
    getEmployeeByManager: getEmployeeByManager
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManagerListEmployee));