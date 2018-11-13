import React, { Component } from 'react';
import { Container, Row } from "../style-js/Grid.style";
import Header from "../components/Header";
import styled from "styled-components";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getFinanceEmployees } from "../action/actionCreators";
import FinanceList from "../components/FinanceList";
import { HeaderText } from "../style-js/shared.style";

const DivMngList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
`;

class Finance extends Component {
    constructor(props){
        super(props);

        this.state = {
            showLoading: true,
        }
    }

    componentDidMount() {
        this.props.getFinanceEmployees();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.finance_employee !== prevState.finance_employee) {
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
                        <HeaderText>ฝ่ายการเงิน</HeaderText>
                        <FinanceList employees={this.props.finance_employee.finance_employees}/>
                    </DivMngList>

                </Row>
            </Container>
        );
    }
}

Finance.defaultProps = {};

Finance.propTypes = {
    getFinanceEmployees: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        finance_employee: state.finance_employee
    }
}

const mapDispatchToProps = {
    getFinanceEmployees: getFinanceEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Finance));