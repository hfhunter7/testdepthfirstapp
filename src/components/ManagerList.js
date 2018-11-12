import React, { Component } from 'react';
import styled from 'styled-components'

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
            employees: [
                {
                    id: 1,
                    name: 'emp 1',
                },
                {
                    id: 1,
                    name: 'emp 2',
                },
            ]
        }
    }



    render() {
        return (
            <DivTable>
                <Table>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Manager 1</td>
                        <td><button>Select</button></td>
                    </tr>
                </Table>
            </DivTable>
        );
    }
}

ManagerList.defaultProps = {};

export default ManagerList;
