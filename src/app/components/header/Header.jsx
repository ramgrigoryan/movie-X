import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearchedMovies } from "../../features/moviesReducer";
import Logo from "../Logo/Logo";
import {
	HeaderContainer,
	HeadlineContainer,
	SearchField,
} from "./header-style";

const Header = ({ children }) => {
	const dispatch = useDispatch();
	const [searchWord, setSearchWord] = useState("");
	const navigate = useNavigate();
	return (
		<HeaderContainer>
			<HeadlineContainer>
				<Logo mode={"light"} />

				<form
					method="GET"
					onSubmit={(ev) => {
						ev.preventDefault();
						dispatch(fetchSearchedMovies(searchWord));
						navigate(`/search/${searchWord}`);
					}}
				>
					<SearchField
						value={searchWord}
						onChange={(ev) => setSearchWord(ev.target.value)}
					/>
				</form>
			</HeadlineContainer>
			{children && children.length ? [...children] : children}
		</HeaderContainer>
	);
};
export default Header;
