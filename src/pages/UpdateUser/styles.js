import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 82px;

  form {
    display: flex;
    flex-direction: column;

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
    h1 {
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
      font-size: 20px;
      color: white;
    }
  }
`;

export const Button = styled.button`
  width: 313px;
  height: 44px;
  padding: 0 15px;
  border-radius: 4px;
  border: 0;
  margin: 0 0 13px;
  line-height: 13px;
  font-weight: bold;
  color: #fff;
  background: ${(props) => (props.primary ? '#10aa29' : '#8210AA')};
  margin-top: ${(props) => (props.primary ? '40px' : '')};
  transition: background 0.2s;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background: ${(props) =>
      props.primary ? darken(0.1, '#10aa29') : darken(0.1, '#8210AA')};
  }
`;
