import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Footer from "./footer";

export default function FilmePage({ filmSession, setFilmSession }) {
  const filmID = useParams();
  console.log(filmID);

  React.useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmID.idFilme}/showtimes`
      )
      .then((response) => {
        setFilmSession(response.data);
      });
  }, []);

  if (filmSession.length !== 0) {
    return (
      <Container>
        <Title>Selecione o horário</Title>
        {filmSession.days.map((filmDays) => {
          return (
            <>
              <Dia key={filmDays.id}>
                {filmDays.weekday} - {filmDays.date}
              </Dia>
              <Sessoes>
                {filmDays.showtimes.map((filmShowtimes) => {
                  return (
                    <StyledLink to={`/assentos/${filmShowtimes.id}`}>
                      <div key={filmShowtimes.id}>{filmShowtimes.name}</div>
                    </StyledLink>
                  );
                })}
              </Sessoes>
            </>
          );
        })}
        <Footer filmSession={filmSession} />
      </Container>
    );
  } else {
    return <div>carregando</div>;
  }
}

const Container = styled.div`
  margin-top: 67px;
  padding: 0 35px 0 35px;

  &:last-child {
    margin-bottom: 180px;
  }
`;

const Title = styled.div`
  height: 110px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dia = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  color: #293845;
  font-weight: 400;
`;

const Sessoes = styled.div`
  display: flex;
  margin-bottom: 20px;

  div {
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    border-radius: 3px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
