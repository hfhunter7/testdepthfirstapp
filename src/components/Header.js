import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HeaderContainer,
    HeaderRow,
    RightBox,
} from '../style-js/Header.style'


class Header extends Component {
    constructor( props ) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }

    handleClick( url ) {
        this.props.history.push(url)
        // this.props.history.goBack()
    };

    render() {
        return (
            <HeaderContainer>
                <HeaderRow shadowColor={this.props.shadowColor}>


                    <RightBox>
                        <button onClick={this.handleClick.bind(this, "/")}>
                            employee
                        </button>
                        <button onClick={this.handleClick.bind(this, "/manager")}>
                            manager
                        </button>

                    </RightBox>

                </HeaderRow>
            </HeaderContainer>
        );
    }
}

Header.defaultProps = {
    showShadow: true
};

Header.propTypes = {};

function mapStateToProps( state ) {
    return {}
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);