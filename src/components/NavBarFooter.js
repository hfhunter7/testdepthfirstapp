import React, { Component } from 'react';
import {
	NavBarFooterContainer,
	NavBarFooterRow,
	NavIcon,
	NavItem,
    NavBarFooterRowNoLogin,
    ButtonLogin
} from '../style-js/NavBarFooter.style'
import Badge from 'material-ui/Badge'
import { connect } from 'react-redux';
import ProfileNavDialog from "./shared/ProfileNavDialog";

class NavBarFooter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open_profile: false,
        };
    }

	handleClick(url) {
		this.props.history.push(url)
	}

    handleClickProfile=()=> {
        this.setState({ open_profile: true });
    }

    handleProfileClick=(url)=>{
    	this.props.history.push(url)
	}

    handleRequestClose=()=>{
    	this.setState({open_profile:false});
	}

	handleClickLogin=()=>{
        this.props.history.push('/login')
	}

	render() {
		const course = this.props.match.path === '/'
		const training = this.props.match.path === '/training'
		const cart = this.props.match.path === '/cart'
		// const profile = this.props.match.path === '/profile'
		return (
			<NavBarFooterContainer>


			</NavBarFooterContainer>
		);
	}
}

function mapStateToProps(state) {
    return {
        user: state.user,
        all_cart_item: state.all_cart_item
    }
}
export default connect(mapStateToProps, null)(NavBarFooter);

