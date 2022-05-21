import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDom from "react-dom";
import axios from "axios";
import React from "react";
import GlobalStyle from "./global";

import TopBar from "./Top";
import HomePage from "./homepage";
import FilmePage from "./filmepage";
import SessaoPage from "./sessaopage";

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
      <GlobalStyle />
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage filmList={filmList} />} />
        <Route path="/sessoes/:idFilme" element={<FilmePage />} />
        <Route path="/assentos/:idSessao" element={<SessaoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.querySelector(".root"));
