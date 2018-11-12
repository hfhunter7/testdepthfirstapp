import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import styled from 'styled-components'
import { IconSpan } from '../../style-js/Icon.style'
import { connect } from 'react-redux';

const ConfirmDialogContainer = styled.div`
	z-index: 99999;
`;
const HeaderText = styled.div`
	font-size: 30px;
	font-weight: bold;
	margin-bottom: 30px;
`;
const DialogContainer = styled.div`
	text-align: left;
	@media (max-width: 767px) {
		margin-top: 30px;
	}
`;
export const MenuBox = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const MenuBoxCloseMenu = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: right;
`;

export const TextIconCloseMenu = styled.span`
    font-size: 20px;
    color: white;
`;

export const IconSpanItem = styled(IconSpan)`
	 font-size: 70px;
`;

export const IconSpanExitItem = styled(IconSpan)`
	 font-size: 70px;
	 color: red;
`;

export const TextIcon = styled.span`
    font-size: 20px;
    color: black;
     vertical-align: 26px
`;

export const TextExitIcon = styled.span`
    font-size: 20px;
    color: red;
     vertical-align: 26px
`;

const DescriptionBlock = styled.div`
	color: #000000;
`;

class ProfileNavDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
        };
    }

    handleClickProfile=()=>{
        this.setState({
            url: '/profile',
        });
        this.props.handleProfileClick('/profile')
        // this.props.handleProfileClick(this.state.url)
        this.props.handleRequestClose()
    };

    handleClickPayment=()=>{
        this.setState({
            url: '/payment',
        });
        this.props.handleProfileClick('/payment')
        // this.props.handleProfileClick(this.state.url)
        this.props.handleRequestClose()
    };

    handleClickPurchase=()=>{
        this.setState({
            url: '/purchase',
        });
        this.props.handleProfileClick('/purchase')
        // this.props.handleProfileClick(this.state.url)
        this.props.handleRequestClose()
    };

    handleLogout = () => {
        this.props.logoutUserFromAuthToken();
    };

    render() {
        const { fullScreen } = this.props;
        return (
            <ConfirmDialogContainer>
                <Dialog
                    title="Dialog With Actions"
                    actions={null}
                    modal={false}
                    open={this.state.open}
                >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </ConfirmDialogContainer>
        );
    }
}

ProfileNavDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)((ProfileNavDialog));
