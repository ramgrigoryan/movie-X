import Logo from "../Logo/Logo";
import MoviesPreview from "../movies-preview/MoviesPreview";
import {
	HeaderContainer,
	HeadlineContainer,
	SearchField,
	PreviewText,
} from "./header-style";

const Header = ({ children }) => {
	return (
		<HeaderContainer>
			<HeadlineContainer>
				<Logo mode={"light"} />
				<SearchField />
			</HeadlineContainer>
			{children.length ? [...children] : children}
		</HeaderContainer>
	);
};
export default Header;
