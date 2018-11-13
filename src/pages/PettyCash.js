import React, { Component } from 'react';
import Header from '../components/Header';
import { Container, Row } from '../style-js/Grid.style'
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createPettyCash } from "../action/actionCreators";
import PropTypes from 'prop-types'

const DivTable = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextHeader = styled.p`
    font-size : 18px;
`;

const TextInput = styled.p`
    font-size : 16px;
`;

class PettyCash extends Component {
    constructor(props){
        super(props);

        this.state = {
            amount: '',
            description: '',
        }
    }

    handleClickOK = () => {
        const data = {
            amount: this.state.amount,
            description: this.state.description,
            employee_id: this.props.match.params.id,
        }
        this.props.createPettyCash(data);

        //this.props.history.push('/employee-status-petty-cash/'+this.props.match.params.id);
    }

    handleChange = (key) => {
        return (event) => {
            this.setState({
                [key]: event.target.value
            });
        }
    }

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Row>

                    <DivTable>
                        <TextHeader>กรอกรายละเอียดที่ต้องการเบิก</TextHeader>
                        <TextInput>จำนวนเงินที่ต้องการเบิก</TextInput><input type="text" onChange={this.handleChange('amount')}/>
                        <TextInput>รายละเอียด</TextInput><textarea rows="4" cols="50" onChange={this.handleChange('description')}></textarea>
                        <button onClick={this.handleClickOK}>OK</button>
                    </DivTable>

                </Row>
            </Container>
        );
    }
}

PettyCash.defaultProps = {
    createPettyCash: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        petty_cash: state.petty_cash
    }
}

const mapDispatchToProps = {
    createPettyCash: createPettyCash
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PettyCash));