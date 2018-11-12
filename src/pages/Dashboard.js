import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import { Container, Row } from '../style-js/Grid.style'
import styled from 'styled-components'
import EmployeeList from "../components/EmployeeList";
import { getEmployees } from "../action/actionCreators";

const DivEmpList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
`;

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            showLoading: true
        }
    }

    componentDidMount() {
        this.props.getEmployees();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.employees !== prevState.employees) {
            return {
                showLoading: false,
            };
        }

        return null;
    }

    render() {
        console.log('emp',this.props.employees.all_employees)
        if(this.state.showLoading) return <h1>Loading...</h1>

        return (
            <Container>
                <Header {...this.props}/>
                <Row>

                    <DivEmpList>
                        <EmployeeList employees={this.props.employees.all_employees}/>
                    </DivEmpList>

                </Row>
            </Container>
        );
    }
}

Dashboard.defaultProps = {

};

Dashboard.propTypes = {
    getEmployees: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

const mapDispatchToProps = {
    getEmployees: getEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));
