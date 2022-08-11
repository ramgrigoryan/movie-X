import styled from "styled-components";
export const MostPopularContainer = styled.div`
	padding: 60px 130px;
	h5 {
		text-align: center;
		font-size: 2em;
		margin-bottom: 90px;
	}
`;
export const MostPopularPreview = styled.div`
	display: grid;
	grid-template-rows: 1;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 70px;
	img {
		width: 350px;
		height: 400px;
		cursor: pointer;
	}
`;
