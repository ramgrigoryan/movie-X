import styled from "styled-components";

export const SearchedMoviesContainer = styled.div`
	display: grid;
	padding: 102px 130px;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 40px;
	img {
		height: 400px;
		width: 350px;
	}
`;
export const NotFound = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 300px 0 150px 0;
	font-weight: 600;
	font-size: 30px;
`;
