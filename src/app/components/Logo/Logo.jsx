import { LogoText, Xletter } from "./logo-style";
import { useNavigate } from "react-router-dom";
const Logo = ({ mode }) => {
	const navigate = useNavigate();
	return (
		<LogoText onClick={() => navigate("/")}>
			Movie<Xletter mode={mode}>X</Xletter>
		</LogoText>
	);
};
export default Logo;
