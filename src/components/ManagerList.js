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

class ManagerList extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    onClickMng = (id) => {
        this.props.history.push('/manager-list-employee/' + id);
    }

    render() {
        return (
            <DivTable>
                <Table>
                    <tbody>
                    <tr>
                        <td>id</td>
                        <td>Manager name</td>
                    </tr>
                    {
                        this.props.managers !== undefined &&
                        this.props.managers.length > 0 &&
                        this.props.managers.map((mng , index) => {
                            return <tr key={index}>
                                <td>{mng.id}</td>
                                <td>{mng.name}</td>
                                <td><button onClick={() => this.onClickMng(mng.id)}>Select</button></td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>
            </DivTable>
        );
    }
}

ManagerList.defaultProps = {};

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManagerList));