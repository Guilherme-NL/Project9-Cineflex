import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from "react";

export default function SessaoPage() {
  const sessaoID = useParams();
  console.log(sessaoID);

  const [filmSeats, setFilmSeats] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoID.idSessao}/seats`
      )
      .then((response) => {
        setFilmSeats(response.data);
      });
  }, []);

  if (filmSeats.length !== 0) {
    return (
      <Container>
        <Title>Selecione o(s) assentos</Title>
        <Seats>
          {filmSeats.seats.map((seats) => {
            return <Seat variant={seats.isAvailable}>{seats.name}</Seat>;
          })}
        </Seats>
      </Container>
    );
  } else {
    return <div>carregando</div>;
  }
}

const Container = styled.div`
  margin-top: 67px;
  padding: 0 35px 0 35px;
`;

const Title = styled.div`
  height: 110px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Seats = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Seat = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.variant ? "#c3cfd9" : "#fbe192")};
  border: 1px solid ${(props) => (props.variant ? "#808f9d" : "#f7c52b")};
  margin: 0 5px 18px 0;
  font-size: 11px;
  font-weight: 400;
`;
