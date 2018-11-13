import React, { Component } from 'react';
import styled from 'styled-components'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Table = styled.table`
    border: 1px solid #ddd;
    font-size: 20px;
`;

const DivTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

class PettyCashApproveList extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
        this.onClickUpdate = this.onClickUpdate.bind(this)
    }

    onClickUpdate(id){
        return (e) => {
            const data = {
                status_id: e.currentTarget.dataset.status_id
            }
            this.props.handleUpdateStatus(id,data);
        }
    }


    render() {
        return (
            <DivTable>
                <Table>
                    <tbody>
                    <tr>
                        <td>id</td>
                        <td>Code</td>
                        <td>Description</td>
                        <td>Amount</td>
                        <td>Create Date</td>
                        <td>Modify Date</td>
                        <td>status</td>
                    </tr>
                    {
                        this.props.status === 'list' &&
                            this.props.petty_cash_approve !== undefined &&
                            this.props.petty_cash_approve.length > 0 &&
                            this.props.petty_cash_approve.map((pc , index) => {
                                return <tr key={index}>
                                    <td>{pc.id}</td>
                                    <td>{pc.code}</td>
                                    <td>{pc.description}</td>
                                    <td>{pc.amount}</td>
                                    <td>{pc.create_date}</td>
                                    <td>{pc.modify_date}</td>
                                    <td>{pc.status}</td>
                                    {
                                        pc.status !== 'รับเงินแล้ว' && <td><button onClick={this.onClickUpdate(pc.id)} data-status_id={6}>ให้เงินพนักงาน</button></td>
                                    }

                                </tr>
                            })
                    }
                    {
                        this.props.status === 'summary' &&
                        this.props.petty_cash_approve !== undefined &&
                        this.props.petty_cash_approve.length > 0 &&
                        this.props.petty_cash_approve.map((pc , index) => {
                            return <tr key={index}>
                                <td>{pc.id}</td>
                                <td>{pc.code}</td>
                                <td>{pc.description}</td>
                                <td>{pc.amount}</td>
                                <td>{pc.create_date}</td>
                                <td>{pc.modify_date}</td>
                                <td>{pc.status}</td>
                                {
                                    pc.status === 'รับเงินแล้ว' && <td><button onClick={this.onClickUpdate(pc.id)} data-status_id={5}>ยืนยัน</button></td>
                                }

                            </tr>
                        })
                    }

                    </tbody>
                </Table>
                {
                    this.props.status === 'summary' &&
                    <p>รายการเบิกทั้งหมด {this.props.summary}</p>
                }
            </DivTable>
        );
    }
}

PettyCashApproveList.defaultProps = {};

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PettyCashApproveList));