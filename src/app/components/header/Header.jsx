import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import {
	HeaderContainer,
	HeadlineContainer,
	SearchField,
} from "./header-style";

const Header = ({ children }) => {
	const [searchWord, setSearchWord] = useState("");
	const navigate = useNavigate();
	return (
		<HeaderContainer>
			<HeadlineContainer>
				<Logo mode={"light"} />

				<form onSubmit={() => navigate(`/search/${searchWord}`)}>
					<SearchField
						value={searchWord}
						onChange={(ev) => setSearchWord(ev.target.value)}
					/>
				</form>
			</HeadlineContainer>
			{children.length ? [...children] : children}
		</HeaderContainer>
	);
};
export default Header;
