import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDom from "react-dom";
import axios from "axios";
import React from "react";
import GlobalStyle from "./global";

import TopBar from "./Top";
import HomePage from "./homepage";
import FilmePage from "./filmepage";
import SessaoPage from "./sessaopage";
import Confirmation from "./confirmation";

export default function App() {
  const [filmSession, setFilmSession] = React.useState([]);
  const [name, setName] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [seat, setSeat] = React.useState([]);
  const [filmSeats, setFilmSeats] = React.useState([]);
  console.log(filmSeats);

  const [filmList, setFilmList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
      .then((response) => {
        setFilmList(response.data);
      });
  }, []);
  console.log(filmList);

  if (filmList.length !== 0) {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage filmList={filmList} />} />
          <Route
            path="/sessoes/:idFilme"
            element={
              <FilmePage
                filmSession={filmSession}
                setFilmSession={setFilmSession}
              />
            }
          />
          <Route
            path="/assentos/:idSessao"
            element={
              <SessaoPage
                filmSession={filmSession}
                name={name}
                cpf={cpf}
                setName={setName}
                setCpf={setCpf}
                setSeat={setSeat}
                filmSeats={filmSeats}
                setFilmSeats={setFilmSeats}
              />
            }
          />
          <Route
            path="/sucesso"
            element={
              <Confirmation
                name={name}
                cpf={cpf}
                seat={seat}
                filmSeats={filmSeats}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return <div>Carregando</div>;
  }
}

ReactDom.render(<App />, document.querySelector(".root"));
