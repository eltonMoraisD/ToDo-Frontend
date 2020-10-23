import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background-color: #fff;
  padding: 0 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Content = styled.div`
  height: 64px;
  max-height: 900px;
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    margin-right: 20px;
    padding-right: 20px;
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: 12px 'Roboto' sans-serif;
    }
    a {
      display: block;
      margin-top: 2px;
      font-weight: bold;
      font-size: 15px;
      color: #000000;
      opacity: 0.6;
    }
  }
`;
