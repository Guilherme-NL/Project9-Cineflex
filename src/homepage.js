import styled from "styled-components";

export default function HomePage({ filmList }) {
  return (
    <Container>
      <Title>Selecione o filme</Title>
      <Movies>
        {filmList.map((film) => {
          return <img src={film.posterURL} alt={film.title} />;
        })}
      </Movies>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 67px;
  padding: 0 35px 0 35px;
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    box-sizing: border-box;
    width: 145px;
    height: 209px;
    margin-bottom: 30px;
    border: 8px solid #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
`;

const Title = styled.div`
  height: 110px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
