import { LogoText, Xletter } from "./logo-style";
const Logo = ({ mode }) => {
	return (
		<LogoText>
			Movie<Xletter mode={mode}>X</Xletter>
		</LogoText>
	);
};
export default Logo;
