import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Confirmation({
  name,
  cpf,
  setName,
  setCpf,
  seat,
  filmSeats,
}) {
  function clearInputs() {
    setName("");
    setCpf("");
  }
  return (
    <Container>
      <Title>Pedido feito com sucesso!</Title>
      <Filme>
        <h1>Filme e sessão</h1>
        <h2>{filmSeats.movie.title}</h2>
        <h2>
          {filmSeats.day.date} {filmSeats.name}
        </h2>
      </Filme>
      <Ingressos>
        <h1>Ingressos</h1>
        {seat.map((s) => {
          return <h2 key={s}>Assento {s}</h2>;
        })}
      </Ingressos>
      <Comprador>
        <h1>Comprador</h1>
        <h2>Nome: {name}</h2>
        <h2>CPF: {cpf}</h2>
      </Comprador>
      <Home>
        <Link to="/">
          <button onClick={clearInputs}>Voltar para Home</button>
        </Link>
      </Home>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 67px;
  padding: 0 35px 0 35px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    color: #293845;
    margin-bottom: 5px;
  }
`;

const Title = styled.div`
  height: 110px;
  font-size: 24px;
  font-weight: 700;
  color: #247a6b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Filme = styled.div`
  margin-bottom: 25px;
`;

const Ingressos = styled.div`
  margin-bottom: 25px;
`;

const Comprador = styled.div`
  margin-bottom: 25px;
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  button {
    width: 225px;
    height: 42px;
    background-color: #e8833a;
    border-radius: 3px;
  }
`;
