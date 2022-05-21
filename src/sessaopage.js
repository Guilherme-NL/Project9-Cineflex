import axios from "axios";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";

import Footer from "./footer";

export default function SessaoPage() {
  const sessaoID = useParams();
  const navigate = useNavigate();
  console.log(sessaoID);

  const [filmSeats, setFilmSeats] = React.useState([]);
  const [name, setName] = React.useState("");
  const [cpf, setCpf] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoID.idSessao}/seats`
      )
      .then((response) => {
        const updatedSeats = response.data.seats.map((seat) => {
          return { ...seat, isSelected: false };
        });
        setFilmSeats({ ...response.data, seats: updatedSeats });
      });
  }, []);

  function sendSeats() {
    const filteredSeats = filmSeats.seats.filter((seat) => seat.isSelected);
    const ids = filteredSeats.map((seat) => seat.id);
    const body = {
      ids,
      name,
      cpf,
    };

    axios
      .post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        body
      )
      .then(navigate("/sucesso"));
    setName("");
    setCpf("");
  }

  function handleSeatSelect(seat) {
    if (seat.isAvailable) {
      const updatedSeats = { ...filmSeats };
      const index = updatedSeats.seats.indexOf(seat);
      updatedSeats.seats[index] = {
        ...updatedSeats.seats[index],
        isSelected: !updatedSeats.seats[index].isSelected,
      };
      setFilmSeats(updatedSeats);
    }
  }

  if (filmSeats.length !== 0) {
    return (
      <Container>
        <Title>Selecione o(s) assentos</Title>
        <Seats>
          {filmSeats.seats.map((seat) => {
            return (
              <Seat
                onClick={() => handleSeatSelect(seat)}
                key={seat.id}
                variant={seat.isAvailable}
                selected={seat.isSelected}
              >
                {seat.name}
              </Seat>
            );
          })}
        </Seats>
        <Legend>
          <Selected>
            <div></div>
            <p>Selecionado</p>
          </Selected>
          <Available>
            <div></div>
            <p>Disponível</p>
          </Available>
          <Unavailable>
            <div></div>
            <p>Indisponível</p>
          </Unavailable>
        </Legend>
        <Form>
          <h2>Nome do comprador:</h2>
          <input
            placeholder="Digite seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2>CPF do comprador:</h2>
          <input
            placeholder="Digite seu CPF..."
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <Button>
            <button onClick={sendSeats}>Reservar assentos(s)</button>
          </Button>
        </Form>
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
  background-color: ${(props) => {
    if (props.selected) {
      return "#8DD7CF";
    }
    if (props.variant) {
      return "#c3cfd9";
    }
    return "#fbe192";
  }};
  border: 1px solid
    ${(props) => {
      if (props.selected) {
        return "#45BDB0";
      }
      if (props.variant) {
        return "#808f9d";
      }
      return "#f7c52b";
    }};
  margin: 0 5px 18px 0;
  font-size: 11px;
  font-weight: 400;
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Selected = styled.div`
  font-size: 13px;
  color: #4e5a65;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #8dd7cf;
    border: 1px solid #1aae9e;
    margin-bottom: 10px;
  }
`;

const Available = styled.div`
  font-size: 13px;
  color: #4e5a65;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #c3cfd9;
    border: 1px solid #7b8b99;
    margin-bottom: 10px;
  }
`;

const Unavailable = styled.div`
  font-size: 13px;
  color: #4e5a65;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #fbe192;
    border: 1px solid #f7c52b;
    margin-bottom: 10px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 400;
    font-size: 18px;
    color: #293845;
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    height: 51px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    margin-bottom: 13px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;

  button {
    margin-top: 50px;
    width: 225px;
    height: 42px;
    font-size: 18px;
    background-color: #e8833a;
    color: #ffffff;
  }
`;
