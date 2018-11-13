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

class FinanceList extends Component {

    constructor(props){
        super(props);

        this.state = {
            showLoading: true,
        }
    }

    onClickEmp = (id) => {
        this.props.history.push('/finance-list-patty-cash/' + id)
    }

    onClickSummary = (id) => {
        this.props.history.push('/finance-list-detail/' + id)
    }

    render() {

        return (
            <DivTable>
                <Table>
                    <tbody>
                    <tr>
                        <td>id</td>
                        <td>Employee Code</td>
                        <td>FirstName</td>
                        <td>Surname</td>
                        <td>Telephone</td>
                        <td>status</td>
                        <td>Department</td>
                        <td>Job Level</td>
                    </tr>
                    {
                        this.props.employees !== undefined &&
                        this.props.employees.length > 0 &&
                        this.props.employees.map((emp , index) => {
                            return <tr key={index}>
                                <td>{emp.id}</td>
                                <td>{emp.employee_code}</td>
                                <td>{emp.first_name}</td>
                                <td>{emp.surname}</td>
                                <td>{emp.telephone}</td>
                                <td>{emp.status}</td>
                                <td>{emp.department_title}</td>
                                <td>{emp.job_level}</td>
                                <td><button onClick={() => this.onClickEmp(emp.id)}>รายการเบิก</button></td>
                                <td><button onClick={() => this.onClickSummary(emp.id)}>สรุปยอด</button></td>
                            </tr>
                        })
                    }
                    </tbody>


                </Table>


            </DivTable>
        );
    }
}

FinanceList.defaultProps = {

};

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FinanceList));