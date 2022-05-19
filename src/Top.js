import styled from "styled-components";

export default function TopBar() {
  return (
    <Container>
      <h1>CINEFLEX</h1>
    </Container>
  );
}

const Container = styled.div`
  height: 67px;
  width: 100%;
  background-color: #c3cfd9;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 34px;
    color: #e8833a;
  }
`;
