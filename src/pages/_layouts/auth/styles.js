import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: -webkit-linear-gradient(
    34deg,
    rgb(45, 192, 199) 0%,
    rgb(48, 123, 163) 40%,
    rgb(49, 56, 126) 80%,
    rgb(48, 23, 107) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: absolute;
  width: 457px;

  background: rgba(255, 255, 255, 0.09);
  mix-blend-mode: normal;
  border-radius: 8px;
  text-align: center;
  color: white;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 30px;
    line-height: 13px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 30px;

    input {
      width: 313px;
      height: 44px;
      padding: 0 15px;
      border-radius: 4px;
      border: 0;
      margin: 0 0 13px;
      line-height: 13px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      width: 313px;
      height: 44px;
      padding: 0 15px;
      border-radius: 4px;
      border: 0;
      margin: 0 0 13px;
      background: #452e97;
      color: white;
      font-weight: bold;
      font-size: 16px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      transition: background 0.2s;
      line-height: 13px;

      &:hover {
        background: ${darken(0.1, '#452E97')};
      }
    }

    a {
      font-weight: bold;
      color: #fff;
      font-size: 11px;
      line-height: 13px;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.2, '#fff')};
      }
    }
  }
`;
