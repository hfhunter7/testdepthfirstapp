import React, { Component } from 'react';
import { Container, Row } from "../style-js/Grid.style";
import Header from "../components/Header";
import styled from "styled-components";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getPettyCashByApprove, updateStatusPettyCash } from "../action/actionCreators";
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
        }
    }

    componentDidMount() {
        this.props.getPettyCashByApprove();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.petty_cash_approve !== prevState.petty_cash_approve) {
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
                        <HeaderText>รายการเบิกที่อนุมัติแล้ว</HeaderText>
                        <PettyCashApproveList
                            status="list"
                            petty_cash_approve={this.props.petty_cash_approve.petty_cash_approve}
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
    getPettyCashByApprove: PropTypes.func.isRequired,
    updateStatusPettyCash: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        petty_cash_approve: state.petty_cash_approve,
    }
}

const mapDispatchToProps = {
    getPettyCashByApprove: getPettyCashByApprove,
    updateStatusPettyCash:updateStatusPettyCash
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FinanceListPettyCash));