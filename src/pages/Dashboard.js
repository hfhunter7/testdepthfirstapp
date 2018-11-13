import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import { Container, Row } from '../style-js/Grid.style'
import styled from 'styled-components'
import EmployeeList from "../components/EmployeeList";
import { getGeneralEmployees } from "../action/actionCreators";
import { HeaderText } from "../style-js/shared.style";

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
        this.props.getGeneralEmployees();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.general_employee !== prevState.general_employee) {
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

                    <DivEmpList>
                        <HeaderText>รายชื่อพนักงาน</HeaderText>
                        <EmployeeList employees={this.props.general_employee.general_employees}/>
                    </DivEmpList>

                </Row>
            </Container>
        );
    }
}

Dashboard.defaultProps = {

};

Dashboard.propTypes = {
    getGeneralEmployees: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        general_employee: state.general_employee
    }
}

const mapDispatchToProps = {
    getGeneralEmployees: getGeneralEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));
