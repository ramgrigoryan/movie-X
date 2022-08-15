import styled from "styled-components";
export const HeaderContainer = styled.div`
	background-image: linear-gradient(#383838, #8a8a8a);
	padding: 102px 130px;
`;
export const HeadlineContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const SearchField = styled.input`
	box-sizing: border-box;
	border: 1px solid #faff00;
	background: transparent;
	height: 80px;
	width: 400px;
	padding: 15px 25px;
	font-family: "Roboto";
	font-size: 18px;
	color: #fff;
	border-radius: 17px;
	&:focus {
		outline: none;
	}
`;
