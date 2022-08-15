import styled from "styled-components";

export const CurrentMovieContainer = styled.div``;
export const MovieInfoContainer = styled.div`
	padding-top: 102px;
	display: grid;
	grid-template-columns: 1fr;
`;
export const MovieSpecificationContainer = styled.div`
	overflow: hidden;
	display: grid;
	grid-template-columns: 400px 1fr;
	grid-gap: 160px;
	img {
		width: 400px;
		height: 500px;
		border-radius: 8px;
	}
`;
export const MovieDescriptionContainer = styled.div`
	h1 {
		font-size: 40px;
		color: #faff00;
	}
`;
export const InfoLines = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 40px 0;
	color: #fff;
	font-size: 24px;
	svg {
		margin-right: 40px;
	}
	img {
		height: 120px;
		width: 120px;
		border-radius: 50%;
		margin-right: 20px;
	}
`;
export const CastContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 40px 0;
	color: #fff;
	font-size: 24px;
	svg {
		margin-right: 40px;
	}
	img {
		height: 120px;
		width: 120px;
		border-radius: 50%;
		margin-right: 20px;
	}
`;

export const MovieTrailersContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	iframe {
		border-radius: 8px;
	}
`;
export const MovieContainers = styled.div`
	padding-top: 130px;
	padding-bottom: 130px;
	color: #fff;
	text-align: center;
	h2 {
		margin-bottom: 100px;
	}
`;
export const SimilarMoviesContainer = styled.div`
	padding: 102px 130px;
	h2 {
		color: #fff;
	}
`;
export const SimilarPostersContainer = styled.div`
	background-color: #fff;
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	img {
		width: 350px;
		height: 400px;
		cursor: pointer;
		border-radius: 8px;
	}
`;
