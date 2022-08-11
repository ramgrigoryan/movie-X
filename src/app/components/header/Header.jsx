import Logo from "../Logo/Logo";
import MoviesPreview from "../movies-preview/MoviesPreview";
import {
	HeaderContainer,
	HeadlineContainer,
	SearchField,
	PreviewText,
} from "./header-style";

const Header = () => {
	return (
		<HeaderContainer>
			<HeadlineContainer>
				<Logo mode={"light"} />
				<SearchField />
			</HeadlineContainer>
			<MoviesPreview />
			<PreviewText>
				<h5>Watch everywhere.</h5>
				<p>
					Stream unlimited movies and TV shows on your phone, tablet, laptop,
					and TV without paying more.
				</p>
			</PreviewText>
		</HeaderContainer>
	);
};
export default Header;
