import React, { Component } from 'react';
import { Container, Row } from "../style-js/Grid.style";
import Header from "../components/Header";
import styled from "styled-components";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getPettyCashByEmployee, updateStatusPettyCash } from "../action/actionCreators";
import PettyCashList from "../components/PettyCashList";

const DivMngList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
`;

class EmployeeCheckStatus extends Component {
    constructor(props){
        super(props);

        this.state = {
            showLoading: true,
        }
    }

    componentDidMount() {
        this.props.getPettyCashByEmployee(this.props.match.params.id);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.petty_cash_employee !== prevState.petty_cash_employee) {
            return {
                showLoading: false,
            };
        }

        return null;
    }

    handleUpdateStatus = (id , data) => {
        this.props.updateStatusPettyCash(id,data,this.props.match.params.id);

        this.setState({
            showLoading: true,
        });
    }

    render() {
        if(this.state.showLoading) return <h1>Loading...</h1>

        return (
            <Container>
                <Header {...this.props}/>
                <Row>
                    <DivMngList>
                        <PettyCashList
                            status="employee"
                            petty_cash={this.props.petty_cash_employee.petty_cash}
                            handleUpdateStatus={this.handleUpdateStatus}
                        />
                    </DivMngList>

                </Row>
            </Container>
        );
    }
}

EmployeeCheckStatus.defaultProps = {};

EmployeeCheckStatus.propTypes = {
    getPettyCashByEmployee: PropTypes.func.isRequired,
    updateStatusPettyCash: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        petty_cash_employee: state.petty_cash_employee
    }
}

const mapDispatchToProps = {
    getPettyCashByEmployee: getPettyCashByEmployee,
    updateStatusPettyCash: updateStatusPettyCash
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeCheckStatus));