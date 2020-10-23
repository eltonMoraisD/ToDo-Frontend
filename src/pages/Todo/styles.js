import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  flex-direction: column;

  img {
    width: 200px;
  }

  form {
    width: 580px;
    background: rgba(255, 255, 255, 0.09);
    mix-blend-mode: normal;
    border-radius: 8px;
    text-align: center;
    color: white;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    input {
      width: 370px;
      height: 44px;
      padding: 0 15px;
      border-radius: 4px;
      border: 0;
      margin: 13px;
      line-height: 13px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    button {
      width: 60px;
      height: 46px;
      background: #0772ef;
      border: 0;
      border-radius: 4px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      img {
        width: 30px;
      }
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 1030px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const Card = styled.div`
  width: 450px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  p {
    width: 200px;
    font-size: 18px;
    margin: 15px;
    font-family: 'Chilanka', cursive;
  }
  span {
    button {
      background: rgba(255, 255, 255, 0);
      border: 0;

      img {
        position: relative;
        top: 5px;
        right: 10px;
        width: 20px;
        height: 20px;
        margin: 4px;
      }
    }
  }
`;
