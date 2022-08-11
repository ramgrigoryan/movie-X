import styled from "styled-components";

export const LogoText = styled.div`
	font-size: 3em;
	color: #fff;
`;
export const Xletter = styled.span`
	color: ${(props) => (props.mode === "dark" ? "#000" : "#faff00")};
`;
