import styled from 'styled-components';
import { IconSpan } from './Icon.style'
import Button from 'material-ui/RaisedButton';
// import ic_search from '../image/icon/ic_search.png'
import Search from 'material-ui-icons/Search'

export const SearchIcon = styled(Search)`
	//position: relative !important;
	//top: 5px !important;
`;

export const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
`;

export const HeaderRow = styled.div`
	height: 56px;
	padding: 0 16px;
	flex-direction: row;
	display: flex;
	background-color: #fff;
	box-shadow: 0 5px 10px -3px ${props => props.shadowColor ? props.shadowColor : '#ccc'};
	align-items: center;
`;

export const Logo = styled.div`
	display: flex;
	flex-direction: row;
	cursor: pointer;
`;

export const LogoIcon = styled(IconSpan)`
	color: #27ae60;
	font-size: 50px;
`;
export const LogoImage = styled.img`
	height: 45px;
`;


export const ButtonLogin = styled(Button)`
	  width: 150px !important;
	  margin-left: 10px;
      background-color: #4285f4 !important;
       @media (max-width: 767px){
          display: none !important;
       }
`;

export const LogoBack = styled(IconSpan)`
	font-size: 20px;
`;

export const TitleCourse = styled.div`

    font-size: 20px;
    @media (max-width: 767px){
       white-space: nowrap; 
    width: 14em; 
    overflow: hidden;
    text-overflow: ellipsis; 
    border: 0px solid #000000;
    }
`;


export const LogoText = styled.div`
	padding-top: 13px; 
	padding-left: 10px;
	font-size: larger;
	font-weight: 500;
	
	@media (max-width: 767px) {
		display: none;
	}
`;

export const SearchBox = styled.div`
	flex: 1;
	padding-left: 10px;
	justify-content: flex-start;
`;

export const SearchInput = styled.input`
	float: right;
    height: 25px;
    font-size: 14px;
    width: 260px;
    background: #EEEEEE;
    border: #bdc3c7;
    border-style: solid;
    border-width: thin;
    color: #000000;
    background-image: url('../image/icon/ic_search.png');
    
	@media only screen 
		and (min-device-width: 768px) 
		and (max-device-width: 1024px) 
		and (-webkit-min-device-pixel-ratio: 1) {
			width: 200px;
	}
`;

export const RightBox = styled.div`
	align-items: center;
	justify-content: flex-end;
	display: flex;
	
	@media (max-width: 767px) {
		display: none;
	}
	
	@media only screen 
	and (min-device-width: 768px) 
	and (max-device-width: 1024px) 
	and (-webkit-min-device-pixel-ratio: 1) {
		width: 300px;
	}
`;

export const ProfileImage = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	//border
	min-width: 0;
	cursor: pointer;
`;