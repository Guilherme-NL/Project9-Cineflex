import styled from "styled-components";

export default function Confirmation() {
  return (
    <Container>
      <Title>Pedido feito com sucesso!</Title>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 67px;
  padding: 0 35px 0 35px;
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
