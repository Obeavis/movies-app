import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "components/Container";
import brazil from "static/images/brazil-flag.png";
import eua from "static/images/usa-flag.png";
import { ReactComponent as MagnifierIcon } from "static/icons/magnifier.svg";

const Header = () => {
  const dispatch = useDispatch();
  const { basicState } = useSelector((state) => state);
  const history = useHistory();
  const [valueToSearch, setValueToSearch] = useState("");

  const gotoMovies = () => {
    history.push("/");
    setValueToSearch("");
    window.scrollTo(0, 0);
    if (basicState.search) {
      dispatch({ type: "CLEAR_MOVIES" });
      dispatch({ type: "SET_PAGE", payload: 1 });
      dispatch({ type: "SEARCH", payload: false });
    }
  };

  const changeLanguage = (language) => {
    if (language !== basicState.language) {
      dispatch({ type: "LANGUAGE", payload: language });
      dispatch({ type: "LOADING", payload: true });
      dispatch({ type: "CLEAR_MOVIES" });
      dispatch({ type: "SET_PAGE", payload: 1 });
    }
  };

  const search = async (e) => {
    e.preventDefault();
    if (valueToSearch) {
      dispatch({ type: "SEARCH", payload: valueToSearch });
			e.target.reset();
			history.push("/");
      setValueToSearch("");
      window.scrollTo(0, 0);
      dispatch({ type: "LOADING", payload: true });
      dispatch({ type: "CLEAR_MOVIES" });
      dispatch({ type: "SET_PAGE", payload: 1 });
    }
  };

  return (
    <header className="flex fixed items-center h-16 w-full top-0 bg-secondary z-10">
      <Container className="flex items-center">
        <div
          className="ml-3 sm:ml-0 bg-tertiary rounded-sm py-1 px-2 cursor-pointer"
          onClick={() => gotoMovies()}
        >
          <span className="text-xl lg:text-2xl font-extrabold">TMDb</span>
        </div>
        <form className="relative flex-grow mx-2 sm:mx-5" onSubmit={(e) => search(e)}>
          <input
            className="py-1 pl-3 block w-full appearance-none leading-normal border-2 border-transparent rounded-lg focus:outline-none focus:border-tertiary text-left select-none truncate bg-white shadow-md"
            placeholder="Search"
            onChange={({ target }) => setValueToSearch(target.value)}
          />
          <button
            className="cursor-pointer absolute inset-y-0 right-0 pr-4 flex items-center"
            type="submit"
          >
            <MagnifierIcon className="text-gray-600 fill-current w-4 h-4" />
          </button>
        </form>

        <div className="flex">
          <img
            className="mx-1 cursor-pointer rounded-sm"
            src={brazil}
            width="35rem"
            alt="brazil-flag"
            onClick={() => changeLanguage("pt-BR")}
          />
          <img
            className="mx-1 cursor-pointer rounded-sm mr-10 sm:mr-0"
            src={eua}
            width="35rem"
            alt="eua-flag"
            onClick={() => changeLanguage("en-US")}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
