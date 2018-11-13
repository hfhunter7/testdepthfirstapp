import React, { Component } from 'react';
import { Container, Row } from "../style-js/Grid.style";
import Header from "../components/Header";
import styled from "styled-components";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getPettyCashByReceived, updateStatusPettyCash } from "../action/actionCreators";
import PettyCashApproveList from "../components/PettyCashApproveList";
import { HeaderText } from "../style-js/shared.style";

const DivMngList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
`;

class FinanceListPettyCash extends Component {
    constructor(props){
        super(props);

        this.state = {
            showLoading: true,
            summary: '',
        }
    }

    componentDidMount() {
        this.props.getPettyCashByReceived();
    }

    handleUpdateStatus = (id , data) => {
        this.props.updateStatusPettyCash(id,data,this.props.match.params.id);

        this.setState({
            showLoading: true,
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.petty_cash_received !== prevState.petty_cash_received) {
            let sum = 0;
            if(nextProps.petty_cash_received.petty_cash_received){
                for(let data of nextProps.petty_cash_received.petty_cash_received){
                    sum += data.amount;
                }
            }

            return {
                showLoading: false,
                summary: sum,
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
                        <HeaderText>สรุปยอด</HeaderText>
                        <PettyCashApproveList
                            status="summary"
                            summary={this.state.summary}
                            petty_cash_approve={this.props.petty_cash_received.petty_cash_received}
                            handleUpdateStatus={this.handleUpdateStatus}
                        />
                    </DivMngList>

                </Row>
            </Container>
        );
    }
}

FinanceListPettyCash.defaultProps = {};

FinanceListPettyCash.propTypes = {
    getPettyCashByReceived: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        petty_cash_received: state.petty_cash_received
    }
}

const mapDispatchToProps = {
    getPettyCashByReceived: getPettyCashByReceived,
    updateStatusPettyCash:updateStatusPettyCash,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FinanceListPettyCash));