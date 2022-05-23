import styled from "styled-components";

export default function Footer({ session, filmSession }) {
  return (
    <Container>
      <img src={filmSession.posterURL} alt={filmSession.title} />
      <Session>
        <h2>{filmSession.title}</h2>
        {session && (
          <h2>
            {session.day.weekday} - {session.name}
          </h2>
        )}
      </Session>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 117px;
  width: 100%;
  background-color: #dfe6ed;
  display: flex;
  align-items: center;
  border: 1px solid #9eadba;
  padding: 10px;

  img {
    box-sizing: border-box;
    width: 64px;
    height: 89px;
    border: 8px solid #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-right: 15px;
  }

  h2 {
    font-size: 26px;
    font-family: "Roboto", sans-serif;
    color: #293845;
    font-weight: 400;
  }
`;

const Session = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
