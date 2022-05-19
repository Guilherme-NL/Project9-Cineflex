import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDom from "react-dom";
import axios from "axios";
import React from "react";
import styled from "styled-components";

import TopBar from "./Top";
import HomePage from "./homepage";

export default function App() {
  const [filmList, setFilmList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
      .then((response) => {
        setFilmList(response.data);
      });
  }, []);
  console.log(filmList);
  return (
    <BrowserRouter>
      <GlobalStyle>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage filmList={filmList} />} />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
}

const GlobalStyle = styled.div`
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
`;

ReactDom.render(<App />, document.querySelector(".root"));
