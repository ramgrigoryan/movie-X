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
	height: 35px;
	width: 200px;
	padding: 15px 8px;
	font-family: "Roboto";
	font-size: 1.2em;
	color: #fff;
	border-radius: 17px;
	&:focus {
		outline: none;
	}
`;
export const PreviewText = styled.div`
	padding-top: 20px;
	h5 {
		font-size: 1.2em;
		color: #faff00;
		margin-bottom: 10px;
	}
	p {
		color: #fff;
	}
`;
