import { useParams } from "react-router-dom";
const CurrentMovie = () => {
	const { currentMovieName } = useParams();
	console.log(currentMovieName);
	return <div>It works!</div>;
};
export default CurrentMovie;
